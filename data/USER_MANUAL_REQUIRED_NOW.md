MANUAL ACTION REQUIRED NOW

The automatic GitHub connector cannot safely perform the final batch relocation of the existing package JSON files while preserving their contents and current loader behavior.

Please manually copy/upload these existing JSON files on branch refactor/dynamic-folder-catalog:

1. data/H41001.json through data/H41553D.json (all existing HSK package JSON files) -> data/HSK 4/
2. data/WB4A02.json through data/WB4A10.json -> data/Workbook HSK4a/
3. data/WB4B01.json through data/WB4B10.json -> data/Workbook HSK4b/

Do NOT delete the original flat files yet.

After the copies are uploaded, reply: @GitHub lanjut verifikasi migrasi
