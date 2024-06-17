import CarChooserTab from "components/common/car-chooser-tab/car-chooser-tab";
import { FC } from "react";
import styles from "./home-car-chooser.module.scss";

const HomeCarChooser: FC = () => {
  return (
    <div className={styles.homeCarChooser}>
      <div className={styles.homeCarChooserTitle}>
        <h2>Выберите автомобиль</h2>
        <p>
          Выберите все необходимые параметры, для добавления автомобиля в гараж{" "}
        </p>
      </div>

      <CarChooserTab />
    </div>
  );
};

export default HomeCarChooser;
