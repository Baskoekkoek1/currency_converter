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
    case "CURRENCY_A_CHANGED": {
      return {
        ...state,
        currencyA: action.payload,
      };
    }
    case "CURRENCY_B_CHANGED": {
      return {
        ...state,
        currencyB: action.payload,
      };
    }
    case "CURRENCY_C_CHANGED": {
      return {
        ...state,
        currencyC: action.payload,
      };
    }
    case "CURRENCY_D_CHANGED": {
      return {
        ...state,
        currencyD: action.payload,
      };
    }
    case "CURRENCY_E_CHANGED": {
      return {
        ...state,
        currencyE: action.payload,
      };
    }
    case "AMOUNT_CHANGED": {
      return {
        ...state,
        amount: action.payload,
      };
    }
    case "CHANGE_INPUT": {
      return {
        ...state,
        amountChangedInInput: action.payload,
      };
    }
    case "DATE_PICKED": {
      return {
        ...state,
        pickedDate: action.payload,
      };
    }
    default:
      return state;
  }
}
