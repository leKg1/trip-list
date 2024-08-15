import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import tripsReducer from "./tripsSlice";
import { watchFetchTripsSaga } from "./tripsSaga";

const saga = createSagaMiddleware();
const store = configureStore({
  reducer: {
    trips: tripsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saga),
});

saga.run(watchFetchTripsSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
