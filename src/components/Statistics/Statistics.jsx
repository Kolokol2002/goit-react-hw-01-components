import css from './Statistics.module.css';

export const Statistics = ({ data, boxShadow }) => {
  return (
    <section className={css.statistics + ' ' + boxShadow}>
      <h2 className={css.title}>Upload stats</h2>

      <ul className={css.stat_list}>
        {data.map(({ id, label, percentage }) => (
          <li key={id} className={css.item}>
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
