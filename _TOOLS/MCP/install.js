const fs = require('fs');
const path = require('path');
const os = require('os');

// Paths
const CONFIG_DIR = path.join(os.homedir(), 'Library', 'Application Support', 'Claude');
const CONFIG_FILE = path.join(CONFIG_DIR, 'claude_desktop_config.json');
const ENV_FILE = path.join(__dirname, '.env');
const MCP_SERVERS_FILE = path.join(__dirname, 'mcp-servers.json');

// Helper to load .env manually (to avoid dependency on dotenv)
function loadEnv() {
  if (!fs.existsSync(ENV_FILE)) {
    console.error('Error: .env file not found in mcp-config directory.');
    console.error('Please copy .env.example to .env and fill in your API keys.');
    process.exit(1);
  }

  const content = fs.readFileSync(ENV_FILE, 'utf8');
  const env = {};
  content.split('\n').forEach(line => {
    const match = line.match(/^([^=]+)=(.*)$/);
    if (match) {
      const key = match[1].trim();
      const value = match[2].trim();
      if (key && !key.startsWith('#')) {
        env[key] = value;
      }
    }
  });
  return env;
}

function main() {
  console.log('Starting MCP Setup for Gramo...');

  // 1. Load Environment Variables
  const env = loadEnv();
  console.log('Loaded environment variables.');

  // 2. Read MCP Servers Definition
  if (!fs.existsSync(MCP_SERVERS_FILE)) {
    console.error(`Error: ${MCP_SERVERS_FILE} not found.`);
    process.exit(1);
  }
  const mcpConfigRaw = fs.readFileSync(MCP_SERVERS_FILE, 'utf8');
  const mcpConfig = JSON.parse(mcpConfigRaw);
  
  // 3. Prepare new servers object
  const newServers = {};

  for (const [serverName, serverConfig] of Object.entries(mcpConfig.mcpServers)) {
    console.log(`Configuring ${serverName}...`);
    
    // Clone config to avoid mutating original
    const config = JSON.parse(JSON.stringify(serverConfig));

    // Replace environment variables in env block
    if (config.env) {
      for (const [key, value] of Object.entries(config.env)) {
        if (typeof value === 'string' && value.startsWith('${') && value.endsWith('}')) {
          const envVarName = value.slice(2, -1);
          if (env[envVarName]) {
            config.env[key] = env[envVarName];
          } else {
            console.warn(`Warning: Missing environment variable ${envVarName} for ${serverName}. Skipping.`);
          }
        }
      }
    }
    
    // Remove description field as it's not standard MCP config (it was for documentation)
    delete config.description;

    newServers[serverName] = config;
  }

  // 4. Read Existing Claude Config
  let claudeConfig = {};
  if (fs.existsSync(CONFIG_FILE)) {
    try {
      claudeConfig = JSON.parse(fs.readFileSync(CONFIG_FILE, 'utf8'));
    } catch (e) {
      console.error('Error reading existing Claude config, starting fresh.');
    }
  }

  // 5. Merge Configurations
  claudeConfig.mcpServers = {
    ...claudeConfig.mcpServers,
    ...newServers
  };

  // 6. Write Back
  // Ensure directory exists
  if (!fs.existsSync(CONFIG_DIR)) {
    fs.mkdirSync(CONFIG_DIR, { recursive: true });
  }

  fs.writeFileSync(CONFIG_FILE, JSON.stringify(claudeConfig, null, 2));
  console.log(`Successfully updated ${CONFIG_FILE}`);
  console.log('Please restart Claude Desktop to apply changes.');
}

main();
