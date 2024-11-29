<template>
  <div class="sitemap">
    <div class="container">
      <div class="row">
        <div class="col s12 m6 l2 kt-logo">
          <img src="@/assets/images/icon_kt_new.png" alt="korea telecom" />
        </div>
        <div
          v-for="(menu, index) in navMenu"
          :key="index"
          class="col s12 m6 l2"
          v-show="menu.show"
        >
          <nuxt-link :to="menu.link" class="main">
            {{ menu.title }}
          </nuxt-link>
          <nuxt-link
            v-for="(sub, subIndex) in menu.subMenu"
            :key="subIndex"
            :to="sub.link"
            class="sub"
            v-show="sub.show"
          >
            {{ sub.title }}
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useNavStore } from '@/stores/nav/nav.stroe';
import type { NavMenu } from '@/types/api';

const navStore = useNavStore();
const navMenu = computed(() => navStore.navMenu);
</script>

<style lang="scss" scoped>
.sitemap {
  background: #f5f5f5;
  border-bottom: 1px solid #d1d1d1;
  padding: 2.5rem 0;

  .row > .col {
    color: #424242;

    &.kt-logo {
      display: none;
    }

    a {
      color: inherit;
      padding: 0.4rem 0;
      display: block;
      &.main {
        font-size: 16px;
        font-weight: bold;
        position: relative;
        box-sizing: border-box;
        padding: 12px;
        margin-bottom: 8px;
        border-bottom: 1px solid #d1d1d1;
        &:before {
          display: inline-block;
          content: "";
          position: absolute;
          top: calc(50% - 2px);
          left: 0;
          width: 2px;
          height: 8px;
          background: #e51c23;
        }
      }

      &.sub {
        font-size: 1rem;
        font-weight: normal;
        color: #757575;

        &:before {
          content: "·";
          padding: 0 0.4rem 0 0;
          color: #424242;
        }
      }
    }

    &.kt-logo {
      display: block;
    }
  }
}

@include tablet {
  .sitemap {
  background: #f5f5f5;
  border-bottom: 1px solid #d1d1d1;
  padding: 2.5rem 0; }
  .sitemap .divider {
    margin: .4rem 0; }
  .sitemap .row > .col {
    color: #424242;
    display: block;
        width: 100%;
    }
    .sitemap .row > .col.kt-logo {
      display: none; }
    .sitemap .row > .col a {
      color: inherit;
      padding: .4rem 0;
      display: inline-block; }
      .sitemap .row > .col a.main {
        width: 100%;
        font-size: 1.2rem;
        font-weight: bold;
        position: relative;
        padding: .4rem;
        box-sizing: border-box;
        padding-left: .8rem; }
        .sitemap .row > .col a.main:before {
          display: inline-block;
          content: "";
          position: absolute;
          top: calc(50% - 2px);
          left: 0;
          width: 2px;
          height: 8px;
          background: #e51c23; }
      .sitemap .row > .col a.sub {
        font-size: 1rem;
        font-weight: normal;
        color: #757575; }
        .sitemap .row > .col a.sub:before {
          content: "·";
          padding: 0 .4rem 0 0;
          color: #424242; }
}
</style>
