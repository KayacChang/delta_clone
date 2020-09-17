import React, { useState } from "react";
import { motion } from "framer-motion";
import { MdExpandMore as ExpandIcon } from "react-icons/md";
import styles from "./Select.module.scss";
import clsx from "clsx";

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

  return (
    <div className={styles.select} onClick={() => setOpen(!isOpen)}>
      <button>
        {options[current]}
        <ExpandIcon size={32} />
      </button>

      <motion.ul
        variants={variants}
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {options.map((value, idx) => (
          <li key={String(idx)}>
            <button
              className={clsx(current === idx && styles.active)}
              onClick={() => onSelect(idx)}
            >
              {value}
            </button>
          </li>
        ))}
      </motion.ul>
    </div>
  );
}
