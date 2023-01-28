import Swiper, { Navigation, Pagination, A11y } from "swiper";

import { screens } from "tailwindcss/defaultTheme";

import "@vendors/swiper/swiper.min.css";
import "@vendors/swiper/modules/navigation/navigation.min.css";
import "@vendors/swiper/modules/pagination/pagination.min.css";
import "@vendors/swiper/modules/a11y/a11y.min.css";
// custom
import "./styles.css";

const sizes = Object.values(screens).map((screen: string) => screen.replace("px", ""));
const [sm, md, lg] = sizes;

new Swiper(".swiper", {
  modules: [Navigation, Pagination, A11y],

  spaceBetween: 24,
  slidesPerView: 1,

  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    [sm]: { slidesPerView: 1 },
    [md]: { slidesPerView: 2 },
    [lg]: { slidesPerView: 3 },
  },
});
