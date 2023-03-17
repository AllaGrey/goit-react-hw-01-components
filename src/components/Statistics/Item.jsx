import { ItemStyle, Label, Percentage } from './Item.styled';
import PropTypes from 'prop-types';

export const Item = ({ data }) => {
  return data.map(({ id, label, percentage }) => (
    <ItemStyle key={id}>
      <Label>{label}</Label>
      <Percentage>{percentage}%</Percentage>
    </ItemStyle>
  ));
};

Item.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
