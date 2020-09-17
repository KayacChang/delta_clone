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
};
function Location({ from, hint }: LocationProps) {
  return (
    <div className={styles.location}>
      <button>
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
        <Location from={"From"} hint={"Your Origin"} />
        <Switch />
        <Location from={"To"} hint={"Your Destination"} />
      </div>

      <Modal open={isOpen}>
        <Control onClose={() => setOpen(!isOpen)} />
      </Modal>
    </div>
  );
}
