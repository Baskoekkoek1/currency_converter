import axios from "axios";
import { apiKey, apiUrl } from "../../config/constants";
import {
  currencyAChanged,
  currencyBChanged,
  currencyCChanged,
  currencyDChanged,
  currencyEChanged,
} from "../converter/actions";

export const ratesFetched = (data: Object) => {
  return {
    type: "RATES_FETCHED",
    payload: data,
  };
};

export const fetchRates = (pickedDate: string) => {
  return async function thunk(dispatch: Function, getState: Function) {
    const response = await axios.get(
      `${apiUrl}/${pickedDate ? pickedDate : "latest"}?access_key=${apiKey}`
    );
    dispatch(ratesFetched(response.data));
    dispatch(currencyAChanged("EUR"));
    dispatch(currencyBChanged("GBP"));
    dispatch(currencyCChanged("USD"));
    dispatch(currencyDChanged("JPY"));
    dispatch(currencyEChanged("CNY"));
  };
};
