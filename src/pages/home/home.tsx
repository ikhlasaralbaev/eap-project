import { Container } from "components/common";
import {
  HomeBanner,
  HomeCarChooser,
  HomeCategories,
  HomeOils,
  HomeProductSlider,
} from "components/features";
import HomeNews from "components/features/home-news/home-news";
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
          <HomeProductSlider title="Рекомендуем " />
          <HomeProductSlider title="Часто продаваемые " />
          <HomeNews />
        </>
      </Container>
    </div>
  );
};

export default Home;
