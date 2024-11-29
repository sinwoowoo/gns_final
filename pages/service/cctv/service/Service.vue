<template>
  <section>
    <h3>CCTV 전송서비스란?</h3>
    <ul class="list-style1">
      <li>
        이용기관의 CCTV 단말로부터 관제센터까지 영상을 전달하기 위해 제공하는
        시내 전용회선 서비스
      </li>
    </ul>
    <div class="left-align">
      <img src="@/assets/images/img_circuit03.gif" alt="tset" class="responsive-img1" />
    </div>
  </section>

  <section>
    <h3>CCTV 전송 서비스 적용 기준 및 예시</h3>
    <ul class="list-style1">
      <li>
        서비스 회선요금은 카메라수와 무관하게 1회선(10Mbps)당 이용요금 부과
        <ul>
          <li>
            (예시 1) 통신사업자가 CCTV 카메라별로 물리적 회선/포트(10M) 단위로
            제공하는 경우 회선별로 요금 청구
          </li>
          <div class="left-align">
            <img
              src="@/assets/images/img_cctv_new_01.png"
              alt="tset"
              class="responsive-img2"
            />
          </div>
          <li>
            (예시 2) 통신사업자는 CCTV 1회선(30M)을 제공하고 기관이 다수의
            카메라를 연결하여 이용하는 경우 통신사업자는 물리적인 1회선 구성 및
            요금 청구
          </li>
          <div class="left-align">
            <img
              src="@/assets/images/img_cctv_new_02.png"
              alt="tset"
              class="responsive-img2"
            />
          </div>
        </ul>
      </li>
    </ul>

    <h3>CCTV 전송 서비스 이용 조건</h3>
    <ul class="list-style1">
      <li>
        CCTV서비스는 인입선을 공중(가공)으로 설치하는 것을 원칙으로 하되, 다음과
        같은 경우에는 해당기관과 별도 협의를 통해 설치비용 중 일부를 요금에 반영
        <ul>
          <li>불가피한 사정으로 인입선을 지중화 하는 경우</li>
          <li>CCTV설치구역이 산간오지, 도서 해안지역 등 설치가 어려운 지역</li>
        </ul>
      </li>
      <li>
        신규로 공급되는 회선은 '신규계약' 요금을 적용(신설공사 수반)하되, 5년이
        경과된 기 공급회선은 '재계약'요금을 적용
      </li>
      <!--  <li>100M 이상으로 회선속도를 높일 경우, 10Mbps당 계약요금의 20%에 해당하는 비용을 추가부담</li> -->
      <li>
        계약기간 만료 전 이용계약 해지 시 이용약정 잔여기간 총 요금의 50%를
        위약금으로 부담(단, 공익사업으로 부득이 CCTV를 철거하는 경우 제외)
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts"></script>

<style></style>
