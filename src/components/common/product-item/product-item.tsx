import { CartAddIcon } from "assets/images";
import { useAppDispatch, useAppSelector } from "hooks/use-store";
import { IProduct } from "mocks/products.mocks";
import { FC } from "react";
import { BsCartCheck } from "react-icons/bs";
import { addProductToBasket } from "store/products/products.slice";
import Flex from "../flex/flex";
import StarRating from "../star-rate/star-rate";
import styles from "./product-item.module.scss";

interface Props extends IProduct {}

const ProductItem: FC<Props> = (product) => {
  const { basket } = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();
  const { title, image, rate, voites, oldPrice, currentPrice, articul, id } =
    product;

  const basketAdder = () => dispatch(addProductToBasket(product));

  return (
    <div className={styles.productItem}>
      <img
        className={styles.productImage}
        src={image}
        alt={`products photo: ${title}`}
      />

      <div>
        <Flex className="mb-[10px] mt-[15px]" justify="between" align="center">
          <span className="text-[14px] text-grayText">
            Артикул: <span className="text-text">{articul}</span>
          </span>
          <Flex align="center" className="gap-[5px]">
            <StarRating rating={rate} /> {rate} ({voites})
          </Flex>
        </Flex>

        <h2 className="mb-[3px] mt-[10px] text-[16px] text-text">{title}</h2>

        <Flex align="end" justify="between">
          <div>
            <span className="text-[16px] text-grayText line-through">
              {oldPrice.toLocaleString()} сум
            </span>
            <h2 className="text-[26px] text-text">
              {currentPrice.toLocaleString()} сум
            </h2>
          </div>

          {basket.find((item) => item.id === id) ? (
            <button className="flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-[8px] border-2 border-primary text-[24px] text-primary">
              <BsCartCheck />
            </button>
          ) : (
            <button onClick={basketAdder}>
              <img src={CartAddIcon} alt="cart add icon" />
            </button>
          )}
        </Flex>
      </div>
    </div>
  );
};

export default ProductItem;
