import Swiper from 'swiper';
import {Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

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
