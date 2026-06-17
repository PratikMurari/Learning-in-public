import os
import pandas as pd
from datetime import datetime

# Path to your folder (make sure to update this to your actual folder path)
# You can drag and drop your folder from Finder directly into the Terminal to get the exact path
folder_path = os.path.expanduser("")

print("Checking folder path...")
if not os.path.exists(folder_path):
    print(f"❌ Error: The directory '{folder_path}' does not exist.")
    exit()

# Get all CSV files now!
# if .endswith(".xlsx") or f.endswith(".xls") for Excel files
csv_files = [f for f in os.listdir(folder_path) if f.endswith('.csv') and not f.startswith('~$')]

# Check if we found any CSV files
if not csv_files:
    print("❌ No CSV files found in the specified folder.")
    exit()

# Let's print out the number of files we found before we start processing
print(f"📂 Found {len(csv_files)} CSV files. Starting the merge...")

# We will read each CSV file, add a column for the source filename, and store them in a list
all_data = []
for index, file in enumerate(csv_files, start=1):
    file_path = os.path.join(folder_path, file)
    try:
        df = pd.read_csv(file_path, encoding='utf-8', on_bad_lines='skip')
        
        df['Source_File'] = file 
        all_data.append(df)
        print(f"Progress: [{index}/{len(csv_files)}] Processed: {file}")
    except Exception as e:
        print(f"⚠️ Skipping file {file} due to an error: {e}")

# Combine everything
print("🤖 Concatenating all CSVs into a single dataframe...")
merged_df = pd.concat(all_data, ignore_index=True)

# Generate output filename
timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
output_file = f"merged_output_{timestamp}.xlsx"
output_path = os.path.join(folder_path, output_file)

# Export the final merged data into a clean Excel file
print("💾 Writing data to the final Excel file...")
merged_df.to_excel(output_path, index=False)

print(f"\n✅ Success! Merged {len(all_data)} CSV files into a single Excel worksheet.")
print(f"📍 Saved as: {output_path}")