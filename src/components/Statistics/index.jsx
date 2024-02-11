import styles from "./Statistics.module.css";

export const Statistics = ({ title, stats }) => {
  return (
    <section class={styles.statistics}>
      {title && <h2 class={styles.title}>{title}</h2>}

      <ul class={styles.statList}>
        {stats.map((item) => (
          <li class={styles.item} key={item.id}>
            <span class={styles.label}>{item.label}</span>
            <span class={styles.percentage}>{item.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
