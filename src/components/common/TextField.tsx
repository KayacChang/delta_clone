import clsx from "clsx";
import React, { ReactNode, useCallback, useState } from "react";
import styles from "./TextField.module.scss";

type Props = {
  name: string;
  label: string;
  icon?: ReactNode;
  className?: string;
  onChange?: (value: string) => void;
};

export default function TextField({
  icon,
  label,
  name,
  className,
  onChange = () => {},
}: Props) {
  const [text, setText] = useState("");

  const handle = useCallback(
    (e) => {
      const text = e.target.value;
      setText(text);
      onChange(text);
    },
    [setText, onChange]
  );

  return (
    <div className={clsx(styles.textfield, className)}>
      <input type="text" name={name} id={name} onChange={handle} />
      <label htmlFor={name} className={clsx(text && styles.active)}>
        {label}
      </label>

      {icon && <button>{icon}</button>}
    </div>
  );
}
