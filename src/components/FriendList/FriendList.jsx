import css from './FriendList.module.css';

export const FriendList = ({ friends, boxShadow }) => {
  return (
    <ul className={css.friend_list + ' ' + boxShadow}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li key={id} className="item">
          <span className={`status-is-${isOnline}`}></span>
          <img className="avatar" src={avatar} alt="User avatar" width="48" />
          <p className="name">{name}</p>
        </li>
      ))}
    </ul>
  );
};
