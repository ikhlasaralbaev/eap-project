import SliderControl from "components/common/slider-control/slider-control";
import useSwiperRef from "hooks/use-swiper";
import { bannerItems } from "mocks/banner.mocks";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import BannerItem from "./banner-item/banner-item";
import styles from "./home-banner.module.scss";

const HomeBanner = () => {
  const [nextEl, nextElRef] = useSwiperRef();
  const [prevEl, prevElRef] = useSwiperRef();

  return (
    <div className={styles.homeBannerWrapper}>
      <Swiper
        onInit={(swiper: any) => {
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        spaceBetween={50}
        slidesPerView={1}
        modules={[Navigation]}
        navigation={{
          prevEl: prevEl?.current,
          nextEl: nextEl?.current,
        }}
      >
        {bannerItems.map((item) => (
          <SwiperSlide>
            <BannerItem key={item.title} {...item} />
          </SwiperSlide>
        ))}
      </Swiper>

      <SliderControl position="left" ref={prevElRef} />
      <SliderControl position="right" ref={nextElRef} />
    </div>
  );
};

export default HomeBanner;
