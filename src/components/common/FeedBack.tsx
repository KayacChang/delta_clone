import React from "react";
import { RiChat4Fill as FeedBackIcon } from "react-icons/ri";
import styles from "./FeedBack.module.scss";

export default function FeedBack() {
  return (
    <button className={styles.feedback}>
      <FeedBackIcon />
      <span>Feedback</span>
    </button>
  );
}
