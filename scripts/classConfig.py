import json
import random

def generate_unique_colors(categories):
    """
    Generate unique colors for a set of categories.
    Colors are in hexadecimal format (e.g., 0xff0000).
    """
    colors = {}
    palette = [
        0xff0000, 0x00ff00, 0x0000ff, 0xffff00, 0xff00ff, 0x00ffff,
        0x888888, 0x880000, 0x008800, 0x000088, 0xff8800, 0x88ff00,
    ]
    for i, category in enumerate(categories):
        colors[category] = palette[i % len(palette)]
    return colors

def generate_config_from_summary(summary_file, output_file):
    with open(summary_file, 'r') as f:
        summary = json.load(f)
    
    # Identify unique categories and assign colors
    config = {}
    for key in ["group_major", "group_minor", "country", "orbitClass"]:
        unique_values = summary.get(key, {}).keys()
        config[key] = {
            "getClass": f"(sat) => sat.{key} || 'Unknown'",
            "colors": generate_unique_colors(unique_values),
        }

    # Write the configuration to a JSON file
    with open(output_file, 'w') as f:
        json.dump(config, f, indent=4)
    print(f"Configuration file generated at: {output_file}")

summary_file = "src/config/summary.json"
output_file = "src/config/classification_config.json" 
generate_config_from_summary(summary_file, output_file)