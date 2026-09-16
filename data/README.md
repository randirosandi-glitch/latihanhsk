# HSK data structure

Package categories are folders under `data/`.

- `data/HSK 4/`
- `data/HSK 5/`
- `data/Workbook HSK4a/`
- `data/Workbook HSK4b/`

Each package is a JSON file inside its category folder. The JSON basename is the package code, for example `H41001.json`.

Folders with no JSON package files are ignored by the dynamic catalog.

The app should derive package/category listings from these folders rather than maintaining a hardcoded package catalog in `index.html`.
