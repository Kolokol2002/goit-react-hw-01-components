export const Profile = ({
  user: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) => {
  return (
    <div style={{ width: 300 }} className="profile">
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
        className="description"
      >
        <img
          style={{ borderRadius: '50%', width: 150 }}
          src={avatar}
          alt="User avatar"
          className="avatar"
        />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul
        style={{ display: 'flex', listStyle: 'none', padding: 0 }}
        className="stats"
      >
        <li
          style={{
            display: 'flex',
            flexDirection: 'column',
            height: 50,
            width: '33%',
            backgroundColor: 'gray',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
            border: '1px solid black',
          }}
        >
          <span className="label">Followers</span>
          <span className="quantity">{followers}</span>
        </li>
        <li
          style={{
            display: 'flex',
            flexDirection: 'column',
            height: 50,
            width: '33%',
            backgroundColor: 'gray',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
            border: '1px solid black',
          }}
        >
          <span className="label">Views</span>
          <span className="quantity">{views}</span>
        </li>
        <li
          style={{
            display: 'flex',
            flexDirection: 'column',
            height: 50,
            width: '33%',
            backgroundColor: 'gray',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
            border: '1px solid black',
          }}
        >
          <span className="label">Likes</span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
};
