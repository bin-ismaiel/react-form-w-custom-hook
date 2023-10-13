import { useState } from "react";

const useInput = (validateFunction) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [inputTouched, setInputTouched] = useState(false);

  const enteredValueIsValid = validateFunction(enteredValue);
  const hasError = !enteredValueIsValid && inputTouched;

  const onInputChangeHandler = (e) => {
    setEnteredValue(e.target.value);
  };
  const onInputBlur = () => {
    setInputTouched(true);
  };
  const reset = () => {
    setEnteredValue("");
    setInputTouched("");
  };
  return [
    enteredValue,
    enteredValueIsValid,
    hasError,
    onInputBlur,
    onInputChangeHandler,
    reset,
  ];
};
export default useInput;
