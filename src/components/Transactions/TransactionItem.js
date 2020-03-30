import React from "react";
import styles from "../Transactions/Transactions.module.css";

function TransactionItem({ type, amount, currency }) {
  return (
    <tr className={styles.tr}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
}
export default TransactionItem;
