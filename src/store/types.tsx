export interface State {
  rates: {
    base: string;
    date: string;
    all_rates: object;
  };
  converter: {
    currencyA: string;
    currencyB: string;
    currencyC: string;
    currencyD: string;
    currencyE: string;
    amount: number;
    amountChangedInInput: string;
    pickedDate: string;
  };
}

export interface CurrencyInputProps {
  selectedCurrency: string;
}
