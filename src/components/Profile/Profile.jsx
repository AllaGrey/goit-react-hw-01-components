// import styled from 'styled-components';
import {
  ProfileStyles,
  Description,
  Avatar,
  UserInfoName,
  UserInfoTag,
  UserInfoLocation,
} from './Profile.styled';
import { Stats } from './Stats';
import PropTypes from 'prop-types';

export const Profile = ({
  user: { avatar, username, tag, location, stats },
}) => {
  return (
    <ProfileStyles>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <UserInfoName>{username}</UserInfoName>
        <UserInfoTag>@{tag}</UserInfoTag>
        <UserInfoLocation>{location}</UserInfoLocation>
      </Description>
      <Stats stats={stats} />
    </ProfileStyles>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape().isRequired,
  }).isRequired,
};
