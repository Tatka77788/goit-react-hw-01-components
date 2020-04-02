import React from "react";
import styles from "../Statistic/Statistics.module.css";

const StatsItem = ({ label, percentage }) => {
  return (
    <li className={styles.item}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>
  );
};

export default StatsItem;
