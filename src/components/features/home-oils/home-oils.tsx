import { ChevronRightIcon } from "assets/images";
import { Flex, OilBanner } from "components/common";
import HomeLinkCard from "components/common/home-link-card/home-link-card";
import ProductItem from "components/common/product-item/product-item";
import { homeLinkItems } from "mocks/banner.mocks";
import { products } from "mocks/products.mocks";
import { Link } from "react-router-dom";
import styles from "./home-oils.module.scss";

const HomeOils = () => {
  return (
    <div>
      <Flex className="mb-[20px]" justify="between" align="center">
        <h2 className="text-[26px] font-[600]">Автомасла</h2>

        <Link
          className="rounded-card bg-grayBg px-[20px] py-[10px] text-primary"
          to={"/"}
        >
          <Flex className="gap-[10px]">
            Все автомасла
            <img src={ChevronRightIcon} alt="chevron right" />
          </Flex>
        </Link>
      </Flex>

      <div className={styles.homeOilRow}>
        <OilBanner />
        {products.slice(0, 3).map((item, index) => (
          <ProductItem {...item} key={index} />
        ))}
      </div>

      <div className={styles.homeLinksRow}>
        {homeLinkItems.map((item) => (
          <HomeLinkCard {...item} key={item.title} />
        ))}
      </div>
    </div>
  );
};

export default HomeOils;
