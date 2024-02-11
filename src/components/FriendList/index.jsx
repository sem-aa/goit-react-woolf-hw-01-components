import styles from "./FriendsList.module.css";

export const FriendList = ({ friends }) => {
  return (
    <ul class={styles.friendList}>
      {friends.map(({ id, name, avatar, isOnline }) => (
        <li class={styles.item} key={id}>
          <span
            class={styles[isOnline ? "statusOnline" : "statusOffline"]}
          ></span>
          <img
            class={styles.avatar}
            src={avatar}
            alt="User avatar"
            width="48"
          />
          <p class={styles.name}>{name}</p>
        </li>
      ))}
    </ul>
  );
};
