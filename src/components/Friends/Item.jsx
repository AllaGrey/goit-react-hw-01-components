import {
  ItemStyled,
  Status,
  Avatar,
  Name,
  Online,
  Offline,
} from './Item.styled';
import PropTypes from 'prop-types';

export const Item = ({ friends }) => {
  return friends.map(({ id, isOnline, avatar, name }) => (
    <ItemStyled key={id}>
      <Status>{isOnline ? <Online /> : <Offline />}</Status>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </ItemStyled>
  ));
};

Item.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
