<template>
  <PageTpyetab label="" :tabs="tabs" />
</template>

<script setup lang="ts">
import Basic from "./price/basic/Basic.vue";
import Backbone  from "./price/basic/Backbone.vue";

import Ip  from "./price/ip/Ip.vue";

import Internet  from "./price/internet/Internet.vue";
import Wirelessinternet  from "./price/internet/Wireless_internet.vue";

import Wirelessdata  from "./price/wireless_data/Wireless_data.vue";
import Iot  from "./price/wireless_data/Iot.vue";
  
import Cctv  from "./price/cctv/Cctv.vue";

const tabs = [
  {
    name: "basic",
    label: "전용회선서비스",
    component: Basic,
    subMenu: [
      { name: "basic", label: "기본회선", component: Basic },
      { name: "backbone", label: "백본회선", component: Backbone },
    ],
  },
  {
    name: "ip",
    label: "인터넷 서비스",
    component: Basic,
    subMenu: [
      { name: "ip", label: "인터넷 서비스", component: Ip },
    ],
  },
  {
    name: "internet",
    label: "인터넷 전화 서비스",
    component: Basic,
    subMenu: [
      { name: "internet", label: "인터넷 전화", component: Internet },
      { name: "wireless_internet", label: "모바일 행정 전화", component: Wirelessinternet },
    ],
  },
  {
    name: "wireless",
    label: "무선 서비스",
    component: Basic,
    subMenu: [
      { name: "wireless_data", label: "무선데이터 서비스", component: Wirelessdata },
      { name: "iot", label: "IoT 서비스", component: Iot },
    ],
  },
  {
    name: "cctv",
    label: "CCTV 서비스",
    component: Basic,
    subMenu: [
      { name: "cctv", label: "CCTV", component: Cctv },
    ],
  },
];
</script>
<script lang="ts">
export default {
  name: "Basic",
};
</script>

<style lang="scss" scoped></style>
