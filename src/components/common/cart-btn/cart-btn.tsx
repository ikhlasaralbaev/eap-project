import { CartIcon } from "assets/images";
import { useAppSelector } from "hooks/use-store";
import styles from "./cart-btn.module.scss";

const CartBtn = () => {
  const { basket } = useAppSelector((state) => state.products);

  return (
    <button className={styles.cartBtn}>
      <img src={CartIcon} alt="cart icon, shopping cart" />
      <span className={styles.cartBtnText}>Корзина</span>
      <span className={styles.cartBtnBadge}>{basket.length}</span>
    </button>
  );
};

export default CartBtn;
