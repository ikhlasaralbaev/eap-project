import parse from "html-react-parser";
import { IBannerItem } from "mocks/banner.mocks";
import { FC } from "react";
import styles from "../home-banner.module.scss";

interface Props extends IBannerItem {}

const BannerItem: FC<Props> = ({ photo, title, description }) => {
  return (
    <div className={styles.bannerItem}>
      <img
        className={styles.bannerImage}
        src={photo}
        alt="Оригинальные автомасла cо скидкой  15% ₽"
      />
      <div className={styles.bannerContent}>
        <h1>{parse(title)}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default BannerItem;
