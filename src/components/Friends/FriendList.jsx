import { List } from './FriendList.styled';
import { Item } from './Item';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <Item key={id} isOnline={isOnline} avatar={avatar} name={name} />
      ))}
    </List>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
