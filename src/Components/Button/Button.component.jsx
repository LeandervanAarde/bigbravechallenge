import React from 'react'
import styles from './Button.module.scss'
const buttonType = {
    primary: 'primary',
    secondary: 'secondary',
    tertiary: 'tertiary',
    disabled: 'disabled'
}
export default function Button({type, icon, text, clickHandler, ...otherProps}) {
  return (
    <div className={`${styles.btn} ${styles[buttonType[type]]}`} onClick={clickHandler} {...otherProps}>
        <p>{text}</p>
  </div>
  )
}
