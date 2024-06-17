import classNames from "classnames";
import { headerCategories } from "mocks/header.mocks";
import { useState } from "react";
import styles from "./header-categories.module.scss";

const HeaderCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    headerCategories[2],
  );

  const selectCategory = (category: string) => setSelectedCategory(category);

  return (
    <div className={styles.headerCategories} align="center">
      {headerCategories.map((item) => (
        <button
          className={classNames(
            styles.headerCategoryItem,
            selectedCategory === item && styles.activeCategory,
          )}
          key={item}
          onClick={() => selectCategory(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default HeaderCategories;
