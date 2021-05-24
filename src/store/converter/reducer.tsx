const initialState = {
  currencyA: "EUR",
  currencyB: "EUR",
  currencyC: "EUR",
  currencyD: "EUR",
  currencyE: "EUR",
  amount: 1,
  amountChangedInInput: "A",
  pickedDate: "",
};

export default function reducer(state = initialState, action: any) {
  switch (action.type) {
    default:
      return state;
  }
}
