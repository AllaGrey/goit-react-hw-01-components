import { Table, Thead } from './TransactionHistory.styled';
import { Item } from './Item';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ transactions }) => {
  return (
    <Table>
      <Thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </Thead>
      {transactions.map(({ id, type, amount, currency }) => (
        <Item key={id} type={type} amount={amount} currency={currency} />
      ))}
    </Table>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.array.isRequired,
};
