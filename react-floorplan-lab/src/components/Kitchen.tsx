import styles from "./Kitchen.module.css";
import Oven from "./Oven";
import Sink from "./Sink";

function Kitchen() {
  return (
    <div className={styles.kitchen}>
      <div className={styles.appliances}>
        <Oven />
        <Sink />
      </div>
      <div className={styles.label}>Kitchen</div>
    </div>
  );
}

export default Kitchen;
