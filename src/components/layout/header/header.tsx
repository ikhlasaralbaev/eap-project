import { LogoImage } from "assets/images";
import {
  CartBtn,
  CatalogBtn,
  Container,
  Flex,
  HeaderCategories,
  Location,
  LoginRegisterLink,
  MenuBtn,
  PhoneNumber,
  SearchField,
} from "components/common";
import { FC } from "react";
import styles from "./header.module.scss";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerTop}>
        <Container className={styles.headerContainer}>
          <>
            <img
              className={styles.headerLogo}
              src={LogoImage}
              alt="EAP LOGO"
              width={95}
            />

            <Flex className="gap-[20px]" align="center">
              <SearchField />
              <Location />
            </Flex>

            <Flex className="gap-[40px]" align="center">
              <PhoneNumber className="sm:hidden xl:flex" />
              <LoginRegisterLink />
              <MenuBtn />
            </Flex>
          </>
        </Container>
      </div>
      <div className={styles.headerBottom}>
        <Container className={styles.headerContainer}>
          <>
            <CatalogBtn />
            <HeaderCategories />

            <Flex className="gap-[20px]">
              <PhoneNumber className="sm:hidden md:flex xl:hidden" />
              <CartBtn />
            </Flex>
          </>
        </Container>
      </div>
    </header>
  );
};

export default Header;
