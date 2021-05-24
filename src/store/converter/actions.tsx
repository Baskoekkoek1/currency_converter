export const currencyAChanged = (newCurrency: string) => {
  return {
    type: "CURRENCY_A_CHANGED",
    payload: newCurrency,
  };
};

export const currencyBChanged = (newCurrency: string) => {
  return {
    type: "CURRENCY_B_CHANGED",
    payload: newCurrency,
  };
};

export const currencyCChanged = (newCurrency: string) => {
  return {
    type: "CURRENCY_C_CHANGED",
    payload: newCurrency,
  };
};

export const currencyDChanged = (newCurrency: string) => {
  return {
    type: "CURRENCY_D_CHANGED",
    payload: newCurrency,
  };
};

export const currencyEChanged = (newCurrency: string) => {
  return {
    type: "CURRENCY_E_CHANGED",
    payload: newCurrency,
  };
};

export const changeAmount = (newAmount: number) => {
  return {
    type: "AMOUNT_CHANGED",
    payload: newAmount,
  };
};

export const amountInInput = (inputChanged: string) => {
  return {
    type: "CHANGE_INPUT",
    payload: inputChanged,
  };
};

export const pickedDate = (newDate: string) => {
  return {
    type: "DATE_PICKED",
    payload: newDate,
  };
};
