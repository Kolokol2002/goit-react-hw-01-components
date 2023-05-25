import clsx from 'clsx';
import css from './Profile.module.css';
import PropTypes from 'prop-types';

export const Profile = ({
  user: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
  main,
}) => {
  return (
    <div className={clsx(css.profile, main)}>
      <div className={css.description}>
        <img src={avatar} alt="User avatar" className={css.avatar} />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.state}>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{followers}</span>
        </li>
        <li className={css.state}>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{views}</span>
        </li>
        <li className={css.state}>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  user: PropTypes.object,
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
  follower: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
  main: PropTypes.string,
};
