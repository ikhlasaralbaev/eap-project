import { Container } from "components/common";
import {
  HomeBanner,
  HomeCarChooser,
  HomeCategories,
  HomeOils,
} from "components/features";
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
          <HomeOils />
        </>
      </Container>
    </div>
  );
};

export default Home;
