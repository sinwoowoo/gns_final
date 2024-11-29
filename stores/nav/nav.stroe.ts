import { defineStore } from 'pinia'
import navMenuData from './navMenu.json';
import type { NavMenu } from '@/types/api';

export const useNavStore = defineStore('nav', {
  state: () => ({
      navMenu: [] as NavMenu[],
      isLoaded: false
  }),
  actions: {
    loadNavMenu() {
      // #TODO: 메뉴 데이터를 API로 받아오도록 수정
      if (!this.isLoaded) {
        this.navMenu = navMenuData;
        this.isLoaded = true;
      }
    }
  },
  persist: true
})