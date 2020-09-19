import React from "react";
import Form from "components/common/Form";
import TextField from "components/common/TextField";
import Confirmation from "./Confirmation";

export default function CheckIn() {
  return (
    <div>
      <Form>
        <Confirmation />

        <TextField name={"ex"} label={"ex. SFTORB"} />
        <TextField name={"from airport"} label={"From Airport"} />
      </Form>
    </div>
  );
}
