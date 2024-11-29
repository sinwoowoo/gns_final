<template>
  <PageSubtab label="" :tabs="tabs" />
</template>

<script setup lang="ts">
import Service from "./basic/Service.vue";
import Price from "./basic/Price.vue";

const tabs = [
  { name: "service", label: "서비스정보", component: Service, icon: "live_help" },
  { name: "price", label: "요금안내", component: Price, icon: "receipt" },
];
</script>

<script lang="ts">
export default {
  name: 'Basic'
}
</script>
<style lang="scss" scoped></style>