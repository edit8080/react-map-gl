import dotenv from "dotenv";
import React, { useState } from "react";
import ReactMapGL from "react-map-gl";

dotenv.config();
const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX;

function MapBox() {
  const [viewport, setViewport] = useState({
    width: 800,
    height: 800,
    latitude: 37.5642135,
    longitude: 127.0016985,
    zoom: 10,
  });

  return (
    <ReactMapGL
      {...viewport}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
      mapboxApiAccessToken={MAPBOX_TOKEN}
    ></ReactMapGL>
  );
}
export default MapBox;
