import clsx from 'clsx';
import css from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ transactions, main }) => {
  return (
    <table className={clsx(css.transaction_history, main)}>
      <thead className={css.thead}>
        <tr className={css.tr}>
          <th className={css.th}>Type</th>
          <th className={css.th}>Amount</th>
          <th className={css.th}>Currency</th>
        </tr>
      </thead>

      <tbody className={css.tbody}>
        {transactions.map(({ id, type, amount, currency }, idx) => (
          <tr
            className={clsx(css.tr, css[(idx + 1) % 2 === 0 ? 'even' : 'odd'])}
            key={id}
          >
            <td className={css.td}>{type}</td>
            <td className={css.td}>{amount}</td>
            <td className={css.td}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.array,
  main: PropTypes.string,
};
