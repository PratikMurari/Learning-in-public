# 📁 CSV Folder Merger

Merges all CSV files from a specified folder into a single, timestamped Excel file.

---

## 🧰 Requirements

- Python 3.7+
- pandas
- openpyxl

Install dependencies:

```bash
pip install pandas openpyxl
```

for python 3 user having some issues

```bash
pip3 install pandas openpyxl
```

---

## ⚙️ Setup & Configuration

Before running, open the script and update **one line**:

```python
folder_path = os.path.expanduser("")  # ← Put your folder path here
```

**Examples:**

| OS          | Example Path                               |
| ----------- | ------------------------------------------ |
| Mac / Linux | `"/Users/yourname/Documents/my_folder"`    |
| Windows     | `r"C:\Users\yourname\Documents\my_folder"` |

---

## ▶️ How to Run

```bash
python merge_csv.py
```

The output file will be saved **in the same folder** as your source files, named like:

```
merged_output_20250617_143022.xlsx
```

The timestamp prevents accidental overwrites if you run it multiple times.

---

## 🔄 Adapting for Different File Formats

### Input format (currently: `.csv`)

| Your format | Change in script                                          |
| ----------- | --------------------------------------------------------- |
| `.xlsx`     | `f.endswith('.xlsx')` + `pd.read_excel(file_path)`        |
| `.tsv`      | `f.endswith('.tsv')` + `pd.read_csv(file_path, sep='\t')` |
| `.json`     | `f.endswith('.json')` + `pd.read_json(file_path)`         |

There are **two places** to update for input format:

1. The file filter list (where it collects files)
2. The `pd.read_*` call inside the loop

### Output format (currently: `.xlsx`)

| Want | Replace `to_excel(...)` with             |
| ---- | ---------------------------------------- |
| CSV  | `to_csv(output_path, index=False)`       |
| JSON | `to_json(output_path, orient='records')` |

Also update the output filename extension accordingly.

---

## 📝 Notes

- **Encoding errors?** Try changing `encoding='utf-8'` to `encoding='latin-1'` in the `read_csv` call.
- **Bad/corrupt rows?** `on_bad_lines='skip'` silently skips malformed rows — remove it if you'd rather it crash loudly.
- **Source tracking:** A `Source_File` column is automatically added to each row so you can trace data back to its original file.
- **Open files:** Files starting with `~$` are skipped (those are Excel's temp lock files when a file is currently open).
