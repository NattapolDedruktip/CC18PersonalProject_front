import React, { useEffect, useState } from "react";
//import 1
import {
  MapContainer,
  LayersControl,
  TileLayer,
  Marker,
  Popup,
  Tooltip,
  useMapEvent,
  LayerGroup,
  useMapEvents,
  Circle,
  useMap,
} from "react-leaflet";

//import 2
import "leaflet/dist/leaflet.css";
import * as L from "leaflet";

function Map() {
  const [position, setPosition] = useState(null);

  // for event click make marker

  const LocationMarker = () => {
    const [position, setPosition] = useState(null);
    const [form, setForm] = useState({ lat: null, lng: null });
    useMapEvents({
      click: (e) => {
        console.log(e.latlng);
        setPosition(e.latlng);
        setForm({
          ...form,
          lat: e.latlng.lat,
          lng: e.latlng.lng,
        });
      },
    });
    // return null;
    return form === null ? null : (
      <>
        <Marker position={form}>
          <Popup>You are here</Popup>
        </Marker>

        <Circle
          center={form}
          radius={1500}
          pathOptions={{
            color: "orange",
            fillColor: "orange",
            fillOpacity: 0.2,
          }}
        />
      </>
    );
  };

  //function for set start position
  function StartLocationMarker() {
    const [myLocation, setMyLocation] = useState(null);
    const map = useMap();

    useEffect(() => {
      map.locate().on("locationfound", (e) => {
        map.flyTo(e.latlng, 16);
        setMyLocation(e.latlng);
      });
    }, [map]);
    return myLocation === null ? null : (
      <Marker position={myLocation}>
        <Popup>You are here</Popup>
      </Marker>
    );
  }

  return (
    <div className="bg-MyBg w-full h-[90vh] flex justify-center items-end">
      {/* 1 */}
      <MapContainer
        center={[13, 100]}
        zoom={14}
        className="m-auto p-10 text-InputBg  bg-white w-[95%] h-[85vh] border-8 border-MainOrange"
      >
        {/* 2 */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* 4 event */}
        <StartLocationMarker />
        <LocationMarker />
      </MapContainer>
    </div>
  );
}

export default Map;
