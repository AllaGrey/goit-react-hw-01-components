import {
  ItemStyled,
  Status,
  Avatar,
  Name,
  Online,
  Offline,
} from './Item.styled';
import PropTypes from 'prop-types';

export const Item = ({ isOnline, avatar, name }) => {
  return (
    <ItemStyled>
      <Status>{isOnline ? <Online /> : <Offline />}</Status>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </ItemStyled>
  );
};

Item.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
