import clsx from "clsx";
import React, { ReactNode } from "react";
import styles from "./Modal.module.scss";

type Props = {
  open?: boolean;
  className?: string;
  children: ReactNode;
};
export default function Modal({ children, open = false, className }: Props) {
  return (
    <div className={clsx(styles.page, open && styles.open, className)}>
      {children}
    </div>
  );
}
