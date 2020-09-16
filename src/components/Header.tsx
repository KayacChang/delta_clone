import React from "react";
import { HiMenu as Menu } from "react-icons/hi";
import { FaRegBell as Notify } from "react-icons/fa";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <nav className={styles.header}>
      <Menu className={styles.menu} size={24} />

      <div className={styles.sign_group}>
        <a href="/">sign up</a>
        <a className={styles.login} href="/">
          log in
        </a>
      </div>

      <Notify className={styles.notify} size={22} />
    </nav>
  );
}
