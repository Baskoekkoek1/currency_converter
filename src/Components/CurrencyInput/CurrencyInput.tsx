import React from "react";
import { useSelector } from "react-redux";
import { selectAllRates } from "../../store/rates/selectors";
import { CurrencyInputProps } from "../../store/types";
import "./CurrencyInput.css";

export default function CurrencyInput(props: CurrencyInputProps) {
  const {
    selectedCurrency,
    onChangeCurrency,
    inputName,
    amount,
    onChangeAmount,
  } = props;

  const allRates = useSelector(selectAllRates);
  const currencyOptions: string[] = [...Object.keys(allRates)];
  return (
    <div>
      <input
        type="number"
        name={inputName}
        value={amount ? amount : 0}
        onChange={onChangeAmount}
        className="input"
      ></input>
      <select
        value={selectedCurrency}
        onChange={onChangeCurrency}
        className="currencyPicker"
      >
        {currencyOptions?.map((currency: string) => {
          return (
            <option key={currency} value={currency}>
              {currency}
            </option>
          );
        })}
      </select>
    </div>
  );
}
