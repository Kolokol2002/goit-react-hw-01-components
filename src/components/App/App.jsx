import { Profile } from '../Profile/Profile';
import { Statistics } from '../Statistics/Statistics';
import { FriendList } from '../FriendList/FriendList';
import { TransactionHistory } from '../TransactionHistory/TransactionHistory';

import dataUser from '../../json/user.json';
import dataStats from '../../json/data.json';
import dataFriends from '../../json/friends.json';
import dataTransactions from '../../json/transactions.json';

import css from './App.module.css';

export const App = () => {
  return (
    <div className={css.main}>
      <Profile user={dataUser} />
      <Statistics stats={dataStats} title={'Upload stats'} />
      <FriendList friends={dataFriends} />
      <TransactionHistory items={dataTransactions} />
    </div>
  );
};
