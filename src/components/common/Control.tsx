import React from "react";
import styles from "./Control.module.scss";
import clsx from "clsx";

type Props = {
  onClear?: () => void;
  onClose: () => void;
  className?: string;
};
export default function Control({ onClear, onClose, className }: Props) {
  return (
    <div className={clsx(styles.control, className)}>
      <div>
        <button onClick={onClose}>Close</button>
        {onClear && <button onClick={onClear}>Clear</button>}
      </div>
    </div>
  );
}
