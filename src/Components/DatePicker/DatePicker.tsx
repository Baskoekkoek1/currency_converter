import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { pickedDate } from "../../store/converter/actions";
import { fetchRates } from "../../store/rates/actions";

export default function DatePicker() {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const yyyy = today.getFullYear();

  const todayString = yyyy + "-" + mm + "-" + dd;

  const [date, setDate] = useState(todayString);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(pickedDate(todayString));
  }, [dispatch, todayString]);
  return (
    <div>
      <input
        type="date"
        value={date}
        onChange={(e) => {
          setDate(e.target.value);
          dispatch(pickedDate(e.target.value));
          dispatch(fetchRates(e.target.value));
        }}
      ></input>
    </div>
  );
}
