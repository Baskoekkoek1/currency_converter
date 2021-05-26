import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeAmount,
  currencyAChanged,
  currencyBChanged,
  currencyCChanged,
  currencyDChanged,
  currencyEChanged,
  amountInInput,
} from "../../store/converter/actions";
import {
  selectAmount,
  selectAmountChangedInInput,
  selectCurrencyA,
  selectCurrencyB,
  selectCurrencyC,
  selectCurrencyD,
  selectCurrencyE,
} from "../../store/converter/selectors";
import { fetchRates } from "../../store/rates/actions";
import { selectAllRates } from "../../store/rates/selectors";
import { FilledAmounts } from "../../store/types";
import CurrencyInput from "../CurrencyInput/CurrencyInput";
import DatePicker from "../DatePicker/DatePicker";
import "./Converter.css";

export default function Converter() {
  const dispatch = useDispatch();
  const allRates: any = useSelector(selectAllRates);

  const currencyA = useSelector(selectCurrencyA);
  const currencyB = useSelector(selectCurrencyB);
  const currencyC = useSelector(selectCurrencyC);
  const currencyD = useSelector(selectCurrencyD);
  const currencyE = useSelector(selectCurrencyE);

  const amount = useSelector(selectAmount);
  const amountChangedInInput = useSelector(selectAmountChangedInInput);

  const handleAmountChange = (e: any) => {
    dispatch(changeAmount(e.target.value));
    dispatch(amountInInput(e.target.name));
  };

  const currencies: { [key: string]: string } = {
    A: currencyA,
    B: currencyB,
    C: currencyC,
    D: currencyD,
    E: currencyE,
  };

  const filledAmounts: FilledAmounts = Object.keys(currencies).reduce(
    (acc, key) => {
      if (amountChangedInInput === key) {
        return { ...acc, [key]: Number(amount) };
      } else {
        return {
          ...acc,
          [key]:
            (amount / allRates[currencies[amountChangedInInput]]) *
            allRates[currencies[key]],
        };
      }
    },
    { A: 0, B: 0, C: 0, D: 0, E: 0 }
  );

  useEffect(() => {
    dispatch(fetchRates("2020-05-24"));
  }, [dispatch]);

  return (
    <div id="converter">
      <CurrencyInput
        selectedCurrency={currencyA}
        inputName="A"
        onChangeCurrency={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch(currencyAChanged(e.target.value))
        }
        amount={filledAmounts["A"]}
        onChangeAmount={handleAmountChange}
      />
      <CurrencyInput
        selectedCurrency={currencyB}
        inputName="B"
        onChangeCurrency={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch(currencyBChanged(e.target.value))
        }
        amount={filledAmounts["B"]}
        onChangeAmount={handleAmountChange}
      />
      <CurrencyInput
        selectedCurrency={currencyC}
        inputName="C"
        onChangeCurrency={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch(currencyCChanged(e.target.value))
        }
        amount={filledAmounts["C"]}
        onChangeAmount={handleAmountChange}
      />
      <CurrencyInput
        selectedCurrency={currencyD}
        inputName="D"
        onChangeCurrency={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch(currencyDChanged(e.target.value))
        }
        amount={filledAmounts["D"]}
        onChangeAmount={handleAmountChange}
      />
      <CurrencyInput
        selectedCurrency={currencyE}
        inputName="E"
        onChangeCurrency={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch(currencyEChanged(e.target.value))
        }
        amount={filledAmounts["E"]}
        onChangeAmount={handleAmountChange}
      />
      <DatePicker />
    </div>
  );
}
