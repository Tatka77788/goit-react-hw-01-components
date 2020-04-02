import React from "react";
import PropTypes from "prop-types";
import styles from "../FriendsList/FriendsList.module.css";

function FriendsListItem({ isOnline, avatar, name }) {
  return (
    <li className={styles.item}>
      <span className={isOnline ? styles.online : styles.offline}></span>
      <img
        className={styles.avatar}
        src={avatar}
        alt="friend avatar"
        width="48"
      />
      <p className={styles.name}>{name}</p>
    </li>
  );
}

FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired
};
export default FriendsListItem;
