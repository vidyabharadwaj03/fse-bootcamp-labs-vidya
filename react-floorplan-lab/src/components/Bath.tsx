import styles from "./Bath.module.css";

type BathProps = {
  size: string;
};

function Bath({ size }: BathProps) {
  return <div className={styles.bath}>{size} Bath</div>;
}

export default Bath;
