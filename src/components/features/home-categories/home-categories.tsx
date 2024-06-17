import HomeCategoryItem from "components/common/home-category-item/home-category-item";
import { homeCategories } from "mocks/home.mocks";
import styles from "./home-categories.module.scss";

const HomeCategories = () => {
  return (
    <div className={styles.homeCategories}>
      {homeCategories.map((item) => (
        <HomeCategoryItem {...item} key={item.title} />
      ))}
    </div>
  );
};

export default HomeCategories;
