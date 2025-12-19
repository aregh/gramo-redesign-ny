let currentStep = 1;
const state = {
    trackName: '',
    producer: '',
    registrantCode: 'K67', // Simulated default
    isNewProducer: false
};

function nextStep(step) {
    document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));
    document.getElementById(`step${step}`).classList.add('active');
    currentStep = step;

    if (step === 4) {
        generateFinalResult();
    }
}

function handleProducerCheck() {
    state.trackName = document.getElementById('trackName').value || 'Gary Speed 2';
    state.producer = document.getElementById('producerName').value;

    const statusDiv = document.getElementById('producerStatus');

    // Logic: if search contains "Gary", simulate existing. Else new.
    if (state.producer.toLowerCase().includes('gary')) {
        statusDiv.innerHTML = '<span style="color: var(--success)">✅ Funnet: Gary og de spedalske (K67)</span>';
        setTimeout(() => nextStep(4), 1000);
    } else {
        statusDiv.innerHTML = '<span style="color: var(--secondary)">⚠️ Fant ikke registrantkode for "' + state.producer + '"</span>';
        state.isNewProducer = true;
        setTimeout(() => nextStep(3), 1500);
    }
}

function generateFinalResult() {
    document.getElementById('displayTrackName').innerText = state.trackName;
    const year = new Date().getFullYear().toString().slice(-2);
    const index = "00001"; // Simulated index

    const isrc = `NO-${state.registrantCode}-${year}-${index}`;
    document.getElementById('isrcResult').innerText = isrc;
}

function copyISRC() {
    const isrc = document.getElementById('isrcResult').innerText;
    navigator.clipboard.writeText(isrc).then(() => {
        const btn = document.querySelector('#step4 .btn');
        const originalText = btn.innerText;
        btn.innerText = 'Kopiert!';
        btn.style.background = 'var(--success)';
        setTimeout(() => {
            btn.innerText = originalText;
            btn.style.background = 'var(--primary)';
        }, 2000);
    });
}
