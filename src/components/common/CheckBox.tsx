import React, { ReactNode } from "react";
import { AiOutlineQuestionCircle as Question } from "react-icons/ai";
import styles from "./CheckBox.module.scss";

type CheckBoxProps = {
  name: string;
  label: string;
  help?: ReactNode;
};
export default function CheckBox({ name, label, help }: CheckBoxProps) {
  return (
    <label htmlFor={name} className={styles.checkbox}>
      {help && <Question size={20} />}
      {label}
      <input type="checkbox" name={name} id={name} />
      <span />
    </label>
  );
}
