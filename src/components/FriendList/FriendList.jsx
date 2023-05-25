import clsx from 'clsx';
import css from './FriendList.module.css';

export const FriendList = ({ friends, main }) => {
  return (
    <ul className={clsx(css.friend_list, main)}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li key={id} className={css.item}>
          <span
            className={clsx(
              css.status,
              css[isOnline ? 'isOnline' : 'isOffline']
            )}
          ></span>
          <img
            className={css.avatar}
            src={avatar}
            alt="User avatar"
            width="48"
          />
          <p className={css.name}>{name}</p>
        </li>
      ))}
    </ul>
  );
};
