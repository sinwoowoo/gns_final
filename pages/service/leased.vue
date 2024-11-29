<template>
  <main>
    <layoutPageTitle />
    <PageMaintab :tabs="tabs" />
  </main>
</template>

<script setup lang="ts">
import Basic from "./leased/Basic.vue";
import Backbone from "./leased/Backbone.vue";
import Infra from "./leased/Infra.vue";

const tabs = [
  { name: "basic", label: "기본회선 서비스", component: Basic },
  { name: "backbone", label: "백본회선 서비스", component: Backbone },
  { name: "infra", label: "전용회선 인프라", component: Infra },
];
</script>
