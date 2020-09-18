import React, { ReactNode } from "react";
import styles from "./Form.module.scss";
import { BsArrowRightShort as Arrow } from "react-icons/bs";

function Submit() {
  return (
    <div className={styles.submit}>
      <button>
        <Arrow size={36} />
      </button>
    </div>
  );
}

type Props = {
  children: ReactNode;
};
export default function Form({ children }: Props) {
  return (
    <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
      {children}

      <Submit />
    </form>
  );
}
