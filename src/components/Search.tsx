import React, { useState } from "react";
import Control from "./common/Control";
import Modal from "./common/Modal";
import Tabs from "./common/Tabs";
import TextField from "./common/TextField";
import styles from "./Search.module.scss";
import { GoSearch as SearchIcon } from "react-icons/go";
import { useAirportState } from "models/airport";
import { Airport } from "api/airport";

function useAirportSearch() {
  const airports = useAirportState();
  const cache = new Map<string, Airport[]>();

  function search(token: string) {
    if (cache.has(token)) {
      return cache.get(token) || [];
    }

    const regexp = RegExp(token, "gi");
    const targets = airports.filter(
      ({ city }) => city && city.search(regexp) !== -1
    );

    cache.set(token, targets);

    return targets;
  }

  return search;
}

type Props = {
  open: boolean;
  onClose: () => void;
};
export default function Search({ open, onClose }: Props) {
  const search = useAirportSearch();
  const [airport, setAirport] = useState([] as Airport[]);

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
            onChange={(token) => {
              if (token.length < 3) return;

              setAirport(search(token));
            }}
          />
        </div>
      </section>
    </Modal>
  );
}
