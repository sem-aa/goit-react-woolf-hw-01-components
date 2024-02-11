import styles from '../FriendsList.module.css';

export const FriendsListItem = ({ friend }) => {
  const { isOnline, avatar, name } = friend;
  return (
    <li className={styles.item}>
      <span
        className={isOnline ? styles.isOnline : styles.statusOffline}
      ></span>
      <img
        className={styles.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={styles.name}>{name}</p>
    </li>
  );
};
