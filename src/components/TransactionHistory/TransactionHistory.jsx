import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ transactions, boxShadow }) => {
  return (
    <table className={css.transaction_history + ' ' + boxShadow}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td>ddddd{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
