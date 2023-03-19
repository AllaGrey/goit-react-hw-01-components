import { ItemStyle, Label, Percentage } from './Item.styled';
import PropTypes from 'prop-types';

export const Item = ({ label, percentage }) => {
  return (
    <ItemStyle label={label}>
      <Label>{label}</Label>
      <Percentage>{percentage}%</Percentage>
    </ItemStyle>
  );
};

Item.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
