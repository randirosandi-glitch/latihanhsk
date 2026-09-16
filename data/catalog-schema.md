# Dynamic data catalog contract

`data/` is the content source. Each non-empty subfolder containing `.json` package files is a category shown by the application.

Rules:

- Folder name is the category name displayed by the UI.
- JSON filename without `.json` is the package code.
- Empty folders are ignored.
- `manifest.json` and `reading-passages.json` are infrastructure files, not package cards.
- New HSK levels or workbook categories should require only adding the folder and JSON files; the UI must not require a hardcoded package list.

Target structure:

```text
 data/
 ├── HSK 4/
 │   ├── H41001.json
 │   └── ...
 ├── HSK 5/
 │   ├── H51001.json
 │   └── ...
 ├── Workbook HSK4a/
 │   ├── WB4A02.json
 │   └── ...
 └── Workbook HSK4b/
     ├── WB4B01.json
     └── ...
```
