import { StatsContainer, StatsLabel, StatsQuantity } from './Stats.styled';
import PropTypes from 'prop-types';

export const Stats = ({ stats: { followers, likes, views } }) => {
  return (
    <StatsContainer>
      <li>
        <StatsLabel>Followers</StatsLabel>
        <StatsQuantity>{followers}</StatsQuantity>
      </li>
      <li>
        <StatsLabel>Views</StatsLabel>
        <StatsQuantity>{views}</StatsQuantity>
      </li>
      <li>
        <StatsLabel>Likes</StatsLabel>
        <StatsQuantity>{likes}</StatsQuantity>
      </li>
    </StatsContainer>
  );
};

Stats.propTypes = {
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
  }).isRequired,
};
