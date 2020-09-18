import React, { ReactNode } from "react";
import styles from "./TextField.module.scss";

type Props = {
  name: string;
  label: string;
  icon?: ReactNode;
};

export default function TextField({ icon, label, name }: Props) {
  return (
    <div className={styles.textfield}>
      <input type="text" name={name} id={name} />
      <label htmlFor={name}>{label}</label>

      {icon && <button>{icon}</button>}
    </div>
  );
}
