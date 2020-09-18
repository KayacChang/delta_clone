import React from "react";
import Form from "./common/Form";
import TextField from "./common/TextField";
import Confirmation from "./Confirmation";
import styles from "./MyTrips.module.scss";

export default function MyTrips() {
  return (
    <div className={styles.my_trips}>
      <Form>
        <Confirmation />

        <TextField name={"ex"} label={"ex. SFTORB"} />
        <TextField name={"firstname"} label={"First Name"} />
        <TextField name={"lastname"} label={"Last Name"} />
      </Form>
    </div>
  );
}
