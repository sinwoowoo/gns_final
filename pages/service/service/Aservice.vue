<template>
  <div class="service-info">
    <ul>
      <li class="list service-1">
        <div>
          <div class="image">
            <div class="center-align">
              <img
                src="@/assets/images/service_01.png"
                alt="전용회선서비스"
                class="responsive-img"
              />
            </div>
          </div>
          <div class="text">
            <h2>A그룹[전용회선서비스]</h2>
            <p>
              전용회선서비스 그룹은
              <b>기본회선(망분리회선, 단기이용 포함), 백본회선</b>으로 구성
            </p>
            <p>
              <b>(망분리회선)</b> 상.하위 주소가 동일한 기본회선서비스에 대하여
              인터넷.<br />업무망 분리 용도 등으로 여러 회선을 묶어서 제공하는
              서비스
            </p>
            <p>
              <b>(단기이용)</b> 선거.행사.대회 등 일정 기간 기본회선을 사용일수
              기반으로 <br />제공하는 서비스
            </p>
            <nuxt-link to="/service/leased?tab=infra" class="btn"
              >전용회선 인프라</nuxt-link
            >
          </div>
        </div>
      </li>
    </ul>
  </div>
  <h3>서비스 목록</h3>
  <div class="service-list">
    <ul>
      <li class="list service-1">
        <nuxt-link to="/service/leased?tab=basic">
          <div class="image" style="vertical-align: middle">
            <img
              src="@/assets/images/addService_img8.png"
              alt="기본회선 서비스"
              class="responsive-img"
            />
          </div>
          <div class="text">
            <h4>기본회선 서비스</h4>
            <p>기관간 연결수단을 제공하는 전용회선 서비스</p>
            <p>접속방식 : E1/T1, DS3, SDH, Ethernet 등</p>
            <p>망분리회선, 단기이용회선 포함</p>
          </div>
        </nuxt-link>
      </li>
      <li class="list service-1">
        <nuxt-link to="/service/leased?tab=backbone"
          >백본 서비스
          <div class="image">
            <img
              src="@/assets/images/addService_img8.png"
              alt="백본회선 서비스"
              class="responsive-img"
            />
          </div>
          <div class="text">
            <h4>백본회선 서비스</h4>
            <p>백본구간의 기관간 연결수단을 제공하는 전용</p>
            <p>회선서비스로 특정 기관에 적용</p>
            <p>접속방식 : E1/T1, DS3, SDH, Ethernet 등</p>
          </div>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts"></script>

<style></style>
