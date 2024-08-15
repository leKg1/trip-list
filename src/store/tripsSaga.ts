import { call, put, takeEvery } from "redux-saga/effects";
import {
  fetchTripsRequest,
  fetchTripsPending,
  fetchTripsFulfilled,
  fetchTripsRejected,
} from "./tripsSlice";
import { PayloadAction } from "@reduxjs/toolkit";
import { Trip } from "./types";

function* fetchTripsSaga(
  action: PayloadAction<{ start: number; limit: number }>
) {
  try {
    yield put(fetchTripsPending());
    const response: Response = yield call(
      fetch,
      `http://localhost:4000/trips?_start=${action.payload.start}&_limit=${action.payload.limit}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch trips");
    }

    const trips: Trip[] = yield response.json();
    yield put(fetchTripsFulfilled(trips));
  } catch (error) {
    yield put(fetchTripsRejected((error as Error).message));
  }
}

export function* watchFetchTripsSaga() {
  yield takeEvery(fetchTripsRequest.type, fetchTripsSaga);
}
