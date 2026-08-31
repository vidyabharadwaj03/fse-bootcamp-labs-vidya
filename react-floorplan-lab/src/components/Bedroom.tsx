import styles from "./Bedroom.module.css";

type BedroomProps = {
  bedNum: number;
};

function Bedroom({ bedNum }: BedroomProps) {
  return <div className={styles.bedroom}>Bedroom {bedNum}</div>;
}

export default Bedroom;
