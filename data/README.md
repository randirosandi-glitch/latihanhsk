# Dynamic HSK data folders

Each subfolder under `data/` represents one package category shown by the app.

- Folder name = category/level name shown in the UI.
- Each `.json` file inside the folder = one package.
- JSON filename without `.json` = package code.
- Empty folders are ignored.

Example:

```text
data/
├── HSK 4/
│   ├── H41001.json
│   └── H41002.json
├── HSK 5/
│   └── H51001.json
├── Workbook HSK4a/
│   └── WB4A02.json
└── Workbook HSK4b/
    └── WB4B01.json
```
