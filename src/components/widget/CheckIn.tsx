import React, { useState } from "react";
import Form from "components/common/Form";
import TextField from "components/common/TextField";
import Confirmation from "./Confirmation";

export default function CheckIn() {
  const [ex, setEx] = useState("");
  const [from, setFrom] = useState("");

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
          name={"from airport"}
          label={"From Airport"}
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        />
      </Form>
    </div>
  );
}
