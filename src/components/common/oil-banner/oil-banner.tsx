import { OilBannerImage } from "assets/images";
import styles from "./oil-banner.module.scss";

const OilBanner = () => {
  return (
    <div className={styles.oilBanner}>
      <h1>Автомасла №1 от официальных дилеров</h1>

      <img
        src={OilBannerImage}
        alt="oil banner, Автомасла №1 от официальных дилеров"
      />
    </div>
  );
};

export default OilBanner;
