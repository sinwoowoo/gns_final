<template>
  <main>
    <layoutPageTitle />
      <PageMaintab label="KTsat특장점" :tabs="tabs" />     
  </main>

</template>

<script setup lang="ts">
  import MeritSat from "./ktsatinfo/ktsat_merit.vue";
  import Wi from "./ktsatinfo/ktsat_wi.vue";

  const tabs = [
    { name: "ktsat_merit", label: "KTsat특장점", component: MeritSat },
    { name: "ktsat_wi", label: "위성서비스", component: Wi },
  ];

</script>
