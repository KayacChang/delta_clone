import React from "react";
import Control from "./common/Control";
import Modal from "./common/Modal";
import Tabs from "./common/Tabs";
import TextField from "./common/TextField";
import styles from "./Search.module.scss";
import { GoSearch as SearchIcon } from "react-icons/go";

type Props = {
  open: boolean;
  onClose: () => void;
};
export default function Search({ open, onClose }: Props) {
  return (
    <Modal open={open} className={styles.page}>
      <div className={styles.fixed}>
        <Control onClose={onClose} />
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
  );
}
