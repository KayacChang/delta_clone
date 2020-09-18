import React from "react";
import styles from "./Control.module.scss";

type Props = {
  onClear?: () => void;
  onClose: () => void;
};
export default function Control({ onClear, onClose }: Props) {
  return (
    <div className={styles.control}>
      <div>
        <button onClick={onClose}>Close</button>
        {onClear && <button onClick={onClear}>Clear</button>}
      </div>
    </div>
  );
}
