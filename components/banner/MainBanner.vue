<template>
  <Splide
    :options="{ rewind: true, autoplay: true }"
    aria-label="My Favorite Images"
    class="main-banner"
  >
    <SplideSlide>
      <img
        src="@/assets/images/banner/main_banner_bg_01.jpg"
        alt="1등 서비스를 고객님들께서 인정해 주셨습니다."
      />
      <img
        src="@/assets/images/banner/main_banner_bg_01_m.jpg"
        alt="1등 서비스를 고객님들께서 인정해 주셨습니다."
        class="mobile"
      />
    </SplideSlide>
    <SplideSlide>
      <img
        src="@/assets/images/banner/main_banner_bg_02.png"
        alt="전용회선과 위성통신을 통해 국가정보통신서비스 선두사업자로 도약하겠습니다."
      />
      <img
        src="@/assets/images/banner/main_banner_bg_02_m.png"
        alt="전용회선과 위성통신을 통해 국가정보통신서비스 선두사업자로 도약하겠습니다."
        class="mobile"
      />
    </SplideSlide>
  </Splide>
</template>

<script setup lang="ts">
import { Splide, SplideSlide } from "@splidejs/vue-splide";

// Default theme
import "@splidejs/vue-splide/css";
</script>

<style lang="scss" scoped>
.main-banner {
  padding: 0;
  position: relative;
  .splide__slide {
    min-height: 479px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      &.mobile {
        display: none;
      }
    }
  }
}

@include tablet {
  .splide {
    .splide__slide {
      img {
        display: none;
        &.mobile {
          object-fit: cover;
          display: block;
        }
      }
    }
  }
}

@include mobile {
  .splide {
    .splide__slide {
      min-height: 300px;
      img {
        display: none;
        &.mobile {
          object-fit: cover;
          display: block;
        }
      }
    }
  }
}
</style>