import React from "react";
import styles from "../FriendsList/FriendsList.module.css";
import FriendsListItem from "./FriendsListItem";
import PropTypes from "prop-types";

function FriendsList({ friends }) {
  return (
    <ul className={styles.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendsListItem
          key={id}
          avatar={avatar}
          isOnline={isOnline}
          name={name}
        />
      ))}
    </ul>
  );
}
FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired
    })
  ).isRequired
};
export default FriendsList;
