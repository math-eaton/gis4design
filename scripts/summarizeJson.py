import os
import json
from collections import defaultdict
from datetime import datetime

def load_and_flatten_json(folder_path):
    flattened_data = []
    process_files = {"consolidated_satellites.json"}

    for filename in os.listdir(folder_path):
        if filename in process_files and filename.endswith(".json"):
            file_path = os.path.join(folder_path, filename)

            with open(file_path, "r") as f:
                data = json.load(f)

                if not isinstance(data, list):
                    print(f"Invalid structure in file: {filename}")
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
                            "launchYear": extract_year(satellite.get("launchDate")),
                            "decayYear": extract_year(satellite.get("decayDate"), "Still Active"),
                            "epochYear": extract_year(satellite.get("epoch")),
                            "isActive": satellite.get("isActive", False)
                        })

    return flattened_data


def extract_year(date_str, default="Unknown"):
    if not date_str:
        return default
    try:
        return datetime.fromisoformat(date_str).year
    except ValueError:
        return default


def summarize_data(flattened_data):
    summary = {
        "group_major": defaultdict(int),
        "group_minor": defaultdict(int),
        "country": defaultdict(int),
        "orbitClass": defaultdict(int),
        "constellation": defaultdict(int),
        "launchYear": defaultdict(int),
        "decayYear": defaultdict(int),
        "epochYear": defaultdict(int),
        "duplicates": 0
    }

    catalog_number_counts = defaultdict(int)
    unique_launches = defaultdict(set)  # Track unique launches by year, grouped by name

    for sat in flattened_data:
        launch_year = sat["launchYear"]
        name = sat["name"]

        # Check if the satellite is debris
        is_debris = "Debris" in sat["group_major"]

        # For debris, group by name to avoid double-counting
        if not is_debris or name not in unique_launches[launch_year]:
            # Count only once per unique satellite name for debris
            unique_launches[launch_year].add(name)

            # Increment summaries for non-debris or first instance of debris
            summary["launchYear"][launch_year] += 1

        for group in sat["group_major"]:
            summary["group_major"][group] += 1

        for minor in sat["group_minor"]:
            summary["group_minor"][minor] += 1

        for orbit in sat["orbitClass"]:
            summary["orbitClass"][orbit] += 1

        summary["country"][sat["country"]] += 1
        summary["constellation"][sat["constellation"]] += 1
        summary["decayYear"][sat["decayYear"]] += 1
        summary["epochYear"][sat["epochYear"]] += 1

        catalog_number_counts[sat["catalogNumber"]] += 1

    summary["duplicates"] = sum(count - 1 for count in catalog_number_counts.values() if count > 1)

    return summary


def save_summary(summary, output_file):
    # Convert defaultdicts to regular dicts for JSON serialization
    for key in summary:
        if isinstance(summary[key], defaultdict):
            summary[key] = dict(summary[key])

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
