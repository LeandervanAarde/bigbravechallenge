import React, { useState } from "react";
import styles from "./Home.module.scss";
import SliderCircle from "../../Components/SliderCircle/SliderCircle.component";
import Button from "../../Components/Button/Button.component";
import { Mhead, developer,  Pants, duplicatedHeads, duplicatedTorsos} from '../../store/CommonImports';
import LeandervanAarde from "../../Components/LeandervanAarde/LeandervanAarde.component";
import { useNavigate } from "react-router";

export default function Home() {
  const knessAndToes = <Pants className={styles.createdBy__pants} />;
  const [animate, setAnimate] = useState(false);
  const navigate = useNavigate();

  const goToCharacterBuilder = () => {
    // navigate("/build")
    setAnimate((prev) => !prev);

    setTimeout(() => {
      navigate("/build");
    }, 1000);
  };
  
  return (
    <div className={styles.container}>
      <div
        className={
          animate ? styles.container__animate : styles.container__leftContainer
        }
      >
        <div className={styles.container__leftContainer__greeting}>
          <h1 className={styles.container__leftContainer__greeting__hi}>Hi!</h1>
          <h1 className={styles.container__leftContainer__greeting__wave}>
            👋
          </h1>
        </div>
        <h4 className={styles.container__leftContainer__bottomText}>
          Welcome to your character builder! Lets get started
        </h4>

        <Button
          type="primary"
          text={"Make my character!"}
          clickHandler={goToCharacterBuilder}
        />
        <LeandervanAarde head={Mhead} shoulder={developer} />
      </div>
      <div
        className={
          animate
            ? styles.container__animateRight
            : styles.container__hexContainer
        }
      >
        <SliderCircle heads={duplicatedHeads} torsos={duplicatedTorsos} />
      </div>
    </div>
  );
}
