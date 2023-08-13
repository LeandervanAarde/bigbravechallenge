import React from "react";
import styles from "./SliderCircle.module.scss";
import {ReactComponent as Pants} from "../../Assets/pants.svg"

export default function SliderCircle({heads, torsos}) {
  return (
    <div className={styles.circle}>
    <div className={styles.circle__sliderTrack}>
      {heads.map((head, index) => (
        <img src={head} key={index} alt={`Head ${index}`} />
      ))}
    </div>

    <div className={styles.circle__sliderTrack2}>
      {torsos.map((torso, index) => (
        <img
          src={torso}
          key={index}
          className="torso"
          alt={`Head ${index}`}
        />
      ))}
    </div>
    <Pants className={styles.circle__pants}/>
  </div>
  )
}
