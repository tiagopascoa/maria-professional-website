import styles from "./styles.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.page}>
      <div className={styles.pageLimits}>{children}</div>
    </div>
  );
};

export default Layout;
