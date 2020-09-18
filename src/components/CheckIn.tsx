import React from "react";
import styles from "./CheckIn.module.scss";
import Select from "./common/Select";
import Form from "./common/Form";
import TextField from "./common/TextField";

const confirmationTypes = [
  "Confirmation Number",
  "Credit Card Number",
  "Ticket Number",
  "SkyMiles Number",
];
export default function CheckIn() {
  return (
    <div className={styles.checkin}>
      <Form>
        <div>
          <h5>Find Your Trip By</h5>
          <Select options={confirmationTypes} />
        </div>

        <TextField name={"ex"} label={"ex. SFTORB"} />
        <TextField name={"from airport"} label={"From Airport"} />
      </Form>
    </div>
  );
}
