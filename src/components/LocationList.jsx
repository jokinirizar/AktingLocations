import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addLocation, removeLocation, toggleVisited, updateLocation } from "../Redux/locationsSlice";
import "./liststyle.css";

const LocationList = () => {
  const locations = useSelector((state) => state.locations.locations);
  const dispatch = useDispatch();

  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");

  const [editingIndex, setEditingIndex] = useState(null);
  const [editCountry, setEditCountry] = useState("");
  const [editCity, setEditCity] = useState("");
  const [editLat, setEditLat] = useState("");
  const [editLng, setEditLng] = useState("");

  // Regex for validating decimal numbers
  const decimalPattern = /^-?\d*\.?\d*$/;

  // Add new location
  const handleAddLocation = () => {
    if (decimalPattern.test(lat) && decimalPattern.test(lng)) {
      const newLocation = {
        country,
        city,
        coordinates: { lat: parseFloat(lat), lng: parseFloat(lng) },
        visited: false,
      };
      dispatch(addLocation(newLocation));
      setCountry("");
      setCity("");
      setLat("");
      setLng("");
    } else {
      alert("Please enter valid decimal numbers for latitude and longitude.");
    }
  };

  // Remove location
  const handleRemoveLocation = (index) => {
    dispatch(removeLocation(index));
  };

  // Toggle visited
  const handleToggleVisited = (index) => {
    dispatch(toggleVisited(index));
  };

  // Start editing a location
  const handleEditLocation = (index) => {
    const location = locations[index];
    setEditCountry(location.country);
    setEditCity(location.city);
    setEditLat(location.coordinates.lat);
    setEditLng(location.coordinates.lng);
    setEditingIndex(index);
  };

  // Save the edited location
  const handleUpdateLocation = (index) => {
    if (decimalPattern.test(editLat) && decimalPattern.test(editLng)) {
      const updatedLocation = {
        country: editCountry,
        city: editCity,
        coordinates: { lat: parseFloat(editLat), lng: parseFloat(editLng) },
        visited: locations[index].visited, // Preserve visited status
      };
      dispatch(updateLocation({ index, updatedLocation }));
      setEditingIndex(null); // Exit editing mode
    } else {
      alert("Please enter valid decimal numbers for latitude and longitude.");
    }
  };

  // Cancel editing
  const handleCancelEdit = () => {
    setEditingIndex(null);
  };

  // Validate lat input
  const handleLatChange = (e) => {
    const value = e.target.value;
    if (decimalPattern.test(value)) {
      setLat(value);
    }
  };

  // Validate lng input
  const handleLngChange = (e) => {
    const value = e.target.value;
    if (decimalPattern.test(value)) {
      setLng(value);
    }
  };

  // Edit lat input
  const handleEditLatChange = (e) => {
    const value = e.target.value;
    if (decimalPattern.test(value)) {
      setEditLat(value);
    }
  };

  // Edit lng input
  const handleEditLngChange = (e) => {
    const value = e.target.value;
    if (decimalPattern.test(value)) {
      setEditLng(value);
    }
  };

  return (
    <div>
      <h2> Locations </h2>
      <ul className="ulLocations">
        {locations.map((location, index) => (
          <li className="liLocations" key={index}>
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
                <button onClick={() => handleUpdateLocation(index)}>Save</button>
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
        ))}
      </ul>

      <h2>Add Location</h2>
      <div className="addLocation">
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
        <button onClick={handleAddLocation}>Add Location</button>
      </div>
    </div>
  );
};

export default LocationList;
