import React from "react";
import styles from "./CheckIn.module.scss";
import Select from "./common/Select";
import Form from "./common/Form";

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
        <Select options={confirmationTypes} />
      </Form>
    </div>
  );
}
