import React from "react";
import moment, { Moment } from "moment";
import styles from "./Calendar.module.scss";
import { range } from "ramda";
import clsx from "clsx";
import Control from "./common/Control";
import Modal from "./common/Modal";
import useOpen from "hooks/useOpen";

type CalendarProps = {
  range: [Moment, Moment];
  time: Moment;
  onSelect: (time: Moment) => void;
};
function Calendar({ time, onSelect, range }: CalendarProps) {
  const isCurrentMonth = moment().isSame(time, "M");
  const currentDate = time.date();

  const start = time.startOf("month").date();
  const offset = time.startOf("month").day();
  const end = time.endOf("month").date();

  const days = [];

  for (let day = start - offset; day <= end; day++) {
    const unavailable = isCurrentMonth && day < currentDate;
    const today = isCurrentMonth && day === currentDate;

    const current = time.clone().date(day);

    const from = range[0]?.isSame(current);
    const to = range[1]?.isSame(current);
    const select = from || to;

    const between = range.length === 2 && current.isBetween(range[0], range[1]);

    const view = day > 0
      ? (
        <span
          key={day}
          className={clsx(
            (between || select) && styles.between,
            from && styles.edgeL,
            to && styles.edgeR,
          )}
        >
          <button
            className={clsx(
              unavailable && styles.unavailable,
              today && styles.today,
              select && styles.select,
            )}
            onClick={() => onSelect(current)}
          >
            {day}
          </button>
        </span>
      )
      : (
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

type Props = {
  dateRange: Moment[];
  setDateRange: (range: Moment[]) => void;
};
export default function CalendarSection({ dateRange, setDateRange }: Props) {
  const [isOpen, setOpen] = useOpen(false);

  return (
    <div className={styles.wrapper}>
      <button className={styles.trigger} onClick={() => setOpen(true)}>
        <span>{!dateRange[0] ? "Depart" : dateRange[0].format("MMM DD")}</span>
        <span className={styles.separator}>-</span>
        <span>{!dateRange[1] ? "Return" : dateRange[1].format("MMM DD")}</span>
      </button>

      <Modal
        className={styles.page}
        open={isOpen}
        onBlur={() => setOpen(false)}
      >
        <div>
          <Control
            className={styles.top}
            onClear={() => setDateRange([])}
            onClose={() => setOpen(false)}
          />

          <div className={styles.week}>
            <ul>
              {moment.weekdaysShort().map((day) => (
                <li key={day}>{day}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.content}>
          {range(0, 12)
            .map((val) => moment().add(val, "M"))
            .map((time) => (
              <Calendar
                range={dateRange as [Moment, Moment]}
                key={time.month()}
                time={time}
                onSelect={(date) => {
                  if (
                    dateRange.length >= 2 ||
                    dateRange.some((time) => time.isSame(date))
                  ) {
                    setDateRange([]);
                    return;
                  }

                  setDateRange(
                    [...dateRange, date].sort(
                      (a, b) => a.valueOf() - b.valueOf(),
                    ),
                  );
                }}
              />
            ))}
        </div>

        <div className={styles.bottom}>
          <button onClick={() => setOpen(false)}>Done</button>
        </div>
      </Modal>
    </div>
  );
}
