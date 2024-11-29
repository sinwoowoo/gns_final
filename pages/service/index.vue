<template>
  <main>
    <layoutPageTitle />
    <PageMaintab :tabs="tabs" />
  </main>
</template>

<script setup lang="ts">
import Aservice from "./service/Aservice.vue";
import Bservice from "./service/Bservice.vue";
import Cservice from "./service/Cservice.vue";
import Dservice from "./service/Dservice.vue";
import Eservice from "./service/Eservice.vue";

const tabs = [
  { name: "A", label: "A. 전용회선서비스", component: Aservice },
  { name: "B", label: "B.인터넷서비스", component: Bservice },
  { name: "C", label: "C. 인터넷전화서비스", component: Cservice },
  { name: "D", label: "D. 무선서비스", component: Dservice },
  { name: "E", label: "E. CCTV서비스", component: Eservice },
];
</script>