import React, { useState } from "react";
import Control from "./Control";
import Modal from "./Modal";
import styles from "./Search.module.scss";

function Switch() {
  return (
    <div>
      <button className={styles.switch}>
        <span>{"\u2194"}</span>
      </button>
    </div>
  );
}

type LocationProps = {
  from: string;
  hint: string;
  onClick: () => void;
};
function Location({ from, hint, onClick }: LocationProps) {
  return (
    <div className={styles.location}>
      <button onClick={onClick}>
        <span>{from}</span>
        <span>{hint}</span>
      </button>
    </div>
  );
}

export default function Search() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <div className={styles.top}>
        <Location
          from={"From"}
          hint={"Your Origin"}
          onClick={() => setOpen(true)}
        />
        <Switch />
        <Location
          from={"To"}
          hint={"Your Destination"}
          onClick={() => setOpen(true)}
        />
      </div>

      <Modal open={isOpen}>
        <Control onClose={() => setOpen(false)} />
      </Modal>
    </div>
  );
}
