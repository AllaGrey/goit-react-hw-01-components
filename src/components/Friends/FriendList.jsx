import { List } from './FriendList.styled';
import { Item } from './Item';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <List>
      <Item friends={friends} />
    </List>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
