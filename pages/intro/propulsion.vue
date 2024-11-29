<template>
  <main>
    <layoutPageTitle />
    <section>
      <h3>국가정보통신 인프라 연혁</h3>
      <ul class="list-style1">
        <li>
          현재 국가정보통신서비스는 전자정부통합망(구. 행자부)과
          전자정부통신망(구.정통부)을 통합한 IP기반의 국가정보통신서비스
          인프라를 구축하여 운영 중
        </li>
      </ul>
      <div class="center-align">
        <img
          src="@/assets/images/img_propulsion_new.png"
          alt="tset"
          class="responsive-img"
        />
      </div>
    </section>
  </main>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
div.page-contents h3 {
  margin: 0;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  position: relative;
  line-height: 2.6rem;
  color: #424242;
}

div.page-contents ul.list-style1 li {
  padding-left: 1rem;
  position: relative;
  margin-bottom: 0.4rem;
}

div.page-contents ul.list-style1 li:before {
  content: "";
  position: absolute;
  top: 6px;
  left: 0;
  width: 4px;
  height: 8px;
  color: #e51c23;
  background: url("@/assets/images/icons/icon_chevron_right.png") no-repeat;
  background-size: 4px;
}

div.page-contents h3:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 1.2rem;
  height: 2px;
  background: #e51c23;
}

div.page-contents {
  margin-bottom: 5rem;
  line-height: 1.5;
  color: #757575;
}
</style>
