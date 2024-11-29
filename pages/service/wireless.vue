<template>
  <main>
    <layoutPageTitle />
    <PageMaintab :tabs="tabs" />
  </main>
</template>

<script setup lang="ts">
import Service from "./wireless/Service.vue";
import Iot from "./wireless/Iot.vue";
import Infra from "./wireless/Infra.vue";
import IotInfra from "./wireless/IotInfra.vue";

const tabs = [
  { name: "service", label: "무선데이터 서비스", component: Service },
  { name: "iot", label: "IoT 서비스", component: Iot },
  { name: "infra", label: "무선 인프라", component: Infra },
  { name: "iot_infra", label: "IoT 인프라", component: IotInfra },
];
</script>
