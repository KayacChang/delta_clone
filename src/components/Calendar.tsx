import React from "react";
import moment, { Moment } from "moment";
import styles from "./Calendar.module.scss";
import { range } from "ramda";
import clsx from "clsx";

type Props = {
  time: Moment;
};
function Calendar({ time }: Props) {
  const isCurrentMonth = moment().isSame(time, "M");
  const current = time.date();
  const start = time.startOf("month").date();
  const offset = time.startOf("month").day();
  const end = time.endOf("month").date();

  const days = [];

  for (let day = start - offset; day <= end; day++) {
    const unavailable = isCurrentMonth && day < current;
    const today = isCurrentMonth && day === current;

    const view =
      day > 0 ? (
        <span key={day}>
          <button
            className={clsx(
              unavailable && styles.unavailable,
              today && styles.today
            )}
          >
            {day}
          </button>
        </span>
      ) : (
        <span key={day}></span>
      );

    days.push(view);
  }

  return (
    <div className={styles.calendar}>
      <h4>{time.format("MMMM YYYY")}</h4>

      <div>{days}</div>
    </div>
  );
}

function CalendarPage() {
  return (
    <div className={styles.page}>
      <div className={styles.top}>
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
      </div>

      <div className={styles.content}>
        {range(0, 12).map((val) => (
          <Calendar time={moment().add(val, "M")} />
        ))}
      </div>

      <div className={styles.bottom}>
        <button>Done</button>
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
