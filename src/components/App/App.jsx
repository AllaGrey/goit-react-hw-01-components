import { Profile } from '../Profile/Profile';
import { Statistics } from '../Statistics/Statistics';
import { FriendList } from '../Friends/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import user from '../Profile/user.json';
import data from '../Statistics/data.json';
import friends from '../Friends/friends.json';
import transactions from '../TransactionHistory/transactions.json';

// import styled from 'styled-components';
import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Profile user={user} />
      <Statistics data={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </Container>
  );
};
