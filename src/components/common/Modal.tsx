import clsx from "clsx";
import useClickOutSide from "hooks/useClickOutSide";
import React, { ReactNode } from "react";
import styles from "./Modal.module.scss";

type Props = {
  open?: boolean;

  className?: string;
  children: ReactNode;
  onBlur?: () => void;
};
export default function Modal(
  { children, open = false, className, onBlur = () => {} }: Props,
) {
  return (
    <div
      ref={useClickOutSide(onBlur)}
      className={clsx(styles.page, open && styles.open, className)}
    >
      {children}
    </div>
  );
}
