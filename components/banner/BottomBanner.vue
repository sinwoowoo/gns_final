<template>
  <Splide
    :options="{ rewind: true, autoplay: true }"
    aria-label="My Favorite Images"
    class="bottom-banner"
  >
    <SplideSlide>
      <img src="@/assets/images/banner/bottom_banner_bg_01.jpg" alt="" />
      <div class="banner-text">
        <dl>
          <dt>kt 서비스 특장점 1</dt>
          <dd>
            국내 통신사 사업자 중<br />
            <span>최대 통신인프라를 통한 <strong>전국 커버리지를 제공</strong>합니다.</span>
          </dd>
        </dl>
      </div>
    </SplideSlide>
    <SplideSlide>
      <img src="@/assets/images/banner/bottom_banner_bg_02.jpg" alt="" />
      <div class="banner-text">
        <dl>
          <dt>kt 서비스 특장점 2</dt>
          <dd>
            공중망과 분리된 별도의 자체망<br />
            <span>다양한 보안기능 제공으로 <strong>완벽한 보안성</strong>을 제공 합니다.</span>
          </dd>
        </dl>
      </div>
    </SplideSlide>
    <SplideSlide>
      <img src="@/assets/images/banner/bottom_banner_bg_03.jpg" alt="" />
      <div class="banner-text">
        <dl>
          <dt>kt 서비스 특장점 3</dt>
          <dd>
              전문 KT 전담인력으로<br />
              <span><strong>24시간 안정적으로 유지보수</strong>를 제공 합니다.</span>
          </dd>
        </dl>
      </div>
    </SplideSlide>
  </Splide>
</template>

<script setup lang="ts">
import { Splide, SplideSlide } from "@splidejs/vue-splide";

// Default theme
import "@splidejs/vue-splide/css";
</script>

<style lang="scss" scoped>
.bottom-banner {
  position: relative;
  text-align: center;
  .banner-text {
    position: absolute;
    text-align: left;
    top: 60px;
    width: 100%;
    dl {
      width: 1100px;
      height: 200px;
      padding-top: 40px;
      margin: auto;
      dt {
        font-size: 14px;
        color:#fff;
        background: #e51c23;
        display: inline-block;
        padding: 5px 15px;
        border-radius: 20px;
        margin-bottom: 15px;
      }
      dd {
        font-size: 24px;
        span {
          font-size: 28px;
        }
      }
    }
  }
}

@include tablet {
  .bottom-banner {
    background: #e6e1dd;
    img {
        display: none;
    }
    .banner-text {
      position: static;
      dl {
        width: 80%;
        padding-top: 40px;
        margin: auto;
        dt {
          font-size: 14px;
          color:#fff;
          background: #e51c23;
          display: inline-block;
          padding: 5px 15px;
          border-radius: 20px;
          margin-bottom: 15px;
        }
        dd {
          font-size: 24px;
          span {
            font-size: 28px;
          }
        }
      }
    }
  }
}
@include tablet {
  .bottom-banner .banner-text dl {
    height: auto;
    padding-bottom: 40px;
  }
}
</style>