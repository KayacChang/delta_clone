import React from "react";
import Form from "../common/Form";
import TextField from "../common/TextField";
import Confirmation from "./Confirmation";

export default function MyTrips() {
  return (
    <div>
      <Form>
        <Confirmation />

        <TextField name={"ex"} label={"ex. SFTORB"} />
        <TextField name={"firstname"} label={"First Name"} />
        <TextField name={"lastname"} label={"Last Name"} />
      </Form>
    </div>
  );
}
