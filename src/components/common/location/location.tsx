import { MarkerIcon } from "assets/images";
import styles from "./location.module.scss";

const Location = () => {
  return (
    <div className={styles.location}>
      <img src={MarkerIcon} alt="location marker icon" />
      Ташкент
    </div>
  );
};

export default Location;
