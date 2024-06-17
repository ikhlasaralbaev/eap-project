import SliderControl from "components/common/slider-control/slider-control";
import { bannerItems } from "mocks/banner.mocks";
import { useRef } from "react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import BannerItem from "./banner-item/banner-item";
import styles from "./home-banner.module.scss";

const HomeBanner = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <div className={styles.homeBannerWrapper}>
      <Swiper
        onInit={(swiper: any) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        spaceBetween={50}
        slidesPerView={1}
        modules={[Navigation]}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
      >
        {bannerItems.map((item) => (
          <SwiperSlide key={item.title}>
            <BannerItem key={item.title} {...item} />
          </SwiperSlide>
        ))}
      </Swiper>

      <SliderControl position="left" ref={navigationPrevRef} />
      <SliderControl position="right" ref={navigationNextRef} />
    </div>
  );
};

export default HomeBanner;
