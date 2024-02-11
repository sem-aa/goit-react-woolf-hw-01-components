import styles from "./Container.module.css";
export const Container = ({ children }) => {
  return <div class={styles.container}>{children}</div>;
};
