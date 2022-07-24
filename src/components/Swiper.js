// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const Carousel = () => {
  const imagesNumber = [1, 2, 3, 5, 6, 7, 8];

  const renderSlide = (number) => {
    return (
      <SwiperSlide className="swiper-slice"
      key={number}>
        <img
          className="carousel-pic"
          src={`./img/ss/ss${number}.jpg`}
          alt={`carousel-img-${number}`} />
      </SwiperSlide>
    )
  }

  return (
    <div className="swiper-ctn">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        autoplay
        loop={true}
        pagination={{ clickable: true }}
      >
        {imagesNumber.map((number) => {
          return renderSlide(number)
        })}
      </Swiper>

    </div>
  );
};

export default Carousel;