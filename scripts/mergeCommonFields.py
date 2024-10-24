import pandas as pd
import os

# Function to dynamically read sheets from an Excel file
def read_excel_sheets(input_file):
    xls = pd.ExcelFile(input_file)
    sheets = xls.sheet_names  # Dynamically get the list of all sheet names
    
    sheet_columns = {}
    sheet_dfs = []

    # Iterate over each sheet to find common columns
    print(f"Found {len(sheets)} sheets in the Excel file. Processing each sheet...")

    for i, sheet in enumerate(sheets):
        print(f"Processing sheet {i+1}/{len(sheets)}: {sheet}")
        df = pd.read_excel(input_file, sheet_name=sheet)
        sheet_dfs.append(df)
        sheet_columns[sheet] = set(df.columns)
    
    print("Finished reading all sheets.")
    return sheet_columns, sheet_dfs

# Function to read CSV files from a directory
def read_csv_files(input_dir):
    csv_columns = {}
    csv_dfs = []
    
    csv_files = [f for f in os.listdir(input_dir) if f.endswith('.csv')]
    print(f"Found {len(csv_files)} CSV files in the directory. Processing each file...")

    # Iterate over all CSV files in the directory
    for i, csv_file in enumerate(csv_files):
        print(f"Processing file {i+1}/{len(csv_files)}: {csv_file}")
        file_path = os.path.join(input_dir, csv_file)
        df = pd.read_csv(file_path)
        csv_dfs.append(df)
        csv_columns[csv_file] = set(df.columns)

    print("Finished reading all CSV files.")
    return csv_columns, csv_dfs

# Main function to handle merging and writing the output
def merge_common_fields(input_path, output_file):
    print(f"Starting the process with input: {input_path}")

    if os.path.isfile(input_path):  # Excel input
        if input_path.endswith('.xlsx') or input_path.endswith('.xls'):
            sheet_columns, sheet_dfs = read_excel_sheets(input_path)
            all_columns = sheet_columns
            all_dfs = sheet_dfs
        else:
            print("Unsupported file format.")
            return
    elif os.path.isdir(input_path):  # Directory of CSVs
        csv_columns, csv_dfs = read_csv_files(input_path)
        all_columns = csv_columns
        all_dfs = csv_dfs
    else:
        print("Invalid input path.")
        return

    # Find the intersection of all column sets (common columns)
    print("Finding common columns across all sheets/files...")
    common_columns = set.intersection(*all_columns.values())
    
    if not common_columns:
        print("No common columns found across all sheets/files.")
        return

    print(f"Found {len(common_columns)} common columns. Proceeding with consolidation...")

    # DataFrame to hold consolidated data
    consolidated_df = pd.DataFrame()

    # If common columns exist, proceed with consolidation
    if common_columns:
        for i, df in enumerate(all_dfs):
            print(f"Filtering and merging data from sheet/file {i+1}/{len(all_dfs)}")
            # Filter the DataFrame to keep only the common columns
            filtered_df = df[list(common_columns)]
            
            # Append to the consolidated DataFrame without duplicate headers
            consolidated_df = pd.concat([consolidated_df, filtered_df], ignore_index=True)

        print(f"Writing the consolidated data to {output_file}...")

        # Write the consolidated data to a new file (Excel or CSV)
        if output_file.endswith('.xlsx'):
            if len(consolidated_df) > 1048576:
                print(f"Data exceeds Excel row limit. Saving as CSV instead.")
                output_file = output_file.replace('.xlsx', '.csv')
                consolidated_df.to_csv(output_file, index=False)
                print(f"Consolidation complete. Data saved as {'CSV' if output_file.endswith('.csv') else 'Excel'} to {output_file}.")
            else:
                consolidated_df.to_excel(output_file, index=False)
        elif output_file.endswith('.csv'):
            consolidated_df.to_csv(output_file, index=False)
        else:
            print("Unsupported output file format. Use .xlsx or .csv.")
        
        print(f"Consolidation complete. Data saved to {output_file}.")
    else:
        print("No common columns found across all sheets/files.")

# Example usage:
input_path = '/Users/matthewheaton/Documents/GitHub/gis4design/data/towers_consolidated_20241003.xlsx'
output_file = '/Users/matthewheaton/Documents/GitHub/gis4design/data/consolidated_output_20241018.xlsx'

merge_common_fields(input_path, output_file)
