import React from "react";
import { url } from "utils";
import styles from "./Banner.module.scss";

const IMG =
  "//content.delta.com/content/dam/delta-tnt/homepage/hero/social/delta-mask-ugc-0826-1600.jpg";

const title = `MASKER UP.\n WHEELS UP.`;

const content = `In keeping with best practice guidelines from the CDC, all customers must wear a mask or face covering when traveling.`;

export default function Banner() {
  return (
    <div style={{ backgroundImage: url(IMG) }} className={styles.banner}>
      <div>
        <span className={styles.title}>
          <a href="/">{title}</a>
        </span>
        <span className={styles.content}>
          <a href="/">{content}</a>
        </span>
      </div>
    </div>
  );
}
