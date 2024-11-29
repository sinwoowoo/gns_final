<template>
  <div class="service-info">
    <ul>
      <li class="list service-4">
        <div>
          <div class="image">
            <div class="center-align">
              <img
                src="@/assets/images/service_05.png"
                alt="무선 서비스"
                class="responsive-img"
              />
            </div>
          </div>
          <div class="text">
            <h2>D그룹[무선 서비스]</h2>
            <h4>요금제 부담 없이 이용하는 업무용 무선 서비스</h4>
            <p>
              무선서비스 그룹은 <b>무선데이터</b>와 <b>Iot서비스</b>로
              구성됩니다.
            </p>
            <nuxt-link to="/service/wireless?tab=infra" class="btn">무선 인프라</nuxt-link>
          </div>
        </div>
      </li>
    </ul>
  </div>
  <h3>서비스 목록</h3>
  <div class="service-list">
    <ul>
      <li class="list service-4">
        <nuxt-link to="/service/wireless?tab=service">
          <div class="image">
            <img
              src="@/assets/images/addService_img8.png"
              alt="무선 데이터 서비스"
              class="responsive-img"
            />
          </div>
          <div class="text">
            <h4>무선 데이터 서비스</h4>
            <p>
              스마트 단말등으로 모바일 행정서비스와 현장 업무서비스 등을
              이용하기 위한 LTE 기반 데이터 서비스
            </p>
          </div>
        </nuxt-link>
      </li>
      <li class="list service-4">
        <nuxt-link to="/service/wireless?tab=iot">
          <div class="image">
            <img
              src="@/assets/images/addService_img8.png"
              alt="Iot 서비스"
              class="responsive-img"
            />
          </div>
          <div class="text">
            <h4>Iot 서비스</h4>
            <p>
              정보통신기술 기반으로 모든 사물을 연결해 플랫폼·네트워크간 정보를
              교류하고 지원하는 지능형 인프라 및 서비스
            </p>
          </div>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts"></script>

<style></style>
