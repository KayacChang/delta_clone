import React from "react";
import { HiMenu as Menu } from "react-icons/hi";
import { FaRegBell as Notify } from "react-icons/fa";
import Widget from "./Widget";
import Banner from "./Banner";
import styles from "./Header.module.scss";

function Nav() {
  return (
    <nav className={styles.nav}>
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

export default function Header() {
  return (
    <header className={styles.header}>
      <Nav />
      <Widget />
      <Banner />
    </header>
  );
}
