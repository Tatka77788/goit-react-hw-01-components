import React from "react";
import styles from "../Statistic/Statistics.module.css";

const StatsItem = ({ stats }) => {
  return stats.map(e => (
    <li className={styles.item} key={e.id}>
      <span className="label">{e.label}</span>
      <span className="percentage">{e.percentage}%</span>
    </li>
  ));
};

export default StatsItem;
