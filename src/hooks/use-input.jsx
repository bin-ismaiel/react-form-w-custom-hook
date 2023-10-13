import { useState } from "react";

const useInput = (validate) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [inputTouched, setInputTouched] = useState(false);

  const valueIsValid = validate(enteredValue);
  const inputHasError = !valueIsValid && inputTouched;

  const inputChangeHandler = (e) => {
    setEnteredValue(e.target.value);
  };
  const inputBlurHandler = () => {
    setInputTouched(true);
  };
  const reset = () => {
    setInputTouched(false);
    setEnteredValue("");
  };

  const inputClasses = inputHasError ? "invalid form-control" : "form-control";

  return [
    enteredValue,
    valueIsValid,
    inputHasError,
    inputChangeHandler,
    inputBlurHandler,
    reset,
    inputClasses,
  ];
};
export default useInput;
