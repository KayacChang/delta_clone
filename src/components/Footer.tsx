import React from "react";
import { GoSearch as SearchIcon } from "react-icons/go";
import styles from "./Footer.module.scss";

function Search() {
  return (
    <div className={styles.search}>
      <input type="text" name="search" id="search" />
      <label htmlFor="search">Search for a topic...</label>
      <button>
        <SearchIcon size={24} />
      </button>
    </div>
  );
}

function Section() {
  return (
    <div>
      <button>about delta</button>
    </div>
  );
}

export default function Footer() {
  return (
    <div className={styles.footer}>
      <Search />

      <div>
        <Section />
      </div>
    </div>
  );
}
