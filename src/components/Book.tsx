import { Moment } from "moment";
import { range } from "ramda";
import React, { useState } from "react";
import Advanced from "./Advanced";
import styles from "./Book.module.scss";
import Calendar from "./Calendar";
import CheckBox from "./common/CheckBox";
import Select from "./common/Select";
import Form from "./common/Form";
import Search from "./Search";

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
