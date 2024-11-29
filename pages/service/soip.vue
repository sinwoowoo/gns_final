<template>
  <main>
    <layoutPageTitle />
    <PageMaintab :tabs="tabs" />
  </main>
</template>

<script setup lang="ts">
import Service from "./soip/Service.vue";
import MoblieGov from "./soip/MoblieGov.vue";
import Infra from "./soip/Infra.vue";
import MoblieGovInfra from "./soip/MoblieGovInfra.vue";

const tabs = [
  { name: "service", label: "인터넷전화 서비스", component: Service },
  { name: "mobile_gov", label: "모바일행정전화 서비스", component: MoblieGov },
  { name: "infra", label: "인터넷전화 인프라", component: Infra },
  { name: "mobile_gov_infra", label: "모바일행정전화 인프라", component: MoblieGovInfra },
];
</script>
