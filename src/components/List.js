import "./liststyle.css";
import React from "react";
import { useSelector } from "react-redux";
import Item from "./Item";
import "./liststyle.css";

const List = ({ handleEditLocation, 
                handleRemoveLocation, 
                handleToggleVisited,
                editingIndex, 
                handleUpdateLocation,
                handleCancelEdit }) => {
                    
  const locations = useSelector((state) => state.locations.locations);

  return (
    <div>
      <h2>Locations</h2>
      <ul className="ulLocations">
        {locations.map((location, index) => (
          <Item
            key={index}
            location={location}
            index={index}
            editingIndex={editingIndex}
            
            handleEditLocation={handleEditLocation}
            handleRemoveLocation={handleRemoveLocation}
            handleToggleVisited={handleToggleVisited}
            handleUpdateLocation={handleUpdateLocation}
            handleCancelEdit={handleCancelEdit}
          />
        ))}
      </ul>
    </div>
  );
};

export default List;
