<template>
  <div class="service-info">
    <ul>
      <li class="list service-5">
        <div>
          <div class="image">
            <div class="center-align">
              <img
                src="@/assets/images/service_06.png"
                alt="CCTV 서비스"
                class="responsive-img"
              />
            </div>
          </div>
          <div class="text">
            <h2>E그룹[CCTV 서비스]</h2>
            <h4>CCTV서비스 그룹은 CCTV전송회선 서비스로 구성</h4>
          </div>
        </div>
      </li>
    </ul>
  </div>
  <h3>서비스 목록</h3>
  <div class="service-list">
    <ul>
      <li class="list service-5">
        <nuxt-link to="/service/cctv">
          <div class="image">
            <img
              src="@/assets/images/addService_img8.png"
              alt="cctv 전송회선 서비스"
              class="responsive-img"
            />
          </div>
          <div class="text">
            <h4>CCTV 전송회선 서비스</h4>
            <p>
              이용기관의 CCTV단말로부터 관제센터까지 영상을 전달하기 위해
              제공하는 시내전용회선서비스
            </p>
            <p>접속방식 : Ethernet 등</p>
          </div>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts"></script>

<style></style>
