import { useDispatch } from "react-redux";
import type { AppDispatch } from "./index";

//------typed version of useDispatch------
export const useAppDispatch: () => AppDispatch = useDispatch;
