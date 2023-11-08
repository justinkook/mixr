"use client";

import React, { useState } from "react";
import axios from "axios";

function LocationComponent() {
  const [location, setLocation] = useState({ city: "", state: "" });

  const handleClick = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        const response = await axios.get(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`
        );
        const locationData = response.data.results[0].address_components;
        const city = locationData.find((component: any) =>
          component.types.includes("locality")
        ).long_name;
        const state = locationData.find((component: any) =>
          component.types.includes("administrative_area_level_1")
        ).long_name;
        setLocation({
          city,
          state,
        });
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };

  return (
    <button
      className="text-gray-900 text-lg font-bold leading-7 self-stretch whitespace-nowrap -mr-5 mt-1"
      onClick={handleClick}
    >
      {location.city && location.state
        ? `${location.city}, ${location.state}`
        : "Current location"}
    </button>
  );
}

export default LocationComponent;
