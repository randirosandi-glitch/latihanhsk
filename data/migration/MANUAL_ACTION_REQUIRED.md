# Manual action required

The automated GitHub connector can create and update repository files, but it cannot safely execute a repository-wide move of the existing JSON blobs while preserving every blob byte-for-byte without first materializing and validating all source blobs.

Before the final migration, the owner should manually upload/copy the existing package JSON files into these folders on branch `refactor/dynamic-folder-catalog`:

- `data/HSK 4/` — all `H4*.json` package files currently in `data/`
- `data/Workbook HSK4a/` — all `WB4A*.json` package files currently in `data/`
- `data/Workbook HSK4b/` — all `WB4B*.json` package files currently in `data/`

Do not delete the original flat files yet.

Once the uploads are done, tell ChatGPT `@GitHub lanjut verifikasi migrasi` so the new paths can be checked before the old flat files are removed.
