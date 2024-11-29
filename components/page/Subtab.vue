<template>
  <div class="radio-tab">
    <ul>
      <li
        v-for="tab in tabs"
        :key="tab.name"
        :class="{ active: activeTab === tab.name }"
      >
        <span @click="changeTab(tab.name)">
          <i>{{ tab.icon }}</i>
          {{ tab.label }}
        </span>
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

const route = useRoute();
const router = useRouter();

const activeTab = ref("");

onMounted(() => {
  const tabFromQuery = route.query.subtab as string | undefined;
  if (tabFromQuery && props.tabs.some((tab) => tab.name === tabFromQuery)) {
    activeTab.value = tabFromQuery;
  } else {
    activeTab.value = props.tabs.length > 0 ? props.tabs[0].name : "";
  }
});

const changeTab = (tab: string) => {
  activeTab.value = tab;
  emits("tab-change", tab);
  router.push({ query: { ...route.query, subtab: tab } });
};

const activeComponent = computed(() => {
  const activeTabData = props.tabs.find((tab) => tab.name === activeTab.value);
  return activeTabData ? activeTabData.component : null;
});
</script>

<style lang="scss" scoped>
.radio-tab ul {
  margin: 0;
  margin-bottom: 2rem;
  display: inline-block;
  background: #d1d1d1;
  border-radius: 0.4rem;
  box-shadow: inset 0px 1px 3px 0px rgba(0, 0, 0, 0.48);
  li {
    display: inline-block;
    > span {
        cursor: pointer;
        border-radius: 0.4rem;
        padding: 2px 20px;
        display: block;
        i {
          font-family: "Material Icons";
          font-style: normal;
          vertical-align: middle;
          font-size: 24px;
        }
    }
    &.active {
      > span {
        background: #e51c23;
        color: #fff;
        position: relative;
       box-shadow: inset 0px 1px 3px 0px rgba(0, 0, 0, 0.48);
        &:after {
          position: absolute;
          content: "";
          width: 0;
          height: 0;
          top: 100%;
          left: calc(50% - 0.3rem);
          border-left: 0.6rem solid transparent;
          border-right: 0.6rem solid transparent;
          border-top: 0.6rem solid #f00;
        }
      }
    }
  }
}
</style>
