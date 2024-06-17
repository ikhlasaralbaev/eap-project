import { SliderControl } from "components/common";
import ProductItem from "components/common/product-item/product-item";
import { products } from "mocks/products.mocks";
import { FC, useRef } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface Props {
  title: string;
}

const HomeProductSlider: FC<Props> = ({ title }) => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <div className="relative mb-[60px]">
      <h1 className="mb-[30px] text-[26px] text-text">{title}</h1>

      <Swiper
        spaceBetween={"20px"}
        slidesPerView={4}
        modules={[Navigation]}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          600: {
            slidesPerView: 2,
          },
          900: {
            slidesPerView: 3,
          },
          1220: {
            slidesPerView: 4,
          },
        }}
      >
        {products.map((item, index) => (
          <SwiperSlide key={index}>
            <ProductItem {...item} key={item.image} />
          </SwiperSlide>
        ))}
      </Swiper>

      <SliderControl position="left" ref={navigationPrevRef} />
      <SliderControl position="right" ref={navigationNextRef} />
    </div>
  );
};

export default HomeProductSlider;
