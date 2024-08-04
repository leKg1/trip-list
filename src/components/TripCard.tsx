import React from "react";
import mapMarker from "../assets/map-marker.png";
import box from "../assets/box.png";
import { TripProps } from "./types";

const TripCard: React.FC<TripProps> = ({ trip }) => {
  return (
    <div className="trip-card">
      <img
        src={`/images/${trip.image}`}
        alt={trip.name}
        className="trip-card-image"
      />
      <div className="trip-card-details">
        <h2 className="trip-card-name">{trip.name}</h2>
        <p>
          <img
            src={mapMarker}
            alt="mapMarker"
            className="trip-card-map-marker"
          />
          <span className="trip-card-city">{trip.location}</span>{" "}
          <span className="trip-card-date">{trip.date}</span>
        </p>
        <p>
          <img src={box} alt="box" className="trip-card-fluent-box" />
          <span className="trip-card-type">Тип груза: </span>
          <span className="trip-card-description">
            {trip.description}
            <a className="trip-card-description-more"> еще 5 типов</a>
          </span>
        </p>
      </div>
      <div className="trip-card-price">
        <p className="trip-card-price-text-1">за 1 час </p>
        <p className="trip-card-price-text-2">от {`${trip.price} ₽`}</p>
      </div>
    </div>
  );
};

export default TripCard;
