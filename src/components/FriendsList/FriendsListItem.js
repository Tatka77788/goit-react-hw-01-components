import React from "react";
import PropTypes from "prop-types";
import styles from "../FriendsList/FriendsList.module.css";

function FriendsListItem({ friends }) {
  return friends.map(e => (
    <li className={styles.item} key={e.id}>
      <span className={e.isOnline ? styles.online : styles.offline}></span>
      <img
        className={styles.avatar}
        src={e.avatar}
        alt="friend avatar"
        width="48"
      />
      <p className={styles.name}>{e.name}</p>
    </li>
  ));
}

FriendsListItem.PropTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
  id: PropTypes.number.isRequired
};
export default FriendsListItem;
