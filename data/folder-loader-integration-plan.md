# Folder Loader Integration Plan

1. Folder names under `data/` are the package categories shown by the app.
2. JSON filenames without `.json` are package codes.
3. The package loader must resolve a code through the discovered folder mapping before fetching a package JSON.
4. Existing UI/navigation/progress behavior must remain unchanged.
5. `main` must not be changed until the refactor branch is verified.
