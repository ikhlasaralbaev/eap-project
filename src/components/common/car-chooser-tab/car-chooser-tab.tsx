import { carChooserData } from "mocks/car.mocks";
import { useState } from "react";
import styles from "./car-chooser-tab.module.scss";
import TabItem from "./tab-item/tab-item";

const CarChooserTab = () => {
  const [selectedTab, setSelectedTab] = useState(1);

  return (
    <div className={styles.carChooserTab}>
      <div className={styles.carChooserTabList}>
        {carChooserData.map((item, index) => (
          <TabItem
            onChange={setSelectedTab}
            isActive={item.id === selectedTab}
            key={index}
            {...item}
          />
        ))}
      </div>

      <div className={styles.carChooserTabContent}>
        {carChooserData
          .find((item) => item.id === selectedTab)
          ?.data.map((item, index) => (
            <button className={styles.tabContentItem} key={index}>
              {item.item}
            </button>
          ))}
      </div>
    </div>
  );
};

export default CarChooserTab;
