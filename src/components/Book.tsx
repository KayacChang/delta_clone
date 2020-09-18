import { Moment } from "moment";
import { range } from "ramda";
import React, { useState } from "react";
import Advanced from "./Advanced";
import styles from "./Book.module.scss";
import Calendar from "./Calendar";
import CheckBox from "./common/CheckBox";
import Select from "./common/Select";
import Form from "./common/Form";
import SearchModel from "./Search";

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

function Search() {
  const [open, setOpen] = useState(false);

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

      <SearchModel open={open} onClose={() => setOpen(false)} />
    </div>
  );
}

const tripTypes = ["Round Trip", "One Way", "Multi-City"];
const passengers = range(1, 10).map((num) => `${num} Passenger`);
const checks = [
  {
    name: "Shop with Miles",
    label: "Shop with Miles",
  },
  {
    name: "Refundable Fares",
    label: "Refundable Fares",
  },
  {
    name: "My dates are flexible",
    label: "My dates are flexible",
  },
];
export default function Book() {
  const [trip, setTrip] = useState(0);
  const [passenger, setPassenger] = useState(0);
  const [dateRange, setDateRange] = useState([] as Moment[]);

  return (
    <div className={styles.book}>
      <Form>
        <Search />

        <Select
          current={trip}
          options={tripTypes}
          onSelect={(id) => setTrip(id)}
        />

        <Calendar dateRange={dateRange} setDateRange={setDateRange} />

        <Select
          current={passenger}
          options={passengers}
          onSelect={(id) => setPassenger(id)}
        />

        <div className={styles.checkboxs}>
          {checks.map(({ name, label }) => (
            <CheckBox key={name} name={name} label={label} />
          ))}
        </div>

        <Advanced />
      </Form>
    </div>
  );
}
