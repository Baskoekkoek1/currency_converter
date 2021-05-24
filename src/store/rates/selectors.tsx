import { State } from "../types";

export const selectAllRates = (state: State) => state.rates.all_rates;
