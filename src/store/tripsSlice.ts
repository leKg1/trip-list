import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Trip, TripsState } from "./types";

const initialState: TripsState = {
  trips: [],
  totalTrips: 103,
  displayedTrips: 0,
  loading: false,
  error: null,
};

const tripsSlice = createSlice({
  name: "trips",
  initialState,
  reducers: {
    incrementDisplayedTrips(state, action: PayloadAction<number>) {
      state.displayedTrips = Math.min(
        state.displayedTrips + action.payload,
        state.totalTrips
      );
    },
    setDisplayedTrips(state, action: PayloadAction<number>) {
      state.displayedTrips = action.payload;
    },
    fetchTripsPending(state) {
      state.loading = true;
      state.error = null;
    },
    fetchTripsFulfilled(state, action: PayloadAction<Trip[]>) {
      state.trips = [...state.trips, ...action.payload];
      state.loading = false;

      if (state.trips.length >= state.totalTrips) {
        alert("поездок больше не найдено");
      }
    },
    fetchTripsRejected(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.loading = false;
    },
    fetchTripsRequest: (
      state,
      action: PayloadAction<{ start: number; limit: number }>
    ) => {},
  },
});

export const {
  incrementDisplayedTrips,
  setDisplayedTrips,
  fetchTripsPending,
  fetchTripsFulfilled,
  fetchTripsRejected,
  fetchTripsRequest,
} = tripsSlice.actions;

export default tripsSlice.reducer;
