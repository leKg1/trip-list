import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Trip, TripsState } from "./types";

const initialState: TripsState = {
  trips: [],
  totalTrips: 103,
  displayedTrips: 0,
  loading: false,
  error: null,
};

//------Async thunk to fetch trips------
export const fetchTrips = createAsyncThunk<
  Trip[],
  { start: number; limit: number },
  { rejectValue: string }
>("trips/fetchTrips", async ({ start, limit }, thunkAPI) => {
  try {
    const response = await fetch(
      `http://localhost:4000/trips?_start=${start}&_limit=${limit}`
    );
    if (!response.ok) {
      return thunkAPI.rejectWithValue("Failed to fetch trips");
    }
    return (await response.json()) as Trip[];
  } catch (error) {
    return thunkAPI.rejectWithValue("Failed to fetch trips");
  }
});

const tripsSlice = createSlice({
  name: "trips",
  initialState,
  reducers: {
    incrementDisplayedTrips(state, action) {
      state.displayedTrips = Math.min(
        state.displayedTrips + action.payload,
        state.totalTrips
      );
    },
    setDisplayedTrips(state, action) {
      state.displayedTrips = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrips.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTrips.fulfilled, (state, action) => {
        state.trips = [...state.trips, ...action.payload];
        state.loading = false;

        //------If all trips have been fetched, notify the user------
        if (state.trips.length >= state.totalTrips) {
          alert("поездок больше не найдено");
        }
      })
      .addCase(fetchTrips.rejected, (state, action) => {
        state.error = action.payload as string;
        state.loading = false;
      });
  },
});

export const { incrementDisplayedTrips, setDisplayedTrips } =
  tripsSlice.actions;
export default tripsSlice.reducer;
