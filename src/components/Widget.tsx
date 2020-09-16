import React from "react";
import Book from "./Book";
import { MdExpandMore as ExpandMore } from "react-icons/md";
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

function Expand() {
  return (
    <div className={styles.expand}>
      <button>
        <ExpandMore size={32} />
      </button>
    </div>
  );
}

export default function Widget() {
  return (
    <div className={styles.widget}>
      <div className={styles.top}>
        <Tabs />
        <Book />
        <Expand />
      </div>
    </div>
  );
}
