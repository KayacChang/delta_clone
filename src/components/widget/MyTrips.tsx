import React, { useState } from "react";
import Form from "../common/Form";
import TextField from "../common/TextField";
import Confirmation from "./Confirmation";

export default function MyTrips() {
  const [ex, setEx] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  return (
    <div>
      <Form>
        <Confirmation />

        <TextField
          name={"ex"}
          label={"ex. SFTORB"}
          value={ex}
          onChange={(e) => setEx(e.target.value)}
        />
        <TextField
          name={"firstname"}
          label={"First Name"}
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
        <TextField
          name={"lastname"}
          label={"Last Name"}
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
      </Form>
    </div>
  );
}
