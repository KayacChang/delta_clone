import React, { useState } from "react";
import styles from "./Advanced.module.scss";
import CheckBox from "components/common/CheckBox";
import Select from "components/common/Select";
import TextField from "components/common/TextField";

const economyTypes = [
  "Basic Economy",
  "Main Cabin",
  "Delta Comfort+®",
  "First Class",
  "Delta Premium Select",
  "Delta One®",
];

type Props = {
  shopWithMiles?: boolean;
  myDatesAreFlexible?: boolean;
};
export default function Advanced({
  shopWithMiles = false,
  myDatesAreFlexible = false,
}: Props) {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className={styles.advanced}>
      <button
        className={styles.advanced_trigger}
        onClick={() => setOpen(!isOpen)}
      >
        Advanced Search <span>{isOpen ? "\u25B2" : "\u25BC"}</span>
      </button>

      <div style={{ display: isOpen ? "block" : "none" }}>
        {(!myDatesAreFlexible || shopWithMiles) && (
          <div>
            <h5>SHOW FARES</h5>

            <CheckBox
              name={"Include Nearby Airports"}
              label={"Include Nearby Airports"}
            />
          </div>
        )}

        <div>
          <h5>Best Fares For</h5>
          <Select options={economyTypes} />

          {!shopWithMiles && (
            <TextField name="meeting" label="Meeting Code (Optional)" />
          )}
        </div>

        <a href="/">
          Use Certificates, eCredits, or Delta Gift Cards <span>{">"}</span>
        </a>
      </div>
    </div>
  );
}
