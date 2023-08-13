import React, { useEffect, useState } from "react";
import styles from "./StepOne.module.scss";
import Button from "../Button/Button.component";
import Input from "../Input/Input.component";
import { useContext } from "react";
import { CharacterContext } from "../../store/Character.Context";
import { DatePicker } from "@mui/x-date-pickers";
import { useNavigate } from "react-router";
import { Mhead, calculateIsOfAge, fhead, oldFhead, oldMhead } from "../../store/CommonImports";
import dayjs from "dayjs";
export default function StepOne() {
  const { updateValues, characterValues } = useContext(CharacterContext);
  const [isClickableInput, setIsClickableInput] = useState(true);
  const [tooYoung, setTooYoung] = useState(false);
  const navigate = useNavigate();
  const { name, surname, sex, dateOfBirth } = characterValues;

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    updateValues(name, value);
  };

  const calculateHead = (age, sex) => {
    let head;
    if (age > 45) {
      if (sex === "Female") {
        head = oldFhead;
      } else if (sex === "Male") {
        head = oldMhead;
      }
    } else {
      head = sex === "Female" ? fhead : Mhead;
    }
    updateValues("headImage", head);
  };

  const onClickHandler = () => {
    const date = characterValues.dateOfBirth.toString().split(" ")[3];
    const userAge  = calculateIsOfAge(date);
    if (userAge < 18) {
      setTooYoung(true);
    } else {
      setTooYoung(false);
      navigate("/build/stepTwo");
      calculateHead(userAge, characterValues.sex);
    }
  };
  useEffect(() => {
    if (name == "" || surname == "" || sex == "" || dateOfBirth == "") {
      setIsClickableInput(false);
    } else {
      setIsClickableInput(true);
    }
  }, [characterValues]);

  return (
    <div className={styles.inputs}>
      <Input
        label={"What's your first name?"}
        errLabel={"Please enter your name"}
        placeholder={"eg. John"}
        name={"name"}
        value={name}
        changeHandler={onChangeHandler}
      />
      <Input
        label={"What's your  surname?"}
        errLabel={"Please enter your surname"}
        placeholder={"eg. Doe"}
        name={"surname"}
        value={surname}
        changeHandler={onChangeHandler}
      />
      <p>What is your sex?</p>
      <div className={styles.inputs__gender}>
        <input
          type="radio"
          value={"Male"}
          name="sex"
          onChange={onChangeHandler}
          checked={sex === "Male"}
        />
        <p>Male</p>
      </div>

      <div className={styles.inputs__gender}>
        <input
          type="radio"
          value={"Female"}
          name="sex"
          onChange={onChangeHandler}
          checked={sex === "Female"}
        />
        <p>Female</p>
      </div>

      {tooYoung && (
        <span className={styles.inputs__err}>
          You need to be 18 or over to make a character!
        </span>
      )}

      <DatePicker
        value={dateOfBirth}
        defaultValue={dayjs(Date.now())}
        name={"dateOfBirth"}
        onChange={(newVal) => {
          updateValues("dateOfBirth", newVal.$d);
        }}

      />

      <Button
        text={isClickableInput ? "Continue" : "Fill in all fields first!"}
        type={isClickableInput ? "primary" : "disabled"}
        onClick={isClickableInput ? onClickHandler : null}
        style={{ marginTop: "20px" }}
      />
    </div>
  );
}
