import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useSelector } from 'react-redux';

import "leaflet-color-markers";

const visitedIcon = new L.Icon({
  iconUrl: require('leaflet-color-markers/img/marker-icon-green.png'),
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: require('leaflet-color-markers/img/marker-shadow.png'),
  shadowSize: [41, 41],
  shadowAnchor: [12, 41],
});

const notVisitedIcon = new L.Icon({
  iconUrl: require('leaflet-color-markers/img/marker-icon-red.png'),
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: require('leaflet-color-markers/img/marker-shadow.png'),
  shadowSize: [41, 41],
  shadowAnchor: [12, 41],
});

const MapPage = () => {
  const locations = useSelector((state) => state.locations.locations);

  const defaultCenter = [20.0, 0.0]; 

  return (
    <div>
      <h1>Map Page</h1>

      <MapContainer center={defaultCenter} zoom={2} style={{ height: '500px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {locations.map((location, index) => (
          <Marker
            key={index}
            position={[location.coordinates.lat, location.coordinates.lng]}
            icon={location.visited ? visitedIcon : notVisitedIcon}
          >
            <Popup>
              <strong>{location.city}, {location.country}</strong><br />
              Coordinates: {location.coordinates.lat}, {location.coordinates.lng}<br />
              Visited: {location.visited ? "Yes" : "No"}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapPage;
