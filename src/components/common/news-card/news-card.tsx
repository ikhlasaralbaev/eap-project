import { INews } from "mocks/home.mocks";
import { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./news-card.module.scss";

interface Props extends INews {}

const NewsCard: FC<Props> = ({ image, title, date }) => {
  return (
    <div className={styles.newsCard}>
      <img
        className={styles.newsImage}
        src={image}
        alt={`news image: ${title}`}
      />
      <div className={styles.newsContent}>
        <span>{date}</span>
        <h1>
          <Link to={"/"}>{title}</Link>
        </h1>
      </div>
    </div>
  );
};

export default NewsCard;
