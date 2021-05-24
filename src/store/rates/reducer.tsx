const initialState = {
  base: null,
  date: null,
  all_rates: {},
};

export default function reducer(state = initialState, action: any) {
  switch (action.type) {
    case "RATES_FETCHED":
      return {
        ...state,
        base: action.payload.base,
        date: action.payload.date,
        all_rates: action.payload.rates,
      };
    default:
      return state;
  }
}
