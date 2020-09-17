import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { MdExpandMore as ExpandIcon } from "react-icons/md";
import styles from "./Book.module.scss";
import Select from "./Select";

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

const tripTypes = ["Round Trip", "One Way", "Multi-City"];
export default function Book() {
  const [trip, setTrip] = useState(0);

  return (
    <div className={styles.book}>
      <div className={styles.top}>
        <Location from={"From"} hint={"Your Origin"} />
        <Switch />
        <Location from={"To"} hint={"Your Destination"} />
      </div>

      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        <Select
          current={trip}
          options={tripTypes}
          onSelect={(id) => setTrip(id)}
        />
      </form>
    </div>
  );
}
