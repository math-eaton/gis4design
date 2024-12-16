import json
import pycountry
from pycountry_convert import country_alpha2_to_continent_code, country_alpha3_to_country_alpha2

# Mapping from continent codes returned by pycountry-convert to full names
CONTINENT_NAMES = {
    'AF': 'Africa',
    'NA': 'North America',
    'SA': 'South America',
    'EU': 'Europe',
    'AS': 'Asia',
    'OC': 'Oceania',
    'AN': 'Antarctica'
}

def get_continent(alpha2):
    try:
        continent_code = country_alpha2_to_continent_code(alpha2)
        return CONTINENT_NAMES.get(continent_code, "Unknown")
    except KeyError:
        # If the conversion fails for some reason
        return "Unknown"

def standardize_country(entry):
    country = entry.get('country', 'Unknown').upper()

    # Special case for CIS (Commonwealth of Independent States)
    # This is not an ISO country, so we'll handle it manually.
    if country == 'CIS':
        entry['country'] = 'CIS'
        entry['country_full'] = 'Commonwealth of Independent States'
        entry['continent'] = 'Eurasia'
        return entry

    if country == 'UNKNOWN' or not country:
        # Return defaults for unknown countries
        entry['country'] = 'UNK'
        entry['country_full'] = 'Unknown'
        entry['continent'] = 'Unknown'
        return entry

    country_obj = None

    # Try alpha_2 if length is 2
    if len(country) == 2:
        country_obj = pycountry.countries.get(alpha_2=country)
    elif len(country) == 3:
        # If we have alpha_3, we can try directly
        country_obj = pycountry.countries.get(alpha_3=country)
        if not country_obj:
            # If not found, maybe try converting alpha_3 to alpha_2
            try:
                alpha2 = country_alpha3_to_country_alpha2(country)
                country_obj = pycountry.countries.get(alpha_2=alpha2)
            except KeyError:
                pass

    # If still not found, try by name (this is a fallback)
    if not country_obj:
        country_obj = pycountry.countries.get(name=country.capitalize())

    # If we still don't have a match, return as unknown
    if not country_obj:
        entry['country'] = country
        entry['country_full'] = country
        entry['continent'] = 'Unknown'
        return entry

    # We have a valid country_obj now
    alpha2 = getattr(country_obj, 'alpha_2', None)
    alpha3 = getattr(country_obj, 'alpha_3', country)
    country_name = getattr(country_obj, 'name', country)

    entry['country'] = alpha3
    entry['country_full'] = country_name
    entry['continent'] = get_continent(alpha2) if alpha2 else "Unknown"
    return entry

def main():
    import sys
    input_file = sys.argv[1]
    output_file = sys.argv[2]

    with open(input_file, 'r') as f:
        data = json.load(f)

    for sat in data:
        sat = standardize_country(sat)

    with open(output_file, 'w') as f:
        json.dump(data, f, indent=2)

if __name__ == '__main__':
    main()
