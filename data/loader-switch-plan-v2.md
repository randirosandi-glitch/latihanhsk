# Loader switch plan v2

The existing `index.html` still contains legacy lazy loading via `./data/<code>.json`.

Before moving any JSON package files into subfolders, replace that loader so package paths come from the folder catalog mapping.

Required behavior:

1. Folder name is the material/category name.
2. JSON basename is the package code.
3. Package loading uses the mapped folder path.
4. Empty/nonexistent folders are hidden.
5. No hardcoded HSK4/HSK5/workbook package arrays in the UI renderer.
6. Existing question/progress/study-plan behavior remains unchanged.
7. `main` is not changed until refactor branch is verified.
