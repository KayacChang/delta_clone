import React from "react";
import Book from "./Book";
import styles from "./Widget.module.scss";

function Tabs() {
  return (
    <div className={styles.tabs}>
      <a className={styles.active}>book</a>
      <a>check-in</a>
      <a>my trips</a>
    </div>
  );
}

export default function Widget() {
  return (
    <div className={styles.widget}>
      <div className={styles.top}>
        <Tabs />
        <Book />
      </div>
    </div>
  );
}
