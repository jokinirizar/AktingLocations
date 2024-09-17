import React, { useState } from "react";
import "./liststyle.css";

const Input = ({ handleAddLocation }) => {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const decimalPattern = /^-?\d*\.?\d*$/;

  const handleLatChange = (e) => {
    const value = e.target.value;
    if (decimalPattern.test(value) || value === "") {
      setLat(value);
    }
  };

  const handleLngChange = (e) => {
    const value = e.target.value;
    if (decimalPattern.test(value) || value === "") {
      setLng(value);
    }
  };

  const handleSubmit = () => {
    const finalLat = lat === "" ? 0 : parseFloat(lat);
    const finalLng = lng === "" ? 0 : parseFloat(lng);

    handleAddLocation({ country, city, lat: finalLat, lng: finalLng });
    setCountry("");
    setCity("");
    setLat("");
    setLng("");
  };

  return (
    <div className="addLocation">
      <h2>Add Location</h2>
      <input
        type="text"
        placeholder="Country"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />
      <input
        type="text"
        placeholder="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <input
        type="text"
        placeholder="Latitude"
        value={lat}
        onChange={handleLatChange}
      />
      <input
        type="text"
        placeholder="Longitude"
        value={lng}
        onChange={handleLngChange}
      />
      <button onClick={handleSubmit}>Add Location</button>
    </div>
  );
};

export default Input;
