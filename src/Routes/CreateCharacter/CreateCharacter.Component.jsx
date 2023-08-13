import React, { useEffect, useState } from "react";
import styles from "./CreateCharacter.module.scss";
import fhead from "../../Assets/fhead.png";
import Mhead from "../../Assets/Mhead.png";
import oldMhead from "../../Assets/oldMhead.png";
import oldFhead from "../../Assets/oldFhead.png";
import Input from "../../Components/Input/Input.component";
import Button from "../../Components/Button/Button.component";
import StepOne from "../../Components/FormStepOne/StepOne.component";
import { Outlet } from "react-router";



const heads = [Mhead, fhead, oldMhead, oldFhead];

export default function CreateCharacter() {
  const duplicatedHeads = [...heads, ...heads];
  const [head, setHead] = useState(0);
  const [animate, setAnimate] = useState(false);




  setTimeout(() => {
    const random = Math.floor(Math.random() * heads.length);
    setHead(random);
  }, 3000);
  return (
    <div className={styles.container}>
      <div className={styles.container__leftContainer}>
        <div className={styles.container__leftContainer__form}>
          <h3 className={styles.container__leftContainer__form__header}>
            Let's talk about you!
          </h3>

          <Outlet/>
        </div>
      </div>

      <div className={styles.container__rightContainer}>
        <h2 className={styles.container__rightContainer__title}>
          let's get you A...head
        </h2>

        <div className={styles.circle}>
          <div className={styles.circle__sliderTrack}>
            {duplicatedHeads.map((head, index) => (
              <img
                src={head}
                key={index}
                alt={`Head ${index}`}
                className={styles.circle__sliderTrack__img}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
