import React, { useContext, useEffect, useRef } from "react";
import styles from "./MyCharacter.module.scss";
import Crown from "../../Assets/crown.png";
import { CharacterContext } from "../../store/Character.Context";
import Pants from "../../Components/Pants.component";
import { calculateIsOfAge } from "../../store/CommonImports";
import Button from "../../Components/Button/Button.component";
import { useNavigate } from "react-router";

export default function MyCharacter() {
  const { updateValues, characterValues, clearContext } =
    useContext(CharacterContext);
  const characterAge = characterValues.dateOfBirth.toString().split(" ")[3];
  const age = calculateIsOfAge(characterAge);
  const navigate = useNavigate();
  const ref = useRef < HTMLDivElement > null;
  const startNewCharacter = () => {
    navigate("/");
    clearContext();
  };

  useEffect(() => {
    console.log(characterValues)
  },[])

  return (
    <div className={styles.container}>
      <div className={styles.container__left}>
        <div className={styles.container__left__character}>

          <div className={styles.container__left__character__circle}></div>
          <img
            src={characterValues.headImage}
            className={styles.container__left__character__head}
          />
          <img
            src={characterValues.occupation}
            className={styles.container__left__character__occupation}
          />

          <Pants
            fill={characterValues.favoriteColor}
            className={styles.container__left__character__pants}
          />
          <h3>
            Hey, my name is
            {characterValues.name} {characterValues.surname}
          </h3>
          <p> I am {age} years old and I work as a {characterValues.occupationString}</p>
    
        </div>
      </div>

      <div className={styles.container__right}>
        <img src={Crown} />
        <h1>Looking awesome, {characterValues.name}!</h1>
        <h3>Ready for some more characters?</h3>
        <Button
          text={"Make another character"}
          type={"secondary"}
          clickHandler={startNewCharacter}
        />
      </div>
    </div>
  );
}
