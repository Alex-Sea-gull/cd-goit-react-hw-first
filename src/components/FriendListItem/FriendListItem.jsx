import s from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <img className={s.friendAvatar} src={avatar} alt={name} width='45' />
      <p className={s.friendText}>{name}</p>
      <p className={isOnline ? s.green : s.red}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};

export default FriendListItem;
