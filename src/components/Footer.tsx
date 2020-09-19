import React, { ReactNode, useState } from "react";
import { GoSearch as SearchIcon } from "react-icons/go";
import { MdExpandMore as More, MdExpandLess as Less } from "react-icons/md";
import {
  TiSocialFacebook as Facebook,
  TiSocialTwitter as Twitter,
} from "react-icons/ti";
import { AiOutlineGlobal as Global } from "react-icons/ai";
import styles from "./Footer.module.scss";
import TextField from "./common/TextField";
import { motion } from "framer-motion";
import useIsDesktop from "hooks/useIsDesktop";

function Search() {
  return (
    <TextField
      name="search"
      label="Search for a topic..."
      icon={<SearchIcon size={24} />}
    />
  );
}

const variants = {
  open: { height: "auto" },
  close: { height: 0 },
};
type Props = {
  title: string;
  children?: ReactNode;
  disable: boolean;
};
function Collapse({ title, children, disable }: Props) {
  const [open, setOpen] = useState(false);

  if (disable) {
    return (
      <div className={styles.collapse}>
        <h5>{title}</h5>
        <div className={styles.links}>{children}</div>
      </div>
    );
  }

  return (
    <div className={styles.collapse} onBlur={() => setOpen(false)}>
      <button onClick={() => setOpen(!open)}>
        {title}
        {open ? <Less size={16} /> : <More size={16} />}
      </button>

      <motion.div
        initial={open ? "open" : "close"}
        animate={open ? "open" : "close"}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        variants={variants}
        className={styles.links}
      >
        {children}
      </motion.div>
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
        <a href="/">{"SkyMiles Membership Guide & Program Rules"}</a>
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
  {
    title: "about delta",
    list: [
      "About Us",
      "Careers",
      "News Hub",
      "Investor Relations",
      "Business Travel",
      "Travel Agents",
      "Mobile App",
    ],
  },
  {
    title: "customer service",
    list: ["Need Help?", "Tweet Us", "Comment/Complaint"],
  },
  {
    title: "site support",
    list: [
      "Login Help",
      "Site Map",
      "Browser Compatibility",
      "Accessibility",
      "Booking Information",
    ],
  },
  {
    title: "policies",
    list: [
      "Customer Commitment",
      "Tarmac Delay Plan",
      "Legal",
      "Sustainability",
      "Contract of Carriage",
      "Cookies, Privacy & Security",
      "Human Trafficking Statement",
    ],
  },
];
export default function Footer() {
  const isDesktop = useIsDesktop();

  return (
    <div className={styles.footer}>
      <Search />

      <div className={styles.popular}>
        <div>
          <h5>Popular Topics:</h5>
          <a href="/">Need Help?</a>
          <a href="/">Coronavirus</a>
          <a href="/">eCredits</a>
        </div>
      </div>

      <hr />

      <div className={styles.sections}>
        {sections.map(({ title, list }) => (
          <Collapse key={title} title={title} disable={isDesktop}>
            {list.map((content) => (
              <a className={styles.link} href="/" key={content}>
                {content}
              </a>
            ))}
          </Collapse>
        ))}
      </div>

      <CopyRight />
      <Feedback />
      <Social />
      <Localization />
    </div>
  );
}
