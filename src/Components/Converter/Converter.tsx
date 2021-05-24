import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  currencyAChanged,
  currencyBChanged,
  currencyCChanged,
  currencyDChanged,
  currencyEChanged,
} from "../../store/converter/actions";
import {
  selectCurrencyA,
  selectCurrencyB,
  selectCurrencyC,
  selectCurrencyD,
  selectCurrencyE,
} from "../../store/converter/selectors";
import { fetchRates } from "../../store/rates/actions";
import CurrencyInput from "../CurrencyInput/CurrencyInput";

export default function Converter() {
  const dispatch = useDispatch();

  const currencyA = useSelector(selectCurrencyA);
  const currencyB = useSelector(selectCurrencyB);
  const currencyC = useSelector(selectCurrencyC);
  const currencyD = useSelector(selectCurrencyD);
  const currencyE = useSelector(selectCurrencyE);

  useEffect(() => {
    dispatch(fetchRates("2020-05-24"));
  }, [dispatch]);
  return (
    <div>
      <h2>Converter</h2>
      <CurrencyInput
        selectedCurrency={currencyA}
        onChangeCurrency={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch(currencyAChanged(e.target.value))
        }
      />
      <CurrencyInput
        selectedCurrency={currencyB}
        onChangeCurrency={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch(currencyBChanged(e.target.value))
        }
      />
      <CurrencyInput
        selectedCurrency={currencyC}
        onChangeCurrency={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch(currencyCChanged(e.target.value))
        }
      />
      <CurrencyInput
        selectedCurrency={currencyD}
        onChangeCurrency={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch(currencyDChanged(e.target.value))
        }
      />
      <CurrencyInput
        selectedCurrency={currencyE}
        onChangeCurrency={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch(currencyEChanged(e.target.value))
        }
      />
    </div>
  );
}
