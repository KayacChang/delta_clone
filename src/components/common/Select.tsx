import React, { useState } from "react";
import { motion } from "framer-motion";
import { MdExpandMore as ExpandIcon } from "react-icons/md";
import styles from "./Select.module.scss";
import clsx from "clsx";
import useClickOutSide from "hooks/useClickOutSide";

const variants = {
  open: { height: "auto" },
  closed: { height: 0 },
};

type Props = {
  current?: number;
  options: string[];
  onSelect?: (id: number) => void;
};
export default function Select({
  current = 0,
  options,
  onSelect = () => {},
}: Props) {
  const [isOpen, setOpen] = useState(false);
  const [animEnd, setAnimEnd] = useState(true);

  return (
    <div
      ref={useClickOutSide(() => setOpen(false))}
      className={styles.select}
    >
      <button
        onClick={() => animEnd && setOpen(!isOpen)}
      >
        {options[current]}
        <ExpandIcon size={32} />
      </button>

      <motion.ul
        variants={variants}
        initial={isOpen ? "open" : "closed"}
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        onAnimationStart={() => setAnimEnd(false)}
        onAnimationComplete={() => setAnimEnd(true)}
      >
        {options.map((value, idx) => (
          <li key={String(idx)}>
            <button
              className={clsx(current === idx && styles.active)}
              onClick={() => {
                onSelect(idx);
                setOpen(false);
              }}
            >
              {value}
            </button>
          </li>
        ))}
      </motion.ul>
    </div>
  );
}
