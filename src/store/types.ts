export interface Trip {
  id: number;
  name: string;
  location: string;
  date: string;
  price: number;
  description: string;
  image: string;
}

export interface TripsState {
  trips: Trip[];
  totalTrips: number;
  displayedTrips: number;
  loading: boolean;
  error: string | null;
}
