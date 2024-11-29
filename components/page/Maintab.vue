<template>
  <div class="page-tab" :class="{ active: isActive }">
    <div class="current-label">
      <a href="javascript:" @click="toggleActive">{{ label }}</a>
    </div>
    <ul>
      <li
        v-for="tab in tabs"
        :key="tab.name"
        :class="{ active: activeTab === tab.name }"
      >
        <a href="javascript:" @click="changeTab(tab.name, tab.label)">{{
          tab.label
        }}</a>
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
const label = ref(props.tabs[0].label);

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
  updateLabel();
});

watch(
  () => route.query.tab,
  (newTab) => {
    if (newTab && props.tabs.some((tab) => tab.name === newTab)) {
      activeTab.value = newTab as string;
    }
    updateLabel();
  }
);

const changeTab = (tab: string, tabLabel: string) => {
  activeTab.value = tab;
  emits("tab-change", tab);
  router.push({ query: { ...route.query, tab } });
  label.value = tabLabel;
  toggleActive();
};

const updateLabel = () => {
  const activeTabData = props.tabs.find((tab) => tab.name === activeTab.value);
  if (activeTabData) {
    label.value = activeTabData.label;
  }
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
.page-tab {
  position: relative;
  margin-bottom: 2rem;

  &.active {
    ul {
      display: block;
    }

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
    display: none;
    position: absolute;
    width: 100%;
    top: calc(100% + 2rem);
    left: 0;
    margin: 0;
    border-radius: 5px;
    background: #fff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.24), 0 1px 7px 0 rgba(0, 0, 0, 0.22),
      0 3px 3px -2px rgba(0, 0, 0, 0.3);
    z-index: 890;

    li {
      a {
        display: block;
        font-size: 1.2rem;
        padding: 1rem;
        color: #757575;
        font-weight: bold;
        border-bottom: 1px solid #d1d1d1;

        &:hover {
          color: #e51c23;
        }
      }

      &.active > a {
        color: #e51c23;
      }

      &:last-child > a {
        border-bottom: none;
      }
    }
  }

  div.current-label {
    display: none;
  }

  ul {
    display: block;
    position: static;
    overflow: hidden;
    border-radius: 0;
    background: url("@/assets/images/tab_line.gif") 0 100% repeat-x;
    box-shadow: none;

    li {
      float: left;
      display: inline-block;

      a {
        color: #9e9e9e;
        margin-right: 0.2rem;
        border-radius: 5px 5px 0 0;
        font-weight: bold;
        border: 1px solid transparent;
        border-bottom: none;

        &:hover {
          color: #e51c23;
          background: #eaeaea;
        }
      }

      &.active > a {
        background: #fff;
        color: #e51c23;
        border: 1px solid #bdbdbd;
        border-bottom: 1px solid #fff;
        border-top: 1px solid #e51c23;
        box-shadow: inset 0 1px 0 #e51c23;
      }
    }
  }
}

@include tablet {
  .page-title {
    position: relative;

    border-bottom: 1px solid #d1d1d1;
    margin-top: 2rem;
    margin-bottom: 6rem;

    div {
      height: 100%;

      h2 {
        margin: 0;
        margin-right: 1rem;
        display: inline-block;
        color: #e51c23;
        font-size: 2rem;
        font-weight: normal;
        height: 100%;

        //background: url("../images/line_h2_title.gif") 0 100% repeat-x;
        position: absolute;
      }

      p {
        display: inline-block;
        color: #9e9e9e;
        margin: 0;
        padding: 3.5rem 0 2rem 0;
      }
    }

    ul {
      position: absolute;
      right: 0;
      top: 100%;
      padding-top: 1rem;
      overflow: hidden;
      margin: 0;

      li {
        float: left;
        height: 28px;
        line-height: 28px;
        display: inline-block;
        color: #9e9e9e;
        padding-right: 1.5rem;
        padding-left: 0.5rem;

        //background: url("../images/bullet_rocation_arrow.gif") 100% 0 no-repeat;
        font-size: 0.9rem;

        &:last-child {
          padding-right: 0;
          background: none;
          color: #424242;
        }
      }
    }
  }

  .page-tab {
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
        a {
          display: block;
          font-size: 1.2rem;
          padding: 1rem;
          color: #757575;
          font-weight: bold;
          border-bottom: 1px solid #d1d1d1;

          &:hover {
            color: #e51c23;
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
