<template>
  <main>
    <layoutPageTitle />
      <PageMaintab label="kt특장점" :tabs="tabs" />     
  </main>

</template>

<script setup lang="ts">
  import Merit from "./ktinfo/kt_merit.vue";
  import Formation from "./ktinfo/formation.vue";
  import Hindrance from "./ktinfo/hindrance.vue";
  import Control from "./ktinfo/control.vue";

  const tabs = [
    { name: "kt_merit", label: "kt특장점", component: Merit },
    { name: "formation", label: "조직/체계", component: Formation },
    { name: "hindrance", label: "장애대응 방안", component: Hindrance },
    { name: "control", label: "망관리/감시", component: Control },
  ];

</script>
