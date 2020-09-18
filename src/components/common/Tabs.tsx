import clsx from "clsx";
import React, { MouseEvent } from "react";
import styles from "./Tabs.module.scss";

function preventDefault(func: () => void) {
  return function (e: MouseEvent) {
    e.preventDefault();

    func();
  };
}

type Props = {
  active?: number;
  options?: { [label: string]: () => void };
};
export default function Tabs({ active = 0, options = {} }: Props) {
  return (
    <div className={styles.tabs}>
      {Object.entries(options).map(([label, func], idx) => (
        <a
          key={label}
          className={clsx(idx === active && styles.active)}
          href="/"
          onClick={preventDefault(func)}
        >
          {label}
        </a>
      ))}
    </div>
  );
}
