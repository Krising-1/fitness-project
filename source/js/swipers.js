import Swiper from './vendor/swiper-bundle/swiper.min.mjs';
import Navigation from './vendor/swiper-bundle/modules/navigation.min.mjs';
import Pagination from './vendor/swiper-bundle/modules/pagination.min.mjs';
import './vendor/swiper-bundle/swiper.css';
import './vendor/swiper-bundle/modules/navigation.css';

const initJuriSwiper = () => {
  new Swiper('.swiper--juri', {

    modules: [Navigation, Pagination],

    width: 260,
    loop: true,
    speed: 500,
    spaceBetween: 40,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      768: {
        width: 560,
        slidesPerView: 2,
      },

      1366: {
        width: 1160,
        slidesPerView: 4,
        allowTouchMove: false,
      },
    }
  });
};

export { initJuriSwiper };
