<template>
  <div class="service-info">
    <ul>
      <li class="list service-2">
        <div>
          <div class="image">
            <div class="center-align">
              <img
                src="@/assets/images/service_02.png"
                alt="IP 서비스"
                class="responsive-img"
              />
            </div>
          </div>
          <div class="text">
            <h2>B그룹[인터넷서비스]</h2>
            <p>인터넷 서비스 그룹은 <b>인터넷 접속을 위한 서비스</b>로 구성</p>
            <p>
              민간기관 트래픽과 물리적·논리적으로 분리된 전용 인터넷망을 통한
              안정적인 인터넷 서비스
            </p>
            <p>
              <b>(단기이용)</b> 선거.행사.대회 등 일정 기간 인터넷을 사용일수
              기반으로 제공하는 서비스
            </p>
            <nuxt-link to="/service/internet?tab=infra" class="btn"
              >인터넷 인프라</nuxt-link
            >
          </div>
        </div>
      </li>
    </ul>
  </div>
  <h3>서비스 목록</h3>
  <div class="service-list">
    <ul>
      <li class="list service-2">
        <nuxt-link to="/service/internet?tab=service">
          <div class="image">
            <img
              src="@/assets/images/addService_img8.png"
              alt="인터넷 서비스"
              class="responsive-img"
            />
          </div>
          <div class="text">
            <h4>인터넷 서비스</h4>
            <p>이용기관에 인터넷 접속 수단을 제공하는 서비스</p>
            <p>접속방식 : E1/T1, DS3, SDH, Ethernet 등</p>
            <p>단기이용 서비스 포함</p>
          </div>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts"></script>

<style></style>
