import React from "react";
import { IoIosArrowForward as Forward } from "react-icons/io";
import { url } from "utils";
import styles from "./Landing.module.scss";

const services = [
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

const posts = [
  {
    img:
      "//content.delta.com/content/www/en_US/personalization/campaign/homepage/banner-promoquilt/us-carousel.damAssetRender.20200504T1357339150400.html/content/dam/delta-com/airplanes/airplane-sea-boeing-snow-1400.jpg",
    title: "ADAPTED TRAVEL EXPERIENCE",
    description: `Learn how Delta is continuing to evaluate and make adjustments to your travel experience while staying in close coordination with the CDC and WHO to ensure your safety.`,
  },
  {
    img:
      "//content.delta.com/content/www/en_US/personalization/campaign/homepage/banner-promoquilt/us-carousel.damAssetRender.20200325T1154442160400.html/content/dam/delta-tnt/homepage/covid/delta-aircraft-cleaning-hand-1200.jpg",
    title: "COMMITTED TO YOUR SAFETY",
    description: `We're doing everything we can to deliver a safe, healthy and clean travel experience. Caring for our customers and employees is our top priority. `,
  },
];

const products = [
  {
    img:
      "//content.delta.com/content/www/en_US/personalization/campaign/homepage/banner-promoquilt/us-carousel.damAssetRender.20200325T1209251220400.html/content/dam/delta-tnt/homepage/covid/fly-delta-app-1500.jpg",
    title: "DOWNLOAD THE FLY DELTA APP",
    description: `Download the app to be notified of flight updates and access your mobile boarding pass to limit the use of touch-screen kiosks. `,
  },
  {
    img:
      "//content.delta.com/content/www/en_US/personalization/campaign/homepage/banner-promoquilt/us-carousel.damAssetRender.20200617T1058385000400.html/content/dam/delta-com/ux-team/screens-shop-book-350.jpg",
    title: "BOOK WITH CONFIDENCE",
    description: `We're ready when you are. We are waiving change fees broadly and, above all, rest assured the value of your ticket won't be lost if you need to make a change. `,
  },
];

type Props = {
  img: string;
  title: string;
  description: string;
  hr?: boolean;
};
function Card({ img, title, description, hr = false }: Props) {
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

        {hr && <hr />}

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

      <section>
        {services.map(({ img, title, description }) => (
          <Card key={title} img={img} title={title} description={description} />
        ))}
      </section>

      <section>
        {posts.map(({ img, title, description }) => (
          <Card key={title} img={img} title={title} description={description} />
        ))}
      </section>

      <section>
        {products.map(({ img, title, description }) => (
          <Card
            key={title}
            img={img}
            title={title}
            description={description}
            hr={true}
          />
        ))}
      </section>
    </main>
  );
}
