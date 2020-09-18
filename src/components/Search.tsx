import React, { useState } from "react";
import Control from "./common/Control";
import Modal from "./common/Modal";
import Tabs from "./common/Tabs";
import TextField from "./common/TextField";
import styles from "./Search.module.scss";
import { GoSearch as SearchIcon } from "react-icons/go";

function Switch() {
  return (
    <div>
      <button className={styles.switch}>
        <span>{"\u2194"}</span>
      </button>
    </div>
  );
}

type LocationProps = {
  from: string;
  hint: string;
  onClick: () => void;
};
function Location({ from, hint, onClick }: LocationProps) {
  return (
    <div className={styles.location}>
      <button onClick={onClick}>
        <span>{from}</span>
        <span>{hint}</span>
      </button>
    </div>
  );
}

export default function Search() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <div className={styles.top}>
        <Location
          from={"From"}
          hint={"Your Origin"}
          onClick={() => setOpen(true)}
        />
        <Switch />
        <Location
          from={"To"}
          hint={"Your Destination"}
          onClick={() => setOpen(true)}
        />
      </div>

      <Modal open={isOpen} className={styles.page}>
        <div className={styles.fixed}>
          <Control onClose={() => setOpen(false)} />
        </div>

        <section>
          <div className={styles.tabs}>
            <Tabs
              options={{
                SEARCH: () => {},
              }}
            />
          </div>

          <div>
            <h5>Origin</h5>

            <TextField
              className={styles.search}
              name={"origin"}
              label={"City or Airport"}
              icon={<SearchIcon size={24} />}
            />
          </div>
        </section>
      </Modal>
    </div>
  );
}
