import useInput from "../hooks/use-input";

const BasicForm = () => {
  const [
    enteredFirstName,
    firstNameIsValid,
    firstNameInputHasError,
    firstNameInputChangeHandler,
    firstNameInputBlurHandler,
    resetFirstName,
    firstNameInputClasses,
  ] = useInput((val) => val.trim() !== "");
  const [
    enteredLastName,
    lastNameIsValid,
    lastNameInputHasError,
    lastNameInputChangeHandler,
    lastNameInputBlurHandler,
    resetLastName,
    lastNameInputClasses,
  ] = useInput((val) => val.trim() !== "");
  const [
    enteredEmail,
    emailIsValid,
    emailInputHasError,
    emailInputChangeHandler,
    emailInputBlurHandler,
    resetEmail,
    emailInputClasses,
  ] = useInput((val) => val.includes("@"));

  let formIsValid = false;

  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }
  const submitFormHandler = (e) => {
    e.preventDefault();
    resetFirstName();
    resetLastName();
    resetEmail();
  };

  return (
    <form onSubmit={submitFormHandler}>
      <div className="control-group">
        <div className={firstNameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={enteredFirstName}
            onChange={firstNameInputChangeHandler}
            onBlur={firstNameInputBlurHandler}
          />
          {firstNameInputHasError && (
            <p className="error-text">Name Must Not Be Empty</p>
          )}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={enteredLastName}
            onChange={lastNameInputChangeHandler}
            onBlur={lastNameInputBlurHandler}
          />
          {lastNameInputHasError && (
            <p className="error-text">Name Must Not Be Empty</p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={enteredEmail}
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
        />
        {emailInputHasError && (
          <p className="error-text">Name Must Not Be Empty</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
