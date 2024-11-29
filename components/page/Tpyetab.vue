<template>
  <div class="radio-tab2">
    <ul>
      <li v-for="tab in tabs" :key="tab.name" :class="{ active: activeTab === tab.name }">
        <span @click="changeTab(tab.name)">
          <i>{{ tab.icon }}</i>
          {{ tab.label }}
        </span>
      </li>
    </ul>
    <div class="selbox">
      <label for="">상품분류</label>
      <select v-model="selectedOption" @change="handleSelectChange">
        <option v-for="subTab in activeSubMenu" :key="subTab.name" :value="subTab.component">
          {{ subTab.label }}
        </option>
      </select>
    </div>
  </div>
  <section>
    <component :is="activeComponent" />
  </section>
</template>

<script setup lang="ts">
const props = defineProps({
  label: String,
  tabs: {
    type: Array as () => { name: string; label: string; component: any; subMenu: { name: string; label: string; component: any }[] }[],
    default: () => [],
  },
});

const emits = defineEmits(['tab-change']);

const route = useRoute();
const router = useRouter();

const activeTab = ref('');
const selectedOption = ref('');

onMounted(() => {
  const tabFromQuery = route.query.subtab as string | undefined;
  if (tabFromQuery && props.tabs.some((tab) => tab.name === tabFromQuery)) {
    activeTab.value = tabFromQuery;
  } else {
    activeTab.value = props.tabs.length > 0 ? props.tabs[0].name : '';
  }
  selectedOption.value = activeSubMenu.value.length > 0 ? activeSubMenu.value[0].component : '';
});

const changeTab = (tab: string) => {
  activeTab.value = tab;
  emits('tab-change', tab);
  router.push({ query: { ...route.query, subtab: tab } });
  selectedOption.value = activeSubMenu.value.length > 0 ? activeSubMenu.value[0].component : '';
};

const activeComponent = computed(() => {
  return selectedOption.value;
});

const activeSubMenu = computed(() => {
  const activeTabData = props.tabs.find((tab) => tab.name === activeTab.value);
  return activeTabData ? activeTabData.subMenu : [];
});

const handleSelectChange = () => {
  // 선택된 옵션에 따라 activeComponent가 변경
};
</script>

<style lang="scss" scoped>
.radio-tab2 {
  display: flex;

  ul {
    width: 72%;
    margin: 0;
    margin-bottom: 2rem;
    display: inline-block;
    background: #d1d1d1;

    li {
      display: inline-block;

      >span {
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
        >span {
          background: #e51c23;
          color: #fff;
          position: relative;
          box-shadow: inset 0px 1px 3px 0px rgba(0, 0, 0, 0.48);
        }
      }
    }
  }
}

.selbox {
  width: 28%;
  background: #f5f5f5;
  border-radius: 0 .4rem .4rem 0;
  height: 3em;
  padding: .25rem .25rem 0 1rem;

  label {
    position: relative;
    padding-left: 30px;
    margin-right: 10px;

    &::before {
      position: absolute;
      content: "devices";
      width: 30px;
      font-size: 1.5rem;
      display: block;
      font-family: "material icons";
    }
  }

  select {
    user-select: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    cursor: pointer;
    padding: 0 .5rem;
    font-size: 1rem;
    border-radius: 0;
    height: 32px;
    line-height: 32px;
    padding-right: 3rem;
  }
}

@include tablet {
  .radio-tab2 {
    display: block;

    ul {
      width: 100%;
      display: block;
      text-align: center;
      li {
        display: block;
        font-size: 18px;
        span {
          padding: 5px;
        }
      }
    }
  }

  .selbox {
    width: 100%;
    border-radius: .4rem;
    height: auto;
    padding: 10px 20px;

    label {
    font-size: 16px;

      &::before {
        position: absolute;
        content: "devices";
        width: 30px;
        font-size: 22px;
        display: block;
        font-family: "material icons";
      }
    }

    select {
      font-size: 16px;
    }
  }
}
</style>
