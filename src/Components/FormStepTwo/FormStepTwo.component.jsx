import React, { useContext, useEffect, useState } from "react";
import { option } from "../../store/CommonImports";
import styles from "./FormStepTwo.module.scss";
import { ChromePicker } from "react-color";
import Button from "../Button/Button.component";
import { CharacterContext } from "../../store/Character.Context";
import { useNavigate } from "react-router";

export default function FormStepTwo() {
  const { updateValues, characterValues } = useContext(CharacterContext);
  const { favoriteColor, occupation } = characterValues;
  const [disabled, setDisabled] = useState(true)
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateValues(name, value);

    if (name === "occupation") {
      const selectedOption = option.find((opt) => opt.value === value);
      if (selectedOption) {
        updateValues("occupationString", selectedOption.option);
      } else {
        updateValues("occupationString", "");
      }
    }
  };

  const handleColorChange = (color, e) => {
    updateValues("favoriteColor", color.hex);
  };

  useEffect(() => {
    if(occupation == ""){
      setDisabled(true);
    } else{
      setDisabled(false);
    }
  },[occupation])



  return (
    <div className={styles.container}>
      <div className={styles.container__selectContainer}>
        <span className={styles.container__selectContainer__label}>
          What kind of job do you do?
        </span>
        <select
          value={occupation}
          name="occupation"
          onChange={handleChange}
          className={styles.container__selectContainer__select}
        >
          <option disabled selected>
            Select your occupation
          </option>
          {option.map((option, index) => (
            <option value={option.value} name="occupation" key={index}>
              {option.option}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.container__colorContainer}>
        <span
          className={styles.container__selectContainer__label}
          style={{ marginBottom: "5px" }}
        >
          Whats your favorite colour?
        </span>
        <ChromePicker
          color={characterValues.favoriteColor}
          onChange={handleColorChange}
        />
      </div>

      <Button
        text={disabled ? "Fill in all fields please!" : "Create my character!"}
        type={disabled ? "disabled" : "primary"}
        clickHandler={disabled ? null : () => navigate("/MyCharacter")}
      />
    </div>
  );
}
