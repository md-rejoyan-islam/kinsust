import React from "react";

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  height: "400px",
};
const onLoad = (marker) => {
  
};
const center = {
  lat: 24.9203068348844,
  lng: 91.83228375215963
};


const Map = () => {
  return (
    <div className="border-4 rounded-lg dark:border-yellow-200 border-[#1b3b4b]">
      <LoadScript googleMapsApiKey="AIzaSyDhWWmZ-Jovpu6rwfSsFt9qYdUSd3G7Mxc">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={16}>
          {/* Child components, such as markers, info windows, etc. */}
          <Marker position={center} onLoad={onLoad} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Map;
