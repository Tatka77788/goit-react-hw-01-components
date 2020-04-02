import React from "react";
import StatsItem from "./Statisticsitem";
import PropTypes from "prop-types";
import styles from "../Statistic/Statistics.module.css";

function Statistic({ title, stats }) {
  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.statList}>
        {stats.map(({ id, label, percentage }) => (
          <StatsItem key={id} label={label} percentage={percentage} />
        ))}
      </ul>
    </section>
  );
}
Statistic.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired
    })
  ).isRequired
};
export default Statistic;
