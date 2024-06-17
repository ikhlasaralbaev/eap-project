import { IHomeCategory } from "mocks/home.mocks";
import { FC } from "react";
import styles from "./home-category-item.module.scss";

interface Props extends IHomeCategory {}

const HomeCategoryItem: FC<Props> = ({ icon, title, productCount }) => {
  return (
    <div className={styles.homeCategoryItem}>
      <img src={icon} alt={`Icon: ${title}, category icon.`} />
      <div>
        <h2 className="text-[20px] font-medium">{title}</h2>
        <span className="text-light">{productCount} товаров</span>
      </div>
    </div>
  );
};

export default HomeCategoryItem;
