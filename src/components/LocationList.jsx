import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addLocation, removeLocation, toggleVisited, updateLocation } from "../Redux/locationsSlice";
import List from "./List";
import Input from "./Input";
import Item from "./Item"
import "./liststyle.css";

const LocationList = () => {
  const dispatch = useDispatch();
  const [editingIndex, setEditingIndex] = useState(null);

  const handleAddLocation = ({ country, city, lat, lng }) => {
    if (/^-?\d*\.?\d*$/.test(lat) && /^-?\d*\.?\d*$/.test(lng)) {
      const newLocation = {
        country,
        city,
        coordinates: { lat: parseFloat(lat), lng: parseFloat(lng) },
        visited: false,
      };
      dispatch(addLocation(newLocation));
    } else {
      alert("Please enter valid decimal numbers for latitude and longitude.");
    }
  };

  const handleRemoveLocation = (index) => {
    dispatch(removeLocation(index));
  };

  const handleToggleVisited = (index) => {
    dispatch(toggleVisited(index));
  };

  const handleEditLocation = (index) => {
    setEditingIndex(index);
  };

  const handleUpdateLocation = (index, updatedLocation) => {
    dispatch(updateLocation({ index, updatedLocation }));
    setEditingIndex(null);
  };

  const handleCancelEdit = () => {
    setEditingIndex(null);
  };

  return (
    <div>
      <List
        handleEditLocation={handleEditLocation}
        handleRemoveLocation={handleRemoveLocation}
        handleToggleVisited={handleToggleVisited}
        editingIndex={editingIndex}
        handleUpdateLocation={handleUpdateLocation}
        handleCancelEdit={handleCancelEdit}
      />
      <Input handleAddLocation={handleAddLocation} />
    </div>
  );
};

export default LocationList;
