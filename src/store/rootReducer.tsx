import { combineReducers } from "redux";
import rates from "./rates/reducer";
import converter from "./converter/reducer";

export default combineReducers({
  rates,
  converter,
});
