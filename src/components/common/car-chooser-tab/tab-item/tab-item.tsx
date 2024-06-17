import { ActiveArrowDown, ArrowDown } from "assets/images";
import classNames from "classnames";
import { ITabItemProps } from "mocks/car.mocks";
import { FC } from "react";
import styles from "../car-chooser-tab.module.scss";

interface Props extends ITabItemProps {
  onChange: (id: number) => void;
  isActive: boolean;
}

const TabItem: FC<Props> = ({ id, tabItem, onChange, isActive }) => {
  return (
    <button
      className={classNames(styles.tabItem, isActive && styles.active)}
      onClick={() => onChange(id)}
    >
      {tabItem}
      {isActive ? (
        <img src={ActiveArrowDown} alt="arrow down, active arrow down" />
      ) : (
        <img src={ArrowDown} alt="arrow down, gray arrow down" />
      )}
    </button>
  );
};

export default TabItem;
