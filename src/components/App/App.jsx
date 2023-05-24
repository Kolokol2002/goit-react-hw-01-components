import { Profile } from '../Profile/Profile';
import { Statistics } from '../Statistics/Statistics';
import { FriendList } from '../FriendList/FriendList';
import { TransactionHistory } from '../TransactionHistory/TransactionHistory';

import user from '../../json/user.json';
import data from '../../json/data.json';
import friends from '../../json/friends.json';
import transactions from '../../json/transactions.json';

import css from './App.module.css';

export const App = () => {
  return (
    <div className={css.main}>
      <Profile user={user} boxShadow={css.general} />
      <Statistics data={data} boxShadow={css.general} />
      <FriendList friends={friends} boxShadow={css.general} />
      <TransactionHistory transactions={transactions} boxShadow={css.general} />
    </div>
  );
};
