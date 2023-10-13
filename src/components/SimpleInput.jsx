import useInput from "../hooks/use-input";
const SimpleInput = () => {
  const [
    enteredName,
    enteredNameIsValid,
    nameInputIsInvaild,
    onBlurNameInputHandler,
    onChangeNameInputHandler,
    resetNameInput,
  ] = useInput((val) => val.trim() !== "");

  const [
    enteredEmail,
    enteredEmailIsValid,
    emailInputIsInvaild,
    onBlurEmailInputHandler,
    onChangeEmailInputHandler,
    resetEmailInput,
  ] = useInput((val) => val.includes("@"));

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    resetNameInput();
    resetEmailInput();
  };

  const nameInputClasses = nameInputIsInvaild
    ? "form-control invalid"
    : " form-control";
  const emailInputClasses = emailInputIsInvaild
    ? "form-control invalid"
    : " form-control";

  return (
    <form onSubmit={onSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={onChangeNameInputHandler}
          onBlur={onBlurNameInputHandler}
        />
        {nameInputIsInvaild && (
          <p className="error-text">Name Must Not Be Empty</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your E-mail</label>
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onChange={onChangeEmailInputHandler}
          onBlur={onBlurEmailInputHandler}
        />
        {emailInputIsInvaild && (
          <p className="error-text">Enter A Valid Email</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
