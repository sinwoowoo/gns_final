<template>
  <PageSubtab label="" :tabs="tabs" />
</template>

<script setup lang="ts">
import info from "./infra/info.vue";
import system from "./infra/system.vue";
import ipv6 from "./infra/ipv6.vue";

const tabs = [
  { name: "info", label: "인프라 정보", component: info, icon: "live_help" },
  { name: "system", label: "보안시스템", component: system, icon: "live_help" },
  { name: "ipv6", label: "Ipv6 제공", component: ipv6, icon: "live_help" },
];
</script>
<script lang="ts">
export default {
  name: 'Infra'
}
</script>

<style lang="scss" scoped></style>