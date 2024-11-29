<template>
  <div class="wrapper">
    <layoutAppHeader />
    <NuxtPage />
    <layoutSiteMap />
    <layoutAppFooter />
    <div id="dimmed"></div>
  </div>
</template>

<script setup lang="ts">
import { useNavStore } from '@/stores/nav/nav.stroe';

// SEO 처리
useSeoMeta({
  title: 'kt그룹 국가정보통신서비스',
  ogTitle: 'kt그룹 국가정보통신서비스',
  description: '풍부한 관련 사업 경험과 전국 서비스 제공 능력을 통해 최상의 국가정보통신서비스를 구축해 드립니다.',
  ogDescription: '풍부한 관련 사업 경험과 전국 서비스 제공 능력을 통해 최상의 국가정보통신서비스를 구축해 드립니다.',
  ogImage: '/images/og_img_01.png',
  twitterCard: 'summary_large_image',
})

const navStore = useNavStore();

onMounted(() => {
  navStore.loadNavMenu();
});
</script>