import React from "react";
import styles from "../FriendsList/FriendsList.module.css";
import FriendsListItem from "./FriendsListItem";

function FriendsList({ friends }) {
  return (
    <ul className={styles.friendList}>
      <FriendsListItem friends={friends} />
    </ul>
  );
}

export default FriendsList;
