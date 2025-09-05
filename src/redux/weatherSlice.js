import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    current: null,
    forecast: [],
    status: "idle",
    error: null,
    activeTab: "next",
  },
  reducers: {
    setWeather: (state, action) => {
      state.current = action.payload.current;
      state.forecast = action.payload.forecast.forecastday;
      state.status = "succeeded";
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.status = "failed";
    },
    setLoading: (state) => {
      state.status = "loading";
    },
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
  },
});

export const { setWeather, setError, setLoading, setActiveTab } =
  weatherSlice.actions;

export default weatherSlice.reducer;
