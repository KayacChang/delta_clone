import { HiMenu as Menu } from "react-icons/hi";
import { FaRegBell as Notify } from "react-icons/fa";
import Banner from "./Banner";
import Shopping from "./Shopping";
import styles from "./Header.module.scss";
import React, { ReactNode, useState } from "react";
import { MdExpandMore as ExpandMore } from "react-icons/md";
import { motion } from "framer-motion";
import Tabs from "components/common/Tabs";
import CheckIn from "components/widget/CheckIn";
import MyTrips from "components/widget/MyTrips";
import Book from "components/widget/Book";
import useIsDesktop from "hooks/useIsDesktop";
import useOpen from "hooks/useOpen";

const LOGO =
  "//content.delta.com/content/www/us/en.damAssetRender.20180509T1731290530400.html/content/dam/delta_homepage_redesign/Logo/Delta%20Logo.svg";
const LOGO2 =
  "//content.delta.com/content/www/us/en.damAssetRender.20180509T1731290540400.html/content/dam/delta_homepage_redesign/Logo/Sky%20Team.svg";

type NavProps = {
  isDesktop: boolean;
  children?: ReactNode;
};
function Nav({ isDesktop, children }: NavProps) {
  return (
    <nav className={styles.nav}>
      <div>
        {!isDesktop && (
          <div className={styles.menu}>
            <Menu size={24} />
          </div>
        )}

        {isDesktop && (
          <div>
            <img src={LOGO} alt="LOGO" />
            <img src={LOGO2} alt="LOGO2" />
          </div>
        )}

        {children}

        <div className={styles.sign_group}>
          <a href="/">sign up</a>
          <a className={styles.login} href="/">
            log in
          </a>
        </div>

        <div className={styles.notify}>
          <Notify size={22} />
        </div>
      </div>
    </nav>
  );
}

type Props = {
  children: ReactNode;
};
function ExpandView({ children }: Props) {
  const variants = {
    open: { height: 100 + "vh" },
    closed: { height: 28 + "vh" },
  };

  const [isExpand, setExpand] = useOpen();

  return (
    <motion.div
      animate={isExpand ? "open" : "closed"}
      initial={isExpand ? "open" : "closed"}
      variants={variants}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={styles.widget}
    >
      {children}

      <div
        className={styles.expand}
        style={{ position: isExpand ? "fixed" : "absolute" }}
      >
        <button onClick={() => setExpand((state) => !state)}>
          <ExpandMore size={32} />
        </button>
      </div>
    </motion.div>
  );
}

export default function Header() {
  const [tab, setTab] = useState(0);
  const isDesktop = useIsDesktop();

  return (
    <header className={styles.header}>
      <Nav isDesktop={isDesktop}>
        {isDesktop && (
          <Tabs
            className={styles.tabs}
            active={tab}
            options={{
              BOOK: () => setTab(0),
              "CHECK-IN": () => setTab(1),
              "MY TRIPS": () => setTab(2),
            }}
          />
        )}
      </Nav>

      {isDesktop
        ? (
          <div className={styles.widget}>
            {[<Book />, <CheckIn />, <MyTrips />][tab]}
          </div>
        )
        : (
          <ExpandView>
            <Tabs
              className={styles.tabs}
              active={tab}
              options={{
                BOOK: () => setTab(0),
                "CHECK-IN": () => setTab(1),
                "MY TRIPS": () => setTab(2),
              }}
            />
            {[<Book />, <CheckIn />, <MyTrips />][tab]}
          </ExpandView>
        )}

      <Banner />
      <Shopping />
    </header>
  );
}
