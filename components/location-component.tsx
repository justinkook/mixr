"use client";

import React, { useState } from "react";
import axios from "axios";

function LocationComponent() {
  const [location, setLocation] = useState({ city: "", country: "" });

  const handleClick = async () => {
    const response = await axios.get(
      `https://api.ipstack.com/check?access_key=${process.env.NEXT_PUBLIC_IPSTACK_API_KEY}`
    );
    const { city, country_name } = response.data;
    setLocation({
      city,
      country: country_name,
    });
  };

  return (
    <button
      className="text-gray-900 text-lg font-bold leading-7 self-stretch whitespace-nowrap -mr-5 mt-1"
      onClick={handleClick}
    >
      {location.city && location.country
        ? `${location.city}, ${location.country}`
        : "Current location"}
    </button>
  );
}

export default LocationComponent;
