import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  locations: [
    { country: "USA", city: "New York", coordinates: { lat: 40.7128, lng: -74.0060 }, visited: false },
    { country: "France", city: "Paris", coordinates: { lat: 48.8566, lng: 2.3522 }, visited: true }
  ]
};

const locationsSlice = createSlice({
  name: "locations",
  initialState,
  reducers: {
    addLocation: (state, action) => {
      state.locations.push(action.payload);
    },
    removeLocation: (state, action) => {
      state.locations = state.locations.filter((_, index) => index !== action.payload);
    },
    toggleVisited: (state, action) => {
      const location = state.locations[action.payload];
      location.visited = !location.visited;
    },
    updateLocation: (state, action) => {
      const { index, updatedLocation } = action.payload;
      state.locations[index] = updatedLocation;
    },
  },
});

export const { addLocation, removeLocation, toggleVisited, updateLocation } = locationsSlice.actions;

export default locationsSlice.reducer;
