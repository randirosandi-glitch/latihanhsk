# Loader migration status

Current refactor branch: `refactor/dynamic-folder-catalog`

The folder catalog resolver exists, but `index.html` still contains the legacy `./data/<code>.json` lazy loader. Database files must not be moved into subfolders until the index loader is replaced and verified.

Target contract:

```text
data/<folder>/<package>.json
```

The folder name is the display category; the JSON basename is the package code. Empty/nonexistent folders are ignored.
