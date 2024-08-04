import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store";
import { useAppDispatch } from "../store/useAppDispatch";
import {
  fetchTrips,
  incrementDisplayedTrips,
  setDisplayedTrips,
} from "../store/tripsSlice";
import TripCard from "./TripCard";

const TripList: React.FC = () => {
  const dispatch: AppDispatch = useAppDispatch();
  const { trips, displayedTrips, totalTrips, loading, error } = useSelector(
    (state: RootState) => state.trips
  );

  useEffect(() => {
    if (displayedTrips === 0) {
      dispatch(setDisplayedTrips(30));
      dispatch(fetchTrips({ start: 0, limit: 30 }));
    }
  }, [dispatch, displayedTrips]);

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 5
    ) {
      if (displayedTrips < totalTrips && !loading) {
        dispatch(incrementDisplayedTrips(10));
        dispatch(fetchTrips({ start: displayedTrips, limit: 10 }));
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dispatch, displayedTrips, totalTrips, loading]);

  if (loading && trips.length === 0) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h3 className="found-count">Найдено: {trips.length} грузоперевозка</h3>
      <div className="trip-list">
        {trips.map((trip) => (
          <TripCard key={trip.id} trip={trip} />
        ))}
      </div>
    </div>
  );
};

export default TripList;
