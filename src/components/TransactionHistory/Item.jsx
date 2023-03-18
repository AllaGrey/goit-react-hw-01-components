import { TransactionItem } from './Item.styled';
import PropTypes from 'prop-types';

export const Item = ({ type, amount, currency }) => {
  return (
    <TransactionItem>
      <tr>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    </TransactionItem>
  );
};

Item.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
