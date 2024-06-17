import NewsCard from "components/common/news-card/news-card";
import { newsData } from "mocks/home.mocks";
import styles from "./home-news.module.scss";

const HomeNews = () => {
  return (
    <div className={styles.homeNews}>
      <h1 className="mb-[30px] text-[26px] text-text">Наши новости</h1>

      <div className="grid gap-4 sm:h-[100vh] sm:grid-cols-1 md:h-[570px] md:grid-cols-2 md:grid-rows-2 lg:grid-cols-8 lg:grid-rows-6">
        <div className="sm:col-span-1 md:row-span-1 lg:col-span-4 lg:row-span-6">
          <NewsCard {...newsData[0]} />
        </div>
        <div className="col-start-5 sm:col-span-1 md:row-span-1 lg:col-span-2 lg:row-span-3">
          <NewsCard {...newsData[1]} />
        </div>
        <div className="col-start-7 sm:col-span-1 md:row-span-1 lg:col-span-2 lg:row-span-3">
          <NewsCard {...newsData[2]} />
        </div>
        <div className="bg col-start-5 row-start-4 sm:col-span-1 md:row-span-1 lg:col-span-4 lg:row-span-3">
          <NewsCard {...newsData[3]} />
        </div>
      </div>
    </div>
  );
};

export default HomeNews;
