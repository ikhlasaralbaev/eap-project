import { ArrowRightWhiteIcon } from "assets/images";
import parse from "html-react-parser";
import { IHomeLinkItem } from "mocks/banner.mocks";
import { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./home-link-card.module.scss";

interface Props extends IHomeLinkItem {}

const HomeLinkCard: FC<Props> = ({ title, image }) => {
  return (
    <div className={styles.homeLinkCard}>
      <h1>{parse(title)}</h1>
      <Link to={"/"}>
        Перейти
        <img src={ArrowRightWhiteIcon} alt="arrow right white icon" />
      </Link>

      <img
        className={styles.homeLinkBg}
        src={image}
        alt="product genesis photo: Моторные масла Genesis"
      />
    </div>
  );
};

export default HomeLinkCard;
