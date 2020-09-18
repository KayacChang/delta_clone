import clsx from "clsx";
import React, { ReactNode } from "react";
import styles from "./TextField.module.scss";

type Props = {
  name: string;
  label: string;
  icon?: ReactNode;
  className?: string;
};

export default function TextField({ icon, label, name, className }: Props) {
  return (
    <div className={clsx(styles.textfield, className)}>
      <input type="text" name={name} id={name} />
      <label htmlFor={name}>{label}</label>

      {icon && <button>{icon}</button>}
    </div>
  );
}
