import { Moment } from "moment";
import { range } from "ramda";
import React, { useState } from "react";
import Advanced from "./Advanced";
import styles from "./Book.module.scss";
import Calendar from "components/Calendar";
import CheckBox from "components/common/CheckBox";
import Select from "components/common/Select";
import Form from "components/common/Form";
import SearchModel from "components/Search";

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
const checkList = {
  "Shop with Miles": false,
  "Refundable Fares": false,
  "My dates are flexible": false,
};
export default function Book() {
  const [trip, setTrip] = useState(0);
  const [passenger, setPassenger] = useState(0);
  const [dateRange, setDateRange] = useState([] as Moment[]);
  const [checks, setChecks] = useState(checkList);

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
          {Object.entries(checks).map(([name, checked]) => (
            <CheckBox
              key={name}
              name={name}
              checked={checked}
              disable={name !== "Shop with Miles" && checks["Shop with Miles"]}
              onChange={(checked) => {
                if (name === "Shop with Miles") {
                  const checks = checked
                    ? {
                        "Shop with Miles": true,
                        "Refundable Fares": false,
                        "My dates are flexible": true,
                      }
                    : checkList;

                  setChecks(checks);
                  return;
                }

                setChecks({ ...checks, [name]: checked });
              }}
            />
          ))}
        </div>

        <Advanced
          shopWithMiles={checks["Shop with Miles"]}
          myDatesAreFlexible={checks["My dates are flexible"]}
        />
      </Form>
    </div>
  );
}
