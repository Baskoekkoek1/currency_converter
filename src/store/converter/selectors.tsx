import { State } from "../types";

export const selectCurrencyA = (state: State) => state.converter.currencyA;
export const selectCurrencyB = (state: State) => state.converter.currencyB;
export const selectCurrencyC = (state: State) => state.converter.currencyC;
export const selectCurrencyD = (state: State) => state.converter.currencyD;
export const selectCurrencyE = (state: State) => state.converter.currencyE;

export const selectAmount = (state: State) => state.converter.amount;
export const selectAmountChangedInInput = (state: State) =>
  state.converter.amountChangedInInput;
