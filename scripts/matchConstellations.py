import os
import json
import re
from difflib import SequenceMatcher
from collections import defaultdict

def parse_json_files(directory):
    """Parse all .json files in the directory."""
    file_data = {}
    
    for filename in os.listdir(directory):
        if filename.endswith(".json"):
            filepath = os.path.join(directory, filename)
            try:
                with open(filepath, 'r') as file:
                    data = json.load(file)
                    if 'data' in data:
                        satellites = []
                        for key, group in data['data'].items():
                            if isinstance(group, list):  # Ensure it's a list
                                satellites.extend(group)
                        file_data[filepath] = satellites
                    else:
                        print(f"Skipping {filename}: 'data' key not found.")
            except (json.JSONDecodeError, KeyError) as e:
                print(f"Error processing {filename}: {e}")
    return file_data

def find_constellations(satellites):
    """Group satellites into constellations and append constellation key."""
    constellation_groups = defaultdict(list)

    for sat in satellites:
        matched = False
        candidate_constellation = None

        # Handle hyphenated names
        if '-' in sat["name"]:
            candidate_constellation = sat["name"].split('-')[0]

        # Handle parenthetical patterns (e.g., INTELSAT 901 (IS))
        match = re.search(r"([^(]+)\s*\(([^)]+)\)", sat["name"])
        if match:
            candidate_constellation = match.group(1).strip()

        # Fallback: Use prefix or first word for naming constellations
        if not candidate_constellation:
            candidate_constellation = sat["name"].split()[0]

        for constellation, group in constellation_groups.items():
            reference = group[0]

            # Match based on candidate_constellation
            if candidate_constellation and candidate_constellation == constellation:
                constellation_groups[constellation].append(sat)
                matched = True
                break

            # General similarity matching
            name_similarity = SequenceMatcher(None, sat["name"], reference["name"]).ratio()
            country_match = sat["country"] == reference["country"]
            orbit_class_match = sat["orbitClass"] == reference["orbitClass"]

            # Weighting logic for matches
            score = name_similarity + (0.5 if country_match else 0) + (0.5 if orbit_class_match else 0)
            if score > 1.5:  # Threshold for grouping
                constellation_groups[constellation].append(sat)
                matched = True
                break

        if not matched:
            # Assign to new constellation based on candidate_constellation
            constellation_groups[candidate_constellation].append(sat)

    # Assign constellation names back to satellites
    for constellation, group in constellation_groups.items():
        for sat in group:
            sat["constellation"] = constellation

    return satellites


def update_json_files(file_data):
    """Update the original .json files with constellation data."""
    for filepath, satellites in file_data.items():
        updated_satellites = find_constellations(satellites)
        
        try:
            with open(filepath, 'r+') as file:
                file_content = json.load(file)
                if 'data' in file_content:
                    # Iterate through each group in the data
                    for group, group_satellites in file_content['data'].items():
                        if isinstance(group_satellites, list):
                            # Match satellites from the updated list back to the group
                            updated_group = [
                                sat for sat in updated_satellites
                                if any(sat["catalogNumber"] == gs["catalogNumber"] for gs in group_satellites)
                            ]
                            file_content['data'][group] = updated_group
                    # Write the updated content back to the file
                    file.seek(0)
                    json.dump(file_content, file, indent=4)
                    file.truncate()
                    print(f"Updated {filepath}.")
                else:
                    print(f"Skipping {filepath}: 'data' key not found.")
        except (json.JSONDecodeError, KeyError, IOError) as e:
            print(f"Error updating {filepath}: {e}")

def main():
    directory = input("Enter the directory path containing .json files: ").strip()

    file_data = parse_json_files(directory)
    if file_data:
        update_json_files(file_data)
        print("All valid files have been updated.")
    else:
        print("No valid satellite data found.")

if __name__ == "__main__":
    main()
