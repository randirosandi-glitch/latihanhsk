# Data migration checkpoint

The refactor branch still has the legacy flat JSON database paths in place. Do not delete or move the existing package JSON files until `index.html` uses the folder catalog resolver in the actual lazy-load path.

Current legacy paths remain under `data/*.json`.

Target paths:
- `data/HSK 4/<HSK4 code>.json`
- `data/HSK 5/<HSK5 code>.json`
- `data/Workbook HSK4a/<WB4A code>.json`
- `data/Workbook HSK4b/<WB4B code>.json`

The migration must preserve JSON content byte-for-byte and should be verified before deleting legacy copies.
