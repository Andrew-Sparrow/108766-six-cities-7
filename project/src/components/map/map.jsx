import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/use-map';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const';

function Map(props) {
  const { city, points, selectedPoint } = props;
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [27, 39],
    iconAnchor: [14, 39],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [27, 39],
    iconAnchor: [14, 39],
  });

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        if (point.city.name === city.name) {
          leaflet
            .marker({
              lat: point.location.latitude,
              lng: point.location.longitude,
            }, {
              icon: (point.id === selectedPoint.id)
                ? currentCustomIcon
                : defaultCustomIcon,
            })
            .addTo(map);
        }
      });
    }
  }, [map, points, selectedPoint]);

  return (
    <div
      style={{ height: '100%' }}
      ref={mapRef}
    >
    </div>
  );
}

Map.propTypes = {
  city: PropTypes.object,
  selectedPoint: PropTypes.object,
  points: PropTypes.array,
};

export default Map;
