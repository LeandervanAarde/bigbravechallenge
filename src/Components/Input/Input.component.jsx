import React, { useEffect, useState } from "react";
import styles from "./Input.module.scss";
export default function Input({
  label,
  errLabel,
  err,
  placeholder,
  value,
  name,
  changeHandler,
}) {
  const [focus, setFocus] = useState(false);
  const [error, setError] = useState(false);

  const handleFocusChange = () => {
    setFocus(true);
  };

  const handleBlurChange = (value) => {
    if (value === "" || value === undefined) {
      setError(true);
    } else {
      setError(false);
    }
    setFocus(false);

    console.log(error);
    console.log(focus);
  };
  return (
    <>
      <span className={focus ? styles.span : error ? styles.errSpan : null}>
        {error ? errLabel : label}
      </span>
      <input
        name={name}
        value={value}
        onChange={changeHandler}
        onFocus={handleFocusChange}
        onBlur={() => handleBlurChange(value)}
        placeholder={placeholder}
        className={
          focus ? styles.input__focus : error ? styles.input__err : styles.input
        }
      />
    </>
  );
}
