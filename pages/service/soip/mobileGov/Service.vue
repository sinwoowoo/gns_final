<template>
  <section class="row-content">
    <div>
      <h3>모바일인터넷전화 서비스란?</h3>
      <ul class="list-style1">
        <li>장비 구성도</li>
      </ul>
      <img
        src="@/assets/images/img_wireless_m_phone.png"
        alt="tset"
        class="responsive-img"
      />
    </div>

    <div>
      <ul class="list-style1 mt-50">
        <li>
          모바일 인터넷 전화 서버
          <ul>
            <li>
              호처리서버와 미디어서버로 구성되며 기관의 사용자 수에 따라 달리
              구성
            </li>
            <li>
              (호처리 서버) Active-Standby 이중화 구성, 호처리, 가입자 관리
            </li>
            <li>
              (미디어 서버) Active-Active 구성, 음성 Relay &amp; 트랜스코딩
            </li>
          </ul>
        </li>
        <li>
          MGW(미디어 게이트웨이)
          <ul>
            <li>모바일인터넷 서버와 교환기간 연동</li>
            <li>SIP ↔ PRI(E1) VoIP Gateway</li>
          </ul>
        </li>
        <li>
          인터넷회선 보안 장비
          <ul>
            <li>(방화벽 : UTM) 데이터 방화벽, 국정원 CC인증 (EAL 4)</li>
            <li>
              VoIP방화벽(SBC) 인터넷전화 보안장비, Active-Standby 이중화 구성,
              국정원 CC인증 (EAL 3)
            </li>
          </ul>
        </li>
        <li>
          호환 교환기 : SIP또는 PRI 회선을 지원하는 교환기는 모두 연동 가능
          <ul>
            <li>※ UTM : Universal Threat Management</li>
            <li>
              ※ VoIP방화벽(SBC) : VoIP 방화벽 및 Session Border Controller
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style></style>
