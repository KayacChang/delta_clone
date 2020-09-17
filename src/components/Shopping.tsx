import React, { ReactNode } from "react";
import { ImAirplane as Vacations } from "react-icons/im";
import {
  FaRegCreditCard as CreditCards,
  FaCarAlt as Cars,
} from "react-icons/fa";
import { MdHotel as Hotels } from "react-icons/md";
import { AiOutlineCreditCard as GiftCards } from "react-icons/ai";
import styles from "./Shopping.module.scss";

type Props = {
  icon?: ReactNode;
  name: string;
};
function Item({ icon, name }: Props) {
  return (
    <div className={styles.item}>
      {icon ?? <span>{icon}</span>}
      <span>{name}</span>
    </div>
  );
}

export default function Shopping() {
  const items = [
    { name: "vacations", icon: <Vacations size={24} /> },
    { name: "delta amex", icon: <CreditCards size={24} /> },
    { name: "hotels", icon: <Hotels size={24} /> },
    { name: "cars", icon: <Cars size={24} /> },
    { name: "gift cards", icon: <GiftCards size={24} /> },
    { name: "Updated Bag & Travel Fees" },
  ];

  return (
    <div className={styles.shopping}>
      {items.map(({ name, icon }) => (
        <Item key={name} name={name} icon={icon} />
      ))}
    </div>
  );
}
