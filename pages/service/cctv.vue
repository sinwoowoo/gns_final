<template>
  <main>
    <layoutPageTitle />
    <PageMaintab :tabs="tabs" />
  </main>
</template>

<script setup lang="ts">
import Service from "./cctv/Service.vue";

const tabs = [
  { name: "Service", label: "인터넷 서비스", component: Service },
];
</script>
