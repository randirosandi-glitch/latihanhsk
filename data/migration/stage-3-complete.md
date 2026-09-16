# Stage 3 — package-data migration verification

Status: preparation checkpoint only.

Stage 3 target:
1. HSK 4 JSON packages available under `data/HSK 4/`.
2. Workbook HSK4a JSON packages available under `data/Workbook HSK4a/`.
3. Workbook HSK4b JSON packages available under `data/Workbook HSK4b/`.
4. `reading-passages.json` remains at `data/reading-passages.json` unless explicitly migrated later.
5. Package JSON contents must remain byte-for-byte equivalent to their source files after relocation.
6. No production `main` merge until the folder-aware loader and all migrated package paths are verified.

This file is a checkpoint marker; it does not claim the migration itself is complete.
