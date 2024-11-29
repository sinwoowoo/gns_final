<template>
  <div class="page-title">
    <div>
      <h2>{{ title }}</h2>
      <p v-html="description"></p>
    </div>
    <ul>
      <li>
        <nuxt-link to="/">
          <img
            src="@/assets/images/bullet_rocation_home.gif"
            alt="홈페이지 메인"
          />
        </nuxt-link>
      </li>
      <li v-for="(item, index) in path" :key="index">
        <template v-if="index === path.length - 1">
          {{ item.title }}
        </template>
        <template v-else>
          <nuxt-link :to="item.link">{{ item.title }}</nuxt-link>
        </template>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useNavStore } from '@/stores/nav/nav.stroe';
import type { NavMenu } from '@/types/api'


const navStore = useNavStore();
const navMenu = computed(() => navStore.navMenu);

const route = useRoute()

const path = ref<NavMenu[]>([])
const title = ref('')
const description = ref('')

const findParentMenu = (menus: any, currentPath: string, parentPath: NavMenu[] = []): NavMenu[] | null => {
  const cleanPath = (path: string) => path.replace(/&subtab=[^&]*/g, '')

  for (const menu of menus) {
    const newPath = [...parentPath, menu]
    const menuUrl = new URL(cleanPath(menu.link), window.location.origin)
    const currentUrl = new URL(cleanPath(currentPath), window.location.origin)

    if (menuUrl.pathname === currentUrl.pathname && menuUrl.search === currentUrl.search) {
      return newPath
    }
    if (menu.subMenu) {
      const result = findParentMenu(menu.subMenu, currentPath, newPath)
      if (result) {
        return result
      }
    }
  }
  return null
}

const getCurrentMenuPath = () => {
  let currentPath = route.fullPath
  let result = findParentMenu(navMenu.value, currentPath)
  // 없을시 단계적으로 파라메터 제거
  while (!result && currentPath.includes('?')) {
    currentPath = currentPath.substring(0, currentPath.lastIndexOf('?'));
    result = findParentMenu(navMenu.value, currentPath);
  }
  if (result) {
    path.value = result
    title.value = result[result.length - 1].title
    const regex = new RegExp(`(${title.value})`, 'g')
    description.value = result[result.length - 1].intro || ''
    description.value = description.value.replace(regex, '<span class="kt-red-text">$1</span>');
  } else {
    path.value = []
    title.value = ''
    description.value = ''
  }
}

onMounted(() => {
  if (!navStore.isLoaded) {
    navStore.loadNavMenu();
  }
  getCurrentMenuPath()
})

watch(() => route.fullPath, () => {
  getCurrentMenuPath()
})
</script>

<style lang="scss" scoped>
.page-title {
  position: relative;
  background: url("@/assets/images/line_h2_text.gif") 0 100% repeat-x;
  margin-top: 2rem;
  margin-bottom: 3rem;

  div {
    h2 {
      margin: 0;
      margin-right: 1rem;
      display: inline-block;
      color: #e51c23;
      font-size: 2rem;
      font-weight: normal;
      height: 100%;
      background: url("@/assets/images/line_h2_title.gif") 0 100% repeat-x;
      position: absolute;
    }

    p {
      font-size: 13px;
      display: inline-block;
      color: #9e9e9e;
      margin: 0;
      padding: 3.5rem 0 2rem 0;
      span {
        color: #e51c23;
        font-weight: bold;
      }
    }
  }

  ul {
    position: absolute;
    right: 0;
    top: 10px;
    overflow: hidden;
    margin: 0;

    li {
      height: 28px;
      line-height: 28px;
      display: inline-block;
      color: #9e9e9e;
      padding-right: 1.5rem;
      padding-left: 0.5rem;
      background: url("@/assets/images/bullet_rocation_arrow.gif") 100% 0
        no-repeat;
      font-size: 0.9rem;

      &:last-child {
        padding-right: 0;
        background: none;
        color: #424242;

        a {
          color: #039be5;
        }
      }
    }
  }
}

@include mobile {
  .page-title {
    div {
      h2 {
        font-size: 1.5rem;
      }

      p {
        font-size: 0.9rem;
      }
    }

    ul {
      top: 100%;
      padding-top:10px;
    }
  }
}
</style>