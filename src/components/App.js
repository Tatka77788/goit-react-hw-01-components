import React from "react";
import PropTypes from "prop-types";
import Profile from "./Profile/Profile";
import user from "../templates/User.json";
import statisticalData from "../templates/Statistics.json";
import Statistic from "./Statistic/Statistics";
import FriendsList from "./FriendsList/FriendsList";
import friends from "../templates/Friends.json";
import TransactionHistory from "./Transactions/TransactionHystory";
import transaction from "../templates/Transactions.json";

const App = () => {
  return (
    <>
      <Profile {...user} />
      <Statistic title="Upload stats" stats={statisticalData} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transaction} />
    </>
  );
};

App.propTypes = {
  user: PropTypes.object.isRequired,
  friends: PropTypes.array.isRequired
};
export default App;
