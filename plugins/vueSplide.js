import { Splide, SplideSlide  } from '@splidejs/vue-splide';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Splide);
  nuxtApp.vueApp.use(SplideSlide);
});