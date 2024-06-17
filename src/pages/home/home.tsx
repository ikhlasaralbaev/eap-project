import { Container } from "components/common";
import { HomeBanner, HomeCarChooser } from "components/features";
import { FC } from "react";
import styles from "./home.module.scss";

const Home: FC = () => {
  return (
    <div className={styles.home}>
      <Container>
        <>
          <HomeCarChooser />
          <HomeBanner />
        </>
      </Container>
    </div>
  );
};

export default Home;
