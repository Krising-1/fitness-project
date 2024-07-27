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
      nextEl: '.swiper-button-next--juri',
      prevEl: '.swiper-button-prev--juri',
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

const initReviewsSwiper = () => {
  new Swiper('.swiper--reviews', {

    modules: [Navigation, Pagination],

    width: 240,
    speed: 800,
    spaceBetween: 40,

    navigation: {
      nextEl: '.swiper-button-next--reviews',
      prevEl: '.swiper-button-prev--reviews',
    },

    breakpoints: {
      768: {
        width: 500,
        slidesPerView: 1,
      },

      1366: {
        width: 560,
        slidesPerView: 1,
        allowTouchMove: false,
      },
    }
  });
};

export { initJuriSwiper, initReviewsSwiper };
