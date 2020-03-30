import React from "react";
import PropTypes from "prop-types";
import TransactionItem from "./TransactionItem";
import styles from "../Transactions/Transactions.module.css";

const TransactionHistory = ({ items }) => {
  console.log(items);
  return (
    <table className={styles.table}>
      <thead className={styles.tHead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <TransactionItem
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        ))}
      </tbody>
    </table>
  );
};
TransactionHistory.defaultProps = {
  items: []
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired
    })
  )
};

export default TransactionHistory;
