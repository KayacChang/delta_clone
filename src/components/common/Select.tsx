import React, { useCallback, useState } from "react";
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
  const [animEnd, setAnimEnd] = useState(false);

  const whenClickOutside = useCallback((ref: HTMLDivElement) => {
    if (!ref) return;

    const onMouseDown = (event: Event) =>
      setOpen(ref.contains(event.target as Node));

    document.addEventListener("mousedown", onMouseDown);

    return () => document.removeEventListener("mousedown", onMouseDown);
  }, []);

  return (
    <div
      ref={whenClickOutside}
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
