import React, { useEffect, useState } from "react";
import Book from "./Book";
import { MdExpandMore as ExpandMore } from "react-icons/md";
import styles from "./Widget.module.scss";
import { motion } from "framer-motion";
import Tabs from "./common/Tabs";

const variants = {
  open: { height: 100 + "vh" },
  closed: { height: 25 + "vh" },
};

export default function Widget() {
  const [isExpand, setExpand] = useState(true);

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
        options={{
          BOOK: () => console.log("book"),
          "CHECK-IN": () => console.log("check in"),
          "MY TRIPS": () => console.log("my trips"),
        }}
      />
      <Book />

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
