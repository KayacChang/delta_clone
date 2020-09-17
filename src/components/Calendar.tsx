import React from "react";
import moment, { Moment } from "moment";
import styles from "./Calendar.module.scss";
import { range } from "ramda";

type Props = {
  moment: Moment;
};
function Calendar({ moment }: Props) {
  const start = moment.startOf("month").date();
  const offset = moment.startOf("month").day();
  const end = moment.endOf("month").date();

  const days = [];

  for (let day = start - offset; day <= end; day++) {
    const view =
      day > 0 ? (
        <span key={day}>
          <button>{day}</button>
        </span>
      ) : (
        <span key={day}></span>
      );

    days.push(view);
  }

  return (
    <div className={styles.calendar}>
      <h4>{moment.format("MMMM YYYY")}</h4>

      <div>{days}</div>
    </div>
  );
}

function CalendarPage() {
  return (
    <div className={styles.page}>
      <div className={styles.control}>
        <div>
          <button>Clear</button>
          <button>Close</button>
        </div>
      </div>

      <div className={styles.week}>
        <ul>
          {moment.weekdaysShort().map((day) => (
            <li key={day}>{day}</li>
          ))}
        </ul>
      </div>

      <div>
        {range(0, 12).map((val) => (
          <Calendar moment={moment().add(val, "M")} />
        ))}
      </div>
    </div>
  );
}

export default function CalendarSection() {
  // const [isOpen, setOpen] = useState(false);

  return (
    <div className={styles.wrapper}>
      <button className={styles.trigger}>
        <span>Depart</span>
        <span className={styles.separator}>-</span>
        <span>Return</span>
      </button>

      <CalendarPage />
    </div>
  );
}
