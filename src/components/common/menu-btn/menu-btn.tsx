import { FC } from "react";
import { CgMenuRight } from "react-icons/cg";
import styles from "./menu-btn.module.scss";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {}

const MenuBtn: FC<Props> = () => {
  return (
    <button className={styles.menuBtn}>
      <CgMenuRight />
    </button>
  );
};

export default MenuBtn;
