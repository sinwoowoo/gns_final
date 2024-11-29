<template>
  <main>
    <layoutPageTitle />
    <PageMaintab :tabs="tabs" />
  </main>
</template>

<script setup lang="ts">
import Price from "./charge/Price.vue";
import Area from "./charge/Area.vue";
import Reckoning from "./charge/Reckoning.vue";

const tabs = [
  { name: "price", label: "요금표", component: Price },
  { name: "area", label: "권역/거리/속도체계", component: Area },
  //{ name: "reckoning", label: "이용요금계산", component: Reckoning },
];
</script>

