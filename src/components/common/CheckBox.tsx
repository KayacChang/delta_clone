import clsx from "clsx";
import React, { ReactNode } from "react";
import { AiOutlineQuestionCircle as Question } from "react-icons/ai";
import styles from "./CheckBox.module.scss";

type CheckBoxProps = {
  name: string;
  label?: string;
  help?: ReactNode;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disable?: boolean;
};
export default function CheckBox({
  disable = false,
  name,
  label = name,
  help,
  checked = false,
  onChange = () => {},
}: CheckBoxProps) {
  return (
    <label
      htmlFor={name}
      className={clsx(styles.checkbox, disable && styles.disable)}
    >
      {help && <Question size={20} />}
      {label}
      <input
        type="checkbox"
        name={name}
        id={name}
        checked={checked}
        onChange={() => onChange(!checked)}
        disabled={disable}
      />
      <span />
    </label>
  );
}
