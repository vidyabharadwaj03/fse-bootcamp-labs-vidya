import styles from "./FloorPlan.module.css";
import Bedroom from "./Bedroom";
import Bath from "./Bath";
import LivingRoom from "./LivingRoom";
import Kitchen from "./Kitchen";

function FloorPlan() {
  return (
    <div className={styles.floorplan}>
      <div className={styles.bed1}>
        <Bedroom bedNum={1} />
      </div>
      <div className={styles.living}>
        <LivingRoom />
      </div>
      <div className={styles.kitchenArea}>
        <Kitchen />
      </div>
      <div className={styles.bed2}>
        <Bedroom bedNum={2} />
      </div>
      <div className={styles.fullbath1}>
        <Bath size="Full" />
      </div>
      <div className={styles.halfbath}>
        <Bath size="Half" />
      </div>
      <div className={styles.fullbath2}>
        <Bath size="Full" />
      </div>
    </div>
  );
}

export default FloorPlan;
