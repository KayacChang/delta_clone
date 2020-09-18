import React from "react";
import Select from "./common/Select";

const confirmationTypes = [
  "Confirmation Number",
  "Credit Card Number",
  "Ticket Number",
  "SkyMiles Number",
];
export default function Confirmation() {
  return (
    <div>
      <h5>Find Your Trip By</h5>
      <Select options={confirmationTypes} />
    </div>
  );
}
