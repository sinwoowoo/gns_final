<template>
  <div class="service-tab" :class="{ active: isActive }">
    <div class="current-label">
      <a href="javascript:"  @click="toggleActive">{{ label }}</a>
    </div>
    <ul>
      <li
        v-for="tab in tabs"
        :key="tab.name"
        :class="{ active: activeTab === tab.name }"
      >
        <a href="javascript:" @click="changeTab(tab.name, tab.label)">{{ tab.label }}</a>
      </li>
    </ul>
  </div>

  <section>
    <component :is="activeComponent" />
  </section>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";

const props = defineProps({
  label: String,
  tabs: {
    type: Array as () => { name: string; label: string; component: any }[],
    default: () => [],
  },
});

const emits = defineEmits(["tab-change"]);
const label = ref(props.label);

const route = useRoute();
const router = useRouter();

const activeTab = ref("");

onMounted(() => {
  const tabFromQuery = route.query.tab as string | undefined;
  if (tabFromQuery && props.tabs.some((tab) => tab.name === tabFromQuery)) {
    activeTab.value = tabFromQuery;
  } else {
    activeTab.value = props.tabs.length > 0 ? props.tabs[0].name : "";
  }
});

watch(
  () => route.query.tab,
  (newTab) => {
    if (newTab && props.tabs.some((tab) => tab.name === newTab)) {
      activeTab.value = newTab as string;
    }
  }
);

const changeTab = (tab: string, tabLabel: string) => {
  activeTab.value = tab;
  emits("tab-change", tab);
  router.push({ query: { ...route.query, tab } });
  label.value = tabLabel;
  toggleActive();
};

const activeComponent = computed(() => {
  const activeTabData = props.tabs.find((tab) => tab.name === activeTab.value);
  return activeTabData ? activeTabData.component : null;
});

const isActive = ref(false);

const toggleActive = () => {
  isActive.value = !isActive.value;
};
</script>

<style lang="scss" scoped>
.service-tab {
  position: relative;
  margin-bottom: 2rem;

  &.active {
    div.current-label > a:after {
      content: "expand_less"; /* 변경 필요 */
    }
  }

  div.current-label > a {
    display: block;
    font-size: 1.2rem;
    padding: 0.8rem 0.2rem;
    color: #e51c23;
    font-weight: bold;
    border-bottom: 1px solid #d1d1d1;
    position: relative;

    &:after {
      position: absolute;
      top: calc(50% - 12px);
      right: 1rem;
      font-size: 24px;
      content: "expand_more";
      font-family: "Material Icons";
      color: inherit;
    }
  }

  ul {
    width: 100%;
    display: flex;
    li {
      width: 20%;
      padding: 0 4px;
      text-align: center;
      a {
        display: block;
        font-size: 1.2rem;
        padding: 1rem;
        color: #333;
        font-weight: bold;
        border-bottom: 4px solid #e0e0e0;
        &:hover {
          border-bottom: 4px solid #e51c23;
          color: #e51c23;
        }
      }

      &.active > a {
        border-bottom: 4px solid #e51c23;
        color: #e51c23;
        position: relative;
        &::after {
          content: "";
          position: absolute;
          top: 100%;
          left: calc(50% - 5px);
          width: 0;
          height: 0;
          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
          border-top: 10px solid #e51c23;
        }
      }
    }
  }

  div.current-label {
    display: none;
  }
}

@include tablet {
  .service-tab {
    position: relative;
    margin-bottom: 2rem;

    div.current-label {
      display: block;

      > a {
        display: block;
        font-size: 1.2rem;
        padding: 0.8rem 0.2rem;
        color: #e51c23;
        font-weight: bold;
        border-bottom: 1px solid #d1d1d1;
        position: relative;

        &:after {
          position: absolute;
          top: calc(50% - 12px);
          right: 1rem;
          font-size: 24px;
          content: "expand_more";
          font-family: "Material Icons";
          color: inherit;
        }
      }
    }

    ul {
      display: none;
      position: absolute;
      width: 100%;
      top: 100%;
      left: 0;
      margin: 0;
      border-radius: 5px;
      background: #fff;
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.24),
        0 1px 7px 0 rgba(0, 0, 0, 0.22), 0 3px 3px -2px rgba(0, 0, 0, 0.3);
      z-index: 890;

      li {
        float: none;
        display: block;
        width: 100%;
        a {
          display: block;
          font-size: 1.2rem;
          padding: 1rem;
          color: #757575;
          font-weight: bold;
          border-bottom: 1px solid #d1d1d1;

          &:hover {
            color: #e51c23;
            border-bottom: 1px solid #d1d1d1;

          }
        }

        &.active > a {
          border-radius: 0;
          border-bottom: 1px solid #d1d1d1;
          border-top: none;
          border-left: none;
          border-right: none;
          box-shadow: none;
          color: #e51c23;
          &:after {
            display: none;
          }
        }

        &:last-child > a {
          border-bottom: none;
        }
      }
    }

    &.active {
      ul {
        display: block;
      }

      div.current-label > a:after {
        content: "expand_less";
      }
    }
  }
}
</style>
