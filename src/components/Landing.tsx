import React from "react";
import { IoIosArrowForward as Forward } from "react-icons/io";
import { url } from "utils";
import styles from "./Landing.module.scss";

const sections = [
  {
    img:
      "//content.delta.com/content/www/en_US/personalization/campaign/homepage/banner-promoquilt/us-carousel.damAssetRender.20200325T1219469810400.html/content/dam/delta-tnt/homepage/covid/icon-flight-changes-1000.jpg",
    title: "CAN I CANCEL/CHANGE MY FLIGHT?",
    description: `We understand you have questions. Learn more about our simplified waivers and find out if your upcoming flight qualifies.`,
  },
  {
    img:
      "//content.delta.com/content/www/en_US/personalization/campaign/homepage/banner-promoquilt/us-carousel.damAssetRender.20200325T1219468950400.html/content/dam/delta-tnt/homepage/covid/icon-ecredit-1000.jpg",
    title: "HOW DO I CHANGE MY FLIGHT AND FIND MY ECREDITS?",
    description: `If your trip has been impacted by coronavirus, it's easy to cancel or change your flights. Learn how to modify your trip and rebook using eCredits with our step-by-step guides.`,
  },
  {
    img:
      "//content.delta.com/content/www/en_US/personalization/campaign/homepage/banner-promoquilt/us-carousel.damAssetRender.20200325T1219468420400.html/content/dam/delta-tnt/homepage/covid/icon-bell-1000.jpg",
    title: "WHAT ARE THE LATEST TRAVEL UPDATES?",
    description: `Information is more important than ever. We pledge to share updates with you as quickly as possible, with full transparency and, as always, with your safety foremost in mind.`,
  },
];

type Props = {
  img: string;
  title: string;
  description: string;
};
function Item({ img, title, description }: Props) {
  return (
    <div className={styles.content}>
      <span
        className={styles.img}
        style={{
          backgroundImage: url(img),
        }}
      />
      <div>
        <h4>{title}</h4>
        <div>
          <p>{description}</p>
          <span>
            <Forward size={24} />
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Landing() {
  return (
    <main className={styles.landing}>
      <section className={styles.top}>
        <h4>THE DELTA CUSTOMER EXPERIENCE</h4>
        <h1>Supporting You Through Your Travel Journey</h1>
      </section>

      <section className={styles.mid}>
        {sections.map(({ img, title, description }) => (
          <Item img={img} title={title} description={description} />
        ))}
      </section>
    </main>
  );
}
