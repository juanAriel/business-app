interface Point {
  latitude: number;
  longitude: number;
}

export const fetchRoute = async (
  start: Point,
  end: Point
): Promise<{ latitude: number; longitude: number }[]> => {
  try {
    const response = await fetch(
      `https://router.project-osrm.org/route/v1/driving/${start.longitude},${start.latitude};${end.longitude},${end.latitude}?overview=full`
    );
    const data = await response.json();

    if (data.routes.length > 0) {
      return decodePolyline(data.routes[0].geometry);
    } else {
      throw new Error("No routes found");
    }
  } catch (error) {
    console.error("Error fetching route:", error);
    return [];
  }
};

const decodePolyline = (
  str: string
): { latitude: number; longitude: number }[] => {
  const coords: { latitude: number; longitude: number }[] = [];
  let index = 0,
    lat = 0,
    lng = 0;

  while (index < str.length) {
    let b,
      shift = 0,
      result = 0;
    do {
      b = str.charCodeAt(index++) - 63;
      result |= (b & 0x1f) << shift;
      shift += 5;
    } while (b >= 0x20);
    const dlat = result & 1 ? ~(result >> 1) : result >> 1;
    lat += dlat;

    shift = 0;
    result = 0;
    do {
      b = str.charCodeAt(index++) - 63;
      result |= (b & 0x1f) << shift;
      shift += 5;
    } while (b >= 0x20);
    const dlng = result & 1 ? ~(result >> 1) : result >> 1;
    lng += dlng;

    coords.push({ latitude: lat / 1e5, longitude: lng / 1e5 });
  }
  return coords;
};
