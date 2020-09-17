import React from "react";
import styles from "./Advanced.module.scss";
import CheckBox from "./CheckBox";
import Select from "./Select";

const economyTypes = [
  "Basic Economy",
  "Main Cabin",
  "Delta Comfort+®",
  "First Class",
  "Delta Premium Select",
  "Delta One®",
];
export default function Advanced() {
  return (
    <div className={styles.advanced}>
      <button className={styles.advanced_trigger}>
        Advanced Search <span>{"\u25BC"}</span>
      </button>

      <div>
        <div>
          <h5>SHOW FARES</h5>

          <CheckBox
            name={"Include Nearby Airports"}
            label={"Include Nearby Airports"}
          />
        </div>

        <div>
          <h5>Best Fares For</h5>

          <Select options={economyTypes} />
        </div>
      </div>
    </div>
  );
}
