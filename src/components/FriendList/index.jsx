import styles from './FriendsList.module.css';
import { FriendsListItem } from './components/FriendsListItem';

export const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map(friend => (
        <FriendsListItem friend={friend} key={friend.id} />
      ))}
    </ul>
  );
};
