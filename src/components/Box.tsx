import styles from '../App.module.css';

type BoxProps = {
  children: React.ReactNode;
};

function Box({ children }: BoxProps) {
  return <section className={styles.box}>{children}</section>;
}

export default Box;
