import React, { useState, useEffect } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import { Icon } from "leaflet";
import PopupCity from "./PopupCity";
// import { cities } from "../Cities"
// import { routes } from "../Routes"
import { getCities, getRoutes } from '../ApiService';

function Map() {

  const [cities, setCities] = useState([]);
  const [routes, setRoutes] = useState([]);
 

  useEffect(() => {
    getCities().then((data) => setCities(data)).catch((error) => console.error(error));
    getRoutes().then((data) => setRoutes(data)).catch((error) => console.error(error));
  }, []);

  const position = [47.3769, 8.5417];

  const customIcon = new Icon({
    iconUrl: "icon.png",
    iconSize: [20, 20],
  });

  return (
    <>
      <MapContainer center={position} zoom={4.5}>
        <TileLayer
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
        />
        {cities.map((city) => (
          <Marker key={city.id} position={city.coordinates} icon={customIcon}>
            <Popup>
              <PopupCity key={city.id} city={city}/>
            </Popup>
          </Marker>
        ))}
        {routes.map((route) => (
          <Polyline key={route.id} positions={route.routecoordinates} />
        ))}
      </MapContainer>
    </>
  );
}

export default Map;




