<template>
  <div class="service-info">
    <ul>
      <li class="list service-3">
        <div>
          <div class="image">
            <div class="center-align">
              <img
                src="@/assets/images/service_03.png"
                alt="인터넷 전화 서비스"
                class="responsive-img"
              />
            </div>
          </div>
          <div class="text">
            <h2>C그룹[인터넷전화서비스]</h2>
            <h4>설치와 사용이 편리한 인터넷 전화 서비스</h4>
            <p>
              일반전화 대비 저렴한 요금으로 다양한 부가 기능 서비스까지 이용할
              수 있는 서비스 환경을 제공합니다. 인터넷전화 서비스 그룹은
              인터넷전화 및 모바일행정전화 서비스로 구성됩니다.
            </p>
            <nuxt-link to="/service/soip?tab=infra" class="btn">인터넷 전화 인프라</nuxt-link>
          </div>
        </div>
      </li>
    </ul>
  </div>
  <h3>서비스 목록</h3>
  <div class="service-list">
    <ul>
      <li class="list service-3">
        <nuxt-link to="/service/soip?tab=service">
          <div class="image">
            <img
              src="@/assets/images/addService_img8.png"
              alt="인터넷 전화 서비스"
              class="responsive-img"
            />
          </div>
          <div class="text">
            <h4>인터넷전화 서비스</h4>
            <p>기본 서비스와 부가서비스로 구성</p>
          </div>
        </nuxt-link>
      </li>
      <li class="list service-3">
        <nuxt-link to="/service/soip?tab=mobile_gov">
          <div class="image">
            <img
              src="@/assets/images/addService_img8.png"
              alt="모바일행정전화 서비스"
              class="responsive-img"
            />
          </div>
          <div class="text">
            <h4>모바일행정전화 서비스</h4>
            <p>LTE기반 mVoIP서비스</p>
          </div>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts"></script>

<style></style>
