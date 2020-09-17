import React from "react";
import { GoSearch as SearchIcon } from "react-icons/go";
import { MdExpandMore as Expand } from "react-icons/md";
import {
  TiSocialFacebook as Facebook,
  TiSocialTwitter as Twitter,
} from "react-icons/ti";
import { AiOutlineGlobal as Global } from "react-icons/ai";
import styles from "./Footer.module.scss";

function Search() {
  return (
    <div className={styles.search}>
      <input type="text" name="search" id="search" />
      <label htmlFor="search">Search for a topic...</label>
      <button>
        <SearchIcon size={24} />
      </button>
    </div>
  );
}

type Props = {
  title: string;
};
function Collapse({ title }: Props) {
  return (
    <div className={styles.collapse}>
      <button>
        {title}
        <Expand size={16} />
      </button>
    </div>
  );
}

function CopyRight() {
  return (
    <div className={styles.copyright}>
      <p>© 2020 Delta Air Lines, Inc. | Travel may be on other airlines.</p>
      <p>
        Terms and conditions apply to all offers and SkyMiles benefits. See
        specific offer for details, and visit{" "}
        <a>{"SkyMiles Membership Guide & Program Rules"}</a>
      </p>
    </div>
  );
}

function Feedback() {
  return (
    <div className={styles.feedback}>
      <button>Website Feedback</button>
    </div>
  );
}

function Social() {
  const size = 32;

  return (
    <div className={styles.social}>
      <button>
        <Facebook size={size} />
      </button>
      <button>
        <Twitter size={size} />
      </button>
    </div>
  );
}

function Localization() {
  return (
    <div className={styles.localization}>
      <button>
        <Global size={24} />
        <span>United States - English</span>
      </button>
      <button>Español</button>
    </div>
  );
}

const sections = [
  { title: "about delta" },
  { title: "customer service" },
  { title: "site support" },
  { title: "policies" },
];
export default function Footer() {
  return (
    <div className={styles.footer}>
      <Search />

      <div className={styles.sections}>
        {sections.map(({ title }) => (
          <Collapse title={title} />
        ))}
      </div>

      <CopyRight />
      <Feedback />
      <Social />
      <Localization />
    </div>
  );
}
