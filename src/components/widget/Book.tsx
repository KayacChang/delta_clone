import { Moment } from "moment";
import { range } from "ramda";
import React, { useState } from "react";
import styles from "./Book.module.scss";
import Calendar from "components/Calendar";
import CheckBox from "components/common/CheckBox";
import Select from "components/common/Select";
import Form from "components/common/Form";
import SearchModel from "components/Search";
import TextField from "components/common/TextField";
import clsx from "clsx";
import useOpen from "hooks/useOpen";
import { Airport } from "api/airport";

const economyTypes = [
  "Basic Economy",
  "Main Cabin",
  "Delta Comfort+®",
  "First Class",
  "Delta Premium Select",
  "Delta One®",
];
type Props = {
  isOpen: boolean;
  shopWithMiles?: boolean;
  myDatesAreFlexible?: boolean;
};
function Advanced({
  shopWithMiles = false,
  myDatesAreFlexible = false,
  isOpen,
}: Props) {
  const [nearby, setNearby] = useState(false);
  const [economy, setEconomy] = useState(0);

  return (
    <div
      className={styles.advanced}
      style={{ display: clsx(!isOpen && "none") }}
    >
      {(!myDatesAreFlexible || shopWithMiles) && (
        <div className={styles.show_fares}>
          <h5>SHOW FARES</h5>

          <CheckBox
            checked={nearby}
            onChange={setNearby}
            name={"Include Nearby Airports"}
            label={"Include Nearby Airports"}
          />
        </div>
      )}

      <div className={styles.best_fares}>
        <h5>Best Fares For</h5>
        <div>
          <Select
            options={economyTypes}
            current={economy}
            onSelect={setEconomy}
          />

          {!shopWithMiles && (
            <TextField name="meeting" label="Meeting Code (Optional)" />
          )}
        </div>
      </div>
    </div>
  );
}

type SwitchProps = {
  onClick: () => void;
};
function Switch({ onClick }: SwitchProps) {
  return (
    <div>
      <button className={styles.switch} onClick={onClick}>
        <span>{"\u2194"}</span>
      </button>
    </div>
  );
}

type LocationProps = {
  IATA: string;
  city: string;
  onClick: () => void;
};
function Location({ IATA, city, onClick }: LocationProps) {
  return (
    <div className={styles.location}>
      <button onClick={onClick}>
        <span>{IATA}</span>
        <span>{city}</span>
      </button>
    </div>
  );
}

function Search() {
  const [open, setOpen] = useOpen();
  const [search, setSearch] = useState("");

  const [from, setFrom] = useState<Airport>();
  const [to, setTo] = useState<Airport>();

  return (
    <div>
      <div className={styles.top}>
        <Location
          IATA={from?.IATA || "From"}
          city={from?.city || "Your Origin"}
          onClick={() => {
            setSearch("Origin");
            setOpen(true);
          }}
        />
        <Switch
          onClick={() => {
            setFrom(to);
            setTo(from);
          }}
        />
        <Location
          IATA={to?.IATA || "To"}
          city={to?.city || "Your Destination"}
          onClick={() => {
            setSearch("Destination");
            setOpen(true);
          }}
        />
      </div>

      <SearchModel
        title={search}
        onSelect={(value) => {
          if (search === "Origin") {
            setFrom(value);
          }
          if (search === "Destination") {
            setTo(value);
          }
        }}
        open={open}
        onClose={() => setOpen(false)}
      />
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
  const [isOpen, setOpen] = useState(false);

  return (
    <div className={styles.book}>
      <Form>
        <div className={styles.form_top}>
          <Search />

          <div className={styles.normal}>
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
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.checkboxs}>
            {Object.entries(checks).map(([name, checked]) => (
              <CheckBox
                key={name}
                name={name}
                checked={checked}
                disable={name !== "Shop with Miles" &&
                  checks["Shop with Miles"]}
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

          <button
            className={styles.advanced_trigger}
            onClick={() => setOpen(!isOpen)}
          >
            Advanced Search <span>{isOpen ? "\u25B2" : "\u25BC"}</span>
          </button>
        </div>

        <Advanced
          isOpen={isOpen}
          shopWithMiles={checks["Shop with Miles"]}
          myDatesAreFlexible={checks["My dates are flexible"]}
        />

        {isOpen && (
          <a href="/">
            Use Certificates, eCredits, or Delta Gift Cards <span>{">"}</span>
          </a>
        )}
      </Form>
    </div>
  );
}
