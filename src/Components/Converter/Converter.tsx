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

  let amountA, amountB, amountC, amountD, amountE;
  if (amountChangedInInput === "A") {
    amountA = amount;
    amountB = (amount / allRates[currencyA]) * allRates[currencyB];
    amountC = (amount / allRates[currencyA]) * allRates[currencyC];
    amountD = (amount / allRates[currencyA]) * allRates[currencyD];
    amountE = (amount / allRates[currencyA]) * allRates[currencyE];
  } else if (amountChangedInInput === "B") {
    amountA = (amount / allRates[currencyB]) * allRates[currencyA];
    amountB = amount;
    amountC = (amount / allRates[currencyB]) * allRates[currencyC];
    amountD = (amount / allRates[currencyB]) * allRates[currencyD];
    amountE = (amount / allRates[currencyB]) * allRates[currencyE];
  } else if (amountChangedInInput === "C") {
    amountA = (amount / allRates[currencyC]) * allRates[currencyA];
    amountB = (amount / allRates[currencyC]) * allRates[currencyB];
    amountC = amount;
    amountD = (amount / allRates[currencyC]) * allRates[currencyD];
    amountE = (amount / allRates[currencyC]) * allRates[currencyE];
  } else if (amountChangedInInput === "D") {
    amountA = (amount / allRates[currencyD]) * allRates[currencyA];
    amountB = (amount / allRates[currencyD]) * allRates[currencyB];
    amountC = (amount / allRates[currencyD]) * allRates[currencyC];
    amountD = amount;
    amountE = (amount / allRates[currencyD]) * allRates[currencyE];
  } else {
    amountA = (amount / allRates[currencyE]) * allRates[currencyA];
    amountB = (amount / allRates[currencyE]) * allRates[currencyB];
    amountC = (amount / allRates[currencyE]) * allRates[currencyC];
    amountD = (amount / allRates[currencyE]) * allRates[currencyD];
    amountE = amount;
  }

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
        amount={amountA}
        onChangeAmount={handleAmountChange}
      />
      <CurrencyInput
        selectedCurrency={currencyB}
        inputName="B"
        onChangeCurrency={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch(currencyBChanged(e.target.value))
        }
        amount={amountB}
        onChangeAmount={handleAmountChange}
      />
      <CurrencyInput
        selectedCurrency={currencyC}
        inputName="C"
        onChangeCurrency={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch(currencyCChanged(e.target.value))
        }
        amount={amountC}
        onChangeAmount={handleAmountChange}
      />
      <CurrencyInput
        selectedCurrency={currencyD}
        inputName="D"
        onChangeCurrency={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch(currencyDChanged(e.target.value))
        }
        amount={amountD}
        onChangeAmount={handleAmountChange}
      />
      <CurrencyInput
        selectedCurrency={currencyE}
        inputName="E"
        onChangeCurrency={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch(currencyEChanged(e.target.value))
        }
        amount={amountE}
        onChangeAmount={handleAmountChange}
      />
      <DatePicker />
    </div>
  );
}
