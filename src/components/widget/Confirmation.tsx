import React, { useState } from "react";
import Select from "components/common/Select";

const confirmationTypes = [
  "Confirmation Number",
  "Credit Card Number",
  "Ticket Number",
  "SkyMiles Number",
];
export default function Confirmation() {
  const [option, setOption] = useState(0);
  return (
    <div>
      <h5>Find Your Trip By</h5>
      <Select
        options={confirmationTypes}
        current={option}
        onSelect={setOption}
      />
    </div>
  );
}
