import React from "react";
import styles from "./Book.module.scss";

function Switch() {
  return (
    <button className={styles.switch}>
      <span>{"\u2194"}</span>
    </button>
  );
}

type Props = {
  from: string;
  hint: string;
};
function Location({ from, hint }: Props) {
  return (
    <div className={styles.location}>
      <button>
        <span>{from}</span>
        <span>{hint}</span>
      </button>
    </div>
  );
}
export default function Book() {
  return (
    <div className={styles.book}>
      <Location from={"From"} hint={"Your Origin"} />
      <Switch />
      <Location from={"To"} hint={"Your Destination"} />
    </div>
  );
}
