import os
import json
from collections import defaultdict


def load_and_flatten_json(folder_path):
    flattened_data = []
    # ignored_files = {"timestamps.json", "spacetrack_static.json"}
    process_files = {"consolidated_satellites.json"}

    for filename in os.listdir(folder_path):
        if filename in process_files and filename.endswith(".json"):
            print(f"Processing file: {filename}")  # Debugging print

            file_path = os.path.join(folder_path, filename)

            with open(file_path, "r") as f:
                data = json.load(f)
                print(f"Loaded file: {filename}")  # Debugging print

                if not isinstance(data, list):
                    print(f"Invalid structure in file: {filename}")  # Debugging print
                    continue

                for satellite in data:
                    catalog_number = satellite.get("catalogNumber")
                    if catalog_number:
                        flattened_data.append({
                            "catalogNumber": catalog_number,
                            "name": satellite.get("name", "Unknown"),
                            "tleLine1": satellite.get("tleLine1"),
                            "tleLine2": satellite.get("tleLine2"),
                            "constellation": satellite.get("constellation") or "Unknown",
                            "orbitClass": satellite.get("orbitClass", []),
                            "country": satellite.get("country", "Unknown"),
                            "group_major": satellite.get("group_major", []),
                            "group_minor": satellite.get("group_minor", []),
                        })
        elif filename not in process_files:
            print(f"Not processing file: {filename}")  # Debugging print

        print(f"Flattened data size: {len(flattened_data)}")  # Debugging print

    return flattened_data


def summarize_data(flattened_data):
    summary = {
        "group_major": defaultdict(int),
        "group_minor": defaultdict(int),
        "country": defaultdict(int),
        "orbitClass": defaultdict(int),
        "constellation": defaultdict(int),
        "duplicates": 0
    }

    catalog_number_counts = defaultdict(int)

    for sat in flattened_data:
        for group in sat["group_major"]:
            summary["group_major"][group] += 1

        for minor in sat["group_minor"]:
            summary["group_minor"][minor] += 1

        for orbit in sat["orbitClass"]:
            summary["orbitClass"][orbit] += 1

        summary["country"][sat["country"]] += 1
        summary["constellation"][sat["constellation"]] += 1

        catalog_number = sat["catalogNumber"]
        catalog_number_counts[catalog_number] += 1

    summary["duplicates"] = sum(count - 1 for count in catalog_number_counts.values() if count > 1)

    return summary


def save_summary(summary, output_file):
    summary["group_major"] = dict(summary["group_major"])
    summary["group_minor"] = dict(summary["group_minor"])
    summary["country"] = dict(summary["country"])
    summary["orbitClass"] = dict(summary["orbitClass"])
    summary["constellation"] = dict(summary["constellation"])

    with open(output_file, "w") as f:
        json.dump(summary, f, indent=4)

    print(f"Summary saved to {output_file}")


def main(folder_path, output_file):
    flattened_data = load_and_flatten_json(folder_path)
    summary = summarize_data(flattened_data)
    save_summary(summary, output_file)


folder_path = "cache"
output_file = "public/config/summary.json"

main(folder_path, output_file)