import os
import json
from collections import defaultdict


def load_and_flatten_json(folder_path):

    flattened_data = []
    ignored_files = {"timestamps.json", "spacetrack_static.json"}

    for filename in os.listdir(folder_path):
        print(f"Processing file: {filename}")  # Debugging print
        if filename in ignored_files or not filename.endswith(".json"):
            print(f"Ignored file: {filename}")  # Debugging print
            continue

        file_path = os.path.join(folder_path, filename)

        with open(file_path, "r") as f:
            data = json.load(f)
            print(f"Loaded file: {filename}")  # Debugging print

            group_major = data.get("group_major", "Unknown")
            if not isinstance(data.get("data"), dict):
                print(f"Invalid structure in file: {filename}")  # Debugging print
                continue

            for group_minor, satellites in data["data"].items():
                if not isinstance(satellites, list):
                    print(f"Invalid satellites list under group_minor {group_minor} in {filename}")  # Debugging print
                    continue

                for satellite in satellites:
                    catalog_number = satellite.get("catalogNumber")
                    if catalog_number:
                        flattened_data.append({
                            "catalogNumber": catalog_number,
                            "name": satellite.get("name", "Unknown"),
                            "tleLine1": satellite.get("tleLine1"),
                            "tleLine2": satellite.get("tleLine2"),
                            "orbitClass": satellite.get("orbitClass", "Unknown"),
                            "country": satellite.get("country", "Unknown"),
                            "group_major": group_major,
                            "group_minor": group_minor,
                        })
    print(f"Flattened data size: {len(flattened_data)}")  # Debugging print
    return flattened_data


def summarize_data(flattened_data):
    summary = {
        "group_major": defaultdict(int),
        "group_minor": defaultdict(int),
        "country": defaultdict(int),
        "orbitClass": defaultdict(int),
        "duplicates": 0
    }

    catalog_number_counts = defaultdict(int)


    for sat in flattened_data:
        summary["group_major"][sat["group_major"]] += 1
        summary["group_minor"][sat["group_minor"]] += 1
        summary["country"][sat["country"]] += 1
        summary["orbitClass"][sat["orbitClass"]] += 1


        catalog_number = sat["catalogNumber"]
        catalog_number_counts[catalog_number] += 1

    summary["duplicates"] = sum(count - 1 for count in catalog_number_counts.values() if count > 1)

    return summary

def save_summary(summary, output_file):
    summary["group_major"] = dict(summary["group_major"])
    summary["group_minor"] = dict(summary["group_minor"])
    summary["country"] = dict(summary["country"])
    summary["orbitClass"] = dict(summary["orbitClass"])

    with open(output_file, "w") as f:
        json.dump(summary, f, indent=4)

    print(f"Summary saved to {output_file}")

def main(folder_path, output_file):
    flattened_data = load_and_flatten_json(folder_path)
    summary = summarize_data(flattened_data)
    save_summary(summary, output_file)


folder_path = "/Users/matthewheaton/Documents/GitHub/orbital/cache"  # Replace with the path to your folder containing JSON files
output_file = "/Users/matthewheaton/Documents/GitHub/orbital/cache/summary.json"  # Replace with your desired output file name

main(folder_path, output_file)