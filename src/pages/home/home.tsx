import { Container } from "components/common";
import { HomeBanner, HomeCarChooser } from "components/features";
import HomeCategories from "components/features/home-categories/home-categories";
import { FC } from "react";
import styles from "./home.module.scss";

const Home: FC = () => {
  return (
    <div className={styles.home}>
      <Container>
        <>
          <HomeCarChooser />
          <HomeBanner />
          <HomeCategories />
        </>
      </Container>
    </div>
  );
};

export default Home;
