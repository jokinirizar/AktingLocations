import React, { useState } from "react";
import "./liststyle.css";

const Item = ({ location, index, editingIndex, handleEditLocation, handleRemoveLocation, handleToggleVisited, handleUpdateLocation, handleCancelEdit }) => {
  const [editCountry, setEditCountry] = useState(location.country);
  const [editCity, setEditCity] = useState(location.city);
  const [editLat, setEditLat] = useState(location.coordinates.lat);
  const [editLng, setEditLng] = useState(location.coordinates.lng);
  const decimalPattern = /^-?\d*\.?\d*$/;

  const handleEditLatChange = (e) => {
    const value = e.target.value;
    if (decimalPattern.test(value) || value === "") {
      setEditLat(value);
    }
  };

  const handleEditLngChange = (e) => {
    const value = e.target.value;
    if (decimalPattern.test(value) || value === "") {
      setEditLng(value);
    }
  };

  const handleSave = () => {
    const finalLat = editLat === "" ? 0 : parseFloat(editLat);
    const finalLng = editLng === "" ? 0 : parseFloat(editLng);

    handleUpdateLocation(index, { country: editCountry, city: editCity, lat: finalLat, lng: finalLng });
  };

  return (
    <li className="liLocations">
      {editingIndex === index ? (
        <>
          <input
            type="text"
            value={editCountry}
            onChange={(e) => setEditCountry(e.target.value)}
            placeholder="Country"
          />
          <input
            type="text"
            value={editCity}
            onChange={(e) => setEditCity(e.target.value)}
            placeholder="City"
          />
          <input
            type="text"
            value={editLat}
            onChange={handleEditLatChange}
            placeholder="Latitude"
          />
          <input
            type="text"
            value={editLng}
            onChange={handleEditLngChange}
            placeholder="Longitude"
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancelEdit}>Cancel</button>
        </>
      ) : (
        <>
          <label>
            <input
              type="checkbox"
              checked={location.visited}
              onChange={() => handleToggleVisited(index)}
            />
            {location.country}, {location.city} (Lat: {location.coordinates.lat}, Lng: {location.coordinates.lng})
          </label>
          <div>
            <button onClick={() => handleEditLocation(index)}>Edit</button>
            <button onClick={() => handleRemoveLocation(index)}>Remove</button>
          </div>
        </>
      )}
    </li>
  );
};

export default Item;
