import { useEffect, useState } from 'react';
import leaflet from 'leaflet';
import {ZOOM} from '../const';

function useMap(mapRef, activeCity) {
  const [map, setMap]  = useState(null);

  useEffect(() => {
    if (map === null) {

      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: activeCity.location.latitude,
          lng: activeCity.location.longitude,
        },
        zoom: ZOOM,
        zoomControl: false,
        marker: true,
      });

      leaflet
        .tileLayer(
          'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
          {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          },
        )
        .addTo(instance);

      setMap(instance);
    } else if (activeCity.location !== undefined) {
      map.panTo({
        lat: activeCity.location.latitude,
        lng: activeCity.location.longitude,
      });
    }
  }, [mapRef, map, activeCity]);

  return map;
}

export default useMap;
