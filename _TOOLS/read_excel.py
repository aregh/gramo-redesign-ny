#!/usr/bin/env python3
"""
Verktøy for å lese Excel-filer (.xlsx) og vise innhald.

Bruk:
    python3 _tools/read_excel.py <fil.xlsx> [ark] [--rows N]

Eksempel:
    python3 _tools/read_excel.py Analyse/Teknisk/Echo-felter.xlsx
    python3 _tools/read_excel.py Analyse/Teknisk/Echo-felter.xlsx echo_schema.csv
    python3 _tools/read_excel.py Analyse/Teknisk/Echo-felter.xlsx mapped.csv --rows 50
"""

import sys
import pandas as pd

def main():
    if len(sys.argv) < 2:
        print(__doc__)
        sys.exit(1)

    filepath = sys.argv[1]
    sheet_name = sys.argv[2] if len(sys.argv) > 2 and not sys.argv[2].startswith('--') else None

    # Finn --rows argument
    rows = 30  # default
    for i, arg in enumerate(sys.argv):
        if arg == '--rows' and i + 1 < len(sys.argv):
            rows = int(sys.argv[i + 1])

    try:
        xlsx = pd.ExcelFile(filepath)

        if sheet_name is None:
            # Vis oversikt over alle ark
            print(f"=== ARK I {filepath} ===\n")
            for name in xlsx.sheet_names:
                df = pd.read_excel(xlsx, name)
                print(f"  {name}: {len(df)} rader, {len(df.columns)} kolonnar")
            print(f"\nBruk: python3 {sys.argv[0]} {filepath} <arknavn> for å sjå innhald")
        else:
            # Vis innhald av spesifikt ark
            df = pd.read_excel(xlsx, sheet_name)
            print(f"=== {sheet_name} ({len(df)} rader, {len(df.columns)} kolonnar) ===\n")
            print(f"Kolonnar: {list(df.columns)}\n")
            print(df.head(rows).to_string())
            if len(df) > rows:
                print(f"\n... ({len(df) - rows} fleire rader)")

    except FileNotFoundError:
        print(f"Feil: Fann ikkje fila '{filepath}'")
        sys.exit(1)
    except ValueError as e:
        print(f"Feil: {e}")
        print(f"Tilgjengelege ark: {xlsx.sheet_names}")
        sys.exit(1)

if __name__ == '__main__':
    main()
