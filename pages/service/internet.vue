<template>
  <main>
    <layoutPageTitle />
    <PageMaintab :tabs="tabs" />
  </main>
</template>

<script setup lang="ts">
import Basic from "./internet/Service.vue";
import Infra from "./internet/Infra.vue";

const tabs = [
  { name: "service", label: "인터넷 서비스", component: Basic },
  { name: "infra", label: "인터넷 서비스 인프라", component: Infra },
];
</script>
