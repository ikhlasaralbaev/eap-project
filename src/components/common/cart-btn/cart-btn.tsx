import { CartIcon } from "assets/images";
import styles from "./cart-btn.module.scss";

const CartBtn = () => {
  return (
    <button className={styles.cartBtn}>
      <img src={CartIcon} alt="cart icon, shopping cart" />
      <span className={styles.cartBtnText}>Корзина</span>
      <span className={styles.cartBtnBadge}>5</span>
    </button>
  );
};

export default CartBtn;
