import { split, map, pipe, filter } from "ramda";

export type Airport = {
  id: number; // Unique OpenFlights identifier for this airport.
  name: string; // Name of airport. May or may not contain the City name.
  city: string; // Main city served by airport. May be spelled differently from Name.
  country: string; // Country or territory where airport is located. See Countries to cross-reference to ISO 3166-1 codes.
  IATA: string; //3-letter IATA code. Null if not assigned/unknown.
  ICAO: string; // 4-letter ICAO code. Null if not assigned.

  latitude: number; // Decimal degrees, usually to six significant digits. Negative is South, positive is North.
  longitude: number; // Decimal degrees, usually to six significant digits. Negative is West, positive is East.
  altitude: number; // 	In feet.
  timezone: number; // Hours offset from UTC. Fractional hours are expressed as decimals, eg. India is 5.5.

  DST: string; // Daylight savings time. One of E (Europe), A (US/Canada), S (South America), O (Australia), Z (New Zealand), N (None) or U (Unknown). See also: Help: Time
  Tz: string; // Timezone in "tz" (Olson) format, eg. "America/Los_Angeles".

  type: string; //Type of the airport. Value "airport" for air terminals, "station" for train stations, "port" for ferry terminals and "unknown" if not known. In airports.csv, only type=airport is included.
  source: string; //  Source of this data. "OurAirports" for data sourced from OurAirports, "Legacy" for old data not matched to OurAirports (mostly DAFIF), "User" for unverified user contributions. In airports.csv, only source=OurAirports is included.
};

const toAirport: (source: string[]) => Airport = ([
  id,
  name,
  city,
  country,
  IATA,
  ICAO,
  latitude,
  longitude,
  altitude,
  timezone,
  DST,
  Tz,
  type,
  source,
]) => ({
  id: Number(id),
  name,
  city,
  country,
  IATA,
  ICAO,
  latitude: Number(latitude),
  longitude: Number(longitude),
  altitude: Number(altitude),
  timezone: Number(timezone),
  DST,
  Tz,
  type,
  source,
});

function serialize(str: string) {
  const result: string[] = [];
  const sep1 = ",";
  const sep2 = '"';

  for (let i = 0; i < str.length; i++) {
    if (str[i] === sep2) {
      const next = str.indexOf(sep2, i + 1);
      const token = str.slice(i + 1, next);
      result.push(token);
      i = next;
      continue;
    }
    if (str[i] === sep1) {
      continue;
    }
    const next = str.indexOf(sep1, i + 1);
    const token = str.slice(i, next);
    result.push(token);
    i = next;
  }

  return result;
}

function include({ IATA, city }: Airport) {
  return Boolean(city) && IATA !== "\\N";
}

const URL = `https://raw.githubusercontent.com/jpatokal/openflights/master/data/airports.dat`;
export default function getAirport() {
  return fetch(URL)
    .then((data) => data.text())
    .then(split("\n"))
    .then(map(pipe(serialize, toAirport)))
    .then(filter(include));
}
