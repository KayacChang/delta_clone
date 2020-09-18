import React, { useEffect, useState } from "react";
import { MdExpandMore as ExpandMore } from "react-icons/md";
import styles from "./Widget.module.scss";
import { motion } from "framer-motion";
import Tabs from "components/common/Tabs";
import CheckIn from "./CheckIn";
import MyTrips from "./MyTrips";
import Book from "./Book";

const variants = {
  open: { height: 100 + "vh" },
  closed: { height: 25 + "vh" },
};

export default function Widget() {
  const [isExpand, setExpand] = useState(false);
  const [tab, setTab] = useState(0);

  useEffect(() => {
    isExpand && window.scrollTo({ top: 0 });

    Object.assign(window.document.body.style, {
      overflow: isExpand ? "hidden" : "auto",
    });
  }, [isExpand]);

  return (
    <motion.div
      animate={isExpand ? "open" : "closed"}
      initial={isExpand ? "open" : "closed"}
      variants={variants}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={styles.widget}
    >
      <Tabs
        active={tab}
        options={{
          BOOK: () => setTab(0),
          "CHECK-IN": () => setTab(1),
          "MY TRIPS": () => setTab(2),
        }}
      />
      {[<Book />, <CheckIn />, <MyTrips />][tab]}

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
