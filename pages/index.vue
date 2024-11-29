<template>
  <!-- bannerMainBanner -->
  <bannerMainBanner />
  <!--// bannerMainBanner -->
  <!-- kt-egov-merits -->
  <section class="kt-egov-merits">
    <div class="container">
      <h1 class="kt-red-text">
        <small>풍부한 관련 사업 경험과 전국 서비스 제공 능력을 통해</small><br />
        최상의 국가정보통신서비스를 구축해 드립니다.
      </h1>
      <ul>
        <li v-for="(service, index) in services" :key="index">
          <nuxt-link :to="service.link">
            <img :src="service.imgSrc" :alt="service.alt" />
            <dl>
              <dt>{{ service.title }}</dt>
              <dd v-html="service.description"></dd>
            </dl>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </section>
  <!--// kt-egov-merits -->
  <!-- bannerBottomBanner -->
  <bannerBottomBanner />
  <!--// bannerBottomBanner -->
  <div class="help-banner">
    <div class="container">
      <div class="row">
        <div class="col s12 m8">
          <div class="title">
            <img src="@/assets/images/speach_bull.png" alt="말풍선" />
            <h3>
              도움이 필요하세요?
              <small>상담 및 전화 서비스 신청 가능합니다.</small>
            </h3>
          </div>
        </div>
        <div class="box">
          <ul>
            <li><nuxt-link to="/support/faq" class="box">FAQ</nuxt-link></li>
            <li><nuxt-link to="/guide/counsel">서비스신청</nuxt-link></li>
          </ul>
        </div>
        <!-- <div class="col s12 m2 center box">
			2018.06.29 긴급반영 상담번호 수정
				<a href="javascript:">1588-0114 (ARS 2>2)</a>
			</div> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const services = ref([
  {
    link: "/service/ktservice",
    imgSrc: "/images/service_01.png",
    alt: "전용회선서비스",
    title: "전용회선서비스",
    description: "두 지점간 완벽한 보안성능을<br />갖춘 24시간 단독회선 서비스"
  },
  {
    link: "/service/ktservice",
    imgSrc: "/images/service_02.png",
    alt: "인터넷서비스",
    title: "인터넷서비스",
    description: "다양한 속도로 안정적인 네트워크 접속을 제공하는 인터넷 전용회선 서비스"
  },
  {
    link: "/service/ktservice",
    imgSrc: "/images/service_03.png",
    alt: "인터넷전화서비스",
    title: "인터넷전화서비스",
    description: "인터넷 전화와 직원간 무료통화가 가능한 LTE기반 mVoIP서비스"
  },
  {
    link: "/service/ktservice",
    imgSrc: "/images/service_05.png",
    alt: "무선서비스",
    title: "무선서비스",
    description: "LTE기반의 스마트 단말 행정서비스와 정보통신기술 기반의 IoT서비스"
  },
  {
    link: "/service/ktservice",
    imgSrc: "/images/service_06.png",
    alt: "CCTV서비스",
    title: "CCTV서비스",
    description: "CCTV단말로부터 관제센터까지 영상 전달을 제공하는 시내 전용회선서비스"
  }
]);
</script>

<style lang="scss" scoped>
.kt-egov-merits {
  padding: 40px 0;
  background: #f5f5f5;
  text-align: center;

  .kt-red-text {
    color: #e51c23;
    font-size: 2.125rem;
    line-height: 2.5rem;
    font-weight: normal;
    font-family: "NotoSansB";
    small {
      color: #353a3f;
      font-size: 1.5rem;
    }
  }

  ul {
    margin-top: 40px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    li {
      width: 185px;
      a {
          color: inherit;
          dl {
            dt {
              font-size: 17px;
              font-weight: bold;
              margin: 10px 0;
            }
          }
      }
    }
  }
}

.help-banner {
  background: #a3aeb9;
  padding: 15px 0 1px;
  margin-bottom: 0;
  color: #fff;
  .title {
    padding-bottom: 0;
    h3 {
      padding-left: 0.5rem;
      float: left;
      display: inline-block;
      font-size: 1.6rem;
      line-height: 2rem;
      font-weight: normal;
      vertical-align: top;
      margin: 0;
      color: #fff;
    }
    small {
      display: block;
      font-size: 1rem;
    }
    img {
      float: left;
    }
  }

  .box {
    display: flex;
    flex-direction: row-reverse;
    ul {
      display: flex;
      flex-direction: row;
      li {
        width: 185px;
        text-align: center;
        display: inline-block;
        a {
          display: block;
          font-size: 1.2rem;
          border: 1px solid #fff;
          color: #fff;
          padding: 15px 0;
        }
      }
    }
  }
}

@include mobile {
.kt-egov-merits {

  .kt-red-text {

    small {

    }
  }
  
  ul {
    flex-direction: column;
    li {
      width: 100%;
      padding-bottom: 20px;
      a {
        display: flex;
        text-align: left;
        img {
          width: 100px;
          margin-right: 20px;
        }
      }
      
    }
  }
}

.help-banner {
  .box {
    display: block;
    ul {
      display: block;
      text-align: center;
      margin-top: 20;
      li {
        margin-top: 20px;
      }
    }
  }
}
}
</style>
