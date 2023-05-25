import clsx from 'clsx';
import css from './Statistics.module.css';

export const Statistics = ({ data, main }) => {
  return (
    <section className={clsx(css.statistics, main)}>
      <h2 className={css.title}>Upload stats</h2>

      <ul className={css.stat_list}>
        {data.map(({ id, label, percentage }) => (
          <li key={id} className={clsx(css.item, css[id])}>
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
