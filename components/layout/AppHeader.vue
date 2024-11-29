<template>
  <header id="header">
    <div class="container">
      <div class="kt-egov-logo">
        <nuxt-link to="/">
          <img
            src="@/assets/images/kt_egov_logo_new.png"
            alt="kt국가정보통신서비스"
          />
          <img
            src="@/assets/images/kt_egov_logo_mobile_new.png"
            alt="kt국가정보통신서비스"
            class="mobile"
          />
        </nuxt-link>
      </div>
      <button class="hamberger-btn" @click="toggleNavMenu">
        <img src="@/assets/images/icons/icon_nav.png" alt="" />
      </button>
      <div class="mini">
        <button class="account-btn" @click="toggleAccount">
          <img src="@/assets/images/icons/icon_login.png" alt="사용자 아이콘" />
        </button>
        <ul :class="{ open: isAccountOpen }">          
          <!--<li><nuxt-link to="/member/login">LOGIN</nuxt-link></li>--> <!-- 추후 주석 제거 -->          
          <!--<li><nuxt-link :to="redirectTo">LOGIN</nuxt-link></li>-->
          <li><nuxt-link @click="redirectTo">LOGIN</nuxt-link></li>
          <li><nuxt-link to="/member/check_member">JOIN US</nuxt-link></li>
        </ul>
      </div>
    </div>
    <nav class="gnb" :class="{ open: isNavMenuOpen }">
      <ul>
        <li
          v-for="(menu, index) in navMenu"
          :key="index"
          v-show="menu.show"
          :class="{ active: isActive(menu) }"
          @click="handleMenuClick"
        >
          <nuxt-link :to="menu.link">{{ menu.title }}</nuxt-link>
          <div class="submenu" :class="menu.class">
            <div class="container">
              <div class="menu-title">
                <h3>{{ menu.title }}</h3>
                <p v-html="menu.intro"></p>
              </div>
              <dl
                v-for="(sub, subIndex) in menu.subMenu"
                :key="subIndex"
                v-show="sub.show"
              >
                <dt>
                  <nuxt-link :to="sub.link">{{ sub.title }}</nuxt-link>
                </dt>
                <dd
                  v-for="(subSub, subSubIndex) in sub.subMenu"
                  :key="subSubIndex"
                  v-show="subSub.show"
                  :class="{ active: isActive(subSub) }"
                >
                  <nuxt-link :to="subSub.link">{{ subSub.title }}</nuxt-link>
                </dd>
              </dl>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { useNavStore } from '@/stores/nav/nav.stroe';
import type { NavMenu, SubMenu, SubSubMenu } from '@/types/api';
import { useUserStore } from "@/stores/user/user.store";

const navStore = useNavStore();
const navMenu = computed(() => navStore.navMenu);

const route = useRoute();
//const redirectTo = "https://dev.gns.kt.com/member/login.do"; //http://10.217.162.135/
const redirectTo = () => {
  let fm = document.createElement('form');  
  
  fm.setAttribute('method','post');
  fm.setAttribute('action','https://dev.gns.kt.com/member/login.do');

  document.body.appendChild(fm);  
  fm.submit(); 
}

const isNavMenuOpen = ref(false);
const toggleNavMenu = () => {
  isNavMenuOpen.value = !isNavMenuOpen.value;
};

const isAccountOpen = ref(false);
const toggleAccount = () => {
  isAccountOpen.value = !isAccountOpen.value;
};

const isActive = (menu: NavMenu | SubMenu | SubSubMenu): boolean => {
  if (route.path.includes(menu.link)) {
    return true;
  }
  if ('subMenu' in menu) {
    return menu.subMenu.some((sub: SubSubMenu) => isActive(sub));
  }
  return false;
};

const handleMenuClick = () => {
  isNavMenuOpen.value = false;
};
</script>

<style lang="scss" scoped>
#header {
  border-top: 4px solid #e51c23;
  border-bottom: 1px solid #d1d1d1;
  height: 70px;
  background: #fff;

  .container {
    position: relative;
  }
}

div.mini {
  display: inline-block;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1090;

  .account-btn {
    display: none;
  }

  ul {
    margin: 0;
    padding: 0;
    overflow: hidden;

    li {
      float: left;
      font-size: 11px;
      height: 70px;
      line-height: 70px;

      a {
        cursor: pointer;
        color: #9e9e9e;

        &:hover {
          color: #e51c23;
        }
      }

      &:not(:last-child):after {
        content: "|";
        margin: 0 0.5rem;
        color: #d1d1d1;
      }
    }
  }
}

.kt-egov-logo {
  position: relative;
  display: block;

  a {
    position: absolute;
    height: 56px;
    z-index: 1060;

    img {
      display: block;
      margin-top: 10px;

      &.mobile {
        display: none;
      }
    }
  }
}

.hamberger-btn {
  display: none;
}

nav.gnb {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 990;

  ul,
  dl {
    margin: 0;
  }

  > ul {
    > li {
      > a {
        &:hover {
          color: #e51c23;
          border-bottom: 4px solid #e51c23;
        }

        display: inline-block;
        padding: 0 0.4rem;
        font-size: 18px;
        font-weight: normal;
        font-family: NotoSansM;

        /* 191002 */
        height: 70px;
        line-height: 70px;
        color: #353535;
        cursor: pointer;
      }

      display: inline-block;
      padding: 0 1.75rem;

      &:hover {
         div.submenu {
          display: block;
        }
      }

      &.active {
         > a {
          color: #e51c23;
          border-bottom: 4px solid #e51c23;
        }
      }

      div.submenu {
        display: none;
        position: absolute;
        top: 70px;
        left: 0;
        width: 100%;
        z-index: 970;
        background: #fff;
        border-bottom: 1px solid #d1d1d1;

        .container {
          overflow: hidden;
          padding: 2rem 0;
          padding-left: 190px;
          position: relative;
          min-height: 290px;

          > dl {
            float: left;
            padding: 0 1.2rem;
            padding-bottom: 2rem;
            height: 190px;
          }
        }
      }
    }
    text-align: center;
    font-size: 0;
    margin-left: -3rem;
  }

  div.menu-title {
    position: absolute;
    display: block;
    top: 1.8rem;
    left: 0rem;
    width: 170px;
    text-align: left;
    height: 83%;
    border-right: 1px solid #dedede;

    h3 {
      margin: 0;
      display: block;
      text-align: left;
      font-size: 1.6rem;
      padding: 0.5rem 0;
      margin-bottom: 1rem;
    }

    p {
      text-align: left;
      font-size: 0.9rem;
      color: #9e9e9e;
      line-height: 1.5;
      word-break: keep-all;
    }

    ul {
      position: absolute;
      bottom: 3rem;
      left: 0;

      li:first-child {
        border-bottom: 1px solid #d1d1d1;

        a {
          background: url(../images/icon-faq.png) 0.5rem 50% no-repeat;
        }
      }

      a {
        cursor: pointer;
        display: block;
        padding: 0.8rem;
        padding-left: 48px;
        background: url(../images/icon-phone.png) 0.5rem 50% no-repeat;

        strong {
          display: block;
          color: #616161;
          font-size: 1.1rem;
        }

        p {
          margin: 0;
        }
      }
    }
  }

  dl:hover > dt > a {
    color: #e51c23;

    &:before {
      background: #e51c23;
      height: 0px;
    }
  }

  dt > a,
  dd > a {
    display: block;
    text-align: left;
    cursor: pointer;
  }

  dt > a {
    padding: 0.5rem;
    padding-bottom: 0.8rem;
    margin-bottom: 0.4rem;
    font-size: 1.25rem;
    box-sizing: border-box;
    position: relative;
    color: #424242;

    &:before {
      content: "";
      display: block;
      height: 0px;
      width: 100%;
      bottom: 0;
      left: 0;
      position: absolute;
      background: #d1d1d1;
    }
  }

  dd {
    margin: 0;
    padding: 0;

    > a {
      padding: 0.3rem 0.5rem;

      /* 191002 */
      font-size: 1.1rem;
      color: #9e9e9e;

      &:hover {
        color: #e51c23;
      }
    }
  }
}

@include tablet {
  #header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 56px;
    transition: height 0.3s linear;
    border-bottom: 1px solid #d1d1d1;
    z-index: 1090;
    background: #fff;
    border-top: none;

    .kt-egov-logo a img {
      display: none;

      &.mobile {
        margin-top: 10px;
        display: block;
      }
    }

    .hamberger-btn {
      display: block;
      position: absolute;
      top: 4px;
      right: 45px;
      padding: 6px;
      margin-top: 3px;
      color: #616161;
      background: none;
      border: none;
      img {
        width: 24px;
        height: 24px;
      }
    }
    
    .mini { 
      .account-btn {
          display: block;
          padding: 6px;
          margin-top: 6px;
          background: none;
          border: none;
          img {
            width: 24px;
            height: 24px;
          }
        }
      ul {
        display: none;
        z-index: 1190;
        position: absolute;
        top: 50px;
        right: -37px;
        box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14),
                    0 1px 18px 0 rgba(0, 0, 0, 0.12), 
                    0 3px 5px -1px rgba(0, 0, 0, 0.3);
          li {
            line-height: 50px;
            height: 50px;
              a {
              display: block;
              text-align: center;
              background: #fff;
              font-size: 16px;
              color: #616161;
              width: 200px;
            }
          }
        &.open {
          display: block;
        }
      }
    }
  }

  nav.gnb {
    display: none;
    position: absolute;
    height: 450px;
    top: 56px;
    bottom: 0;
    right: 0;
    overflow-y: auto;
    width: 100%;
    z-index: 990;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14),
                0 1px 10px 0 rgba(0, 0, 0, 0.12),
                0 2px 4px -1px rgba(0, 0, 0, 0.3);
    -webkit-transition: min-height 0.4s, bottom 0.8s;
    transition: min-height 0.4s, bottom 0.8s;
    &.open {
      display: block;
    }
    div.menu-title {
      display: none; 
    }
    > ul {
      margin: 0;
      > li {
        display: block;
        padding: 0;
        &.active {
          > a {
            border-bottom: 1px solid #d1d1d1;
          }
        }
        > a {
          padding: 1rem 1.8rem;
          display: block;
          font-weight: bold;
          color: #424242;
          font-size: 1.4rem;
          border-bottom: 1px solid #d1d1d1;
          background: #fff;
          line-height: normal;
          height: auto;
          text-align: left;
        }

        > div.submenu {
          display: block;
          position: static;
          
          .container {
            width: 100%;
            padding: 0;
            margin: 0;
            background: #fff;
            min-height: auto;

            dl {
              overflow: hidden;
              background: #d1d1d1; 
              float:none;
              padding: 0;
              height: auto;
              text-align: left;
              dt {
                width: 100%;
                background: #f5f5f5;
                position: relative;
                a {
                  padding: 1rem 1.8rem;
                  color: #424242;
                  border-bottom: 1px solid #d1d1d1;
                  font-size: 1.2rem;
                  margin-bottom: 0;
                  &:hover {
                    color: #e51c23;
                  } 
                  &:before {
                      content: '- ';
                      display: inline;
                      position:static;
                      background: none;
                  }
                }
              }
              dd {
                display: inline-block;
                width: 50%;
                margin: 0;
                background: #e0e0e0;
                a {
                  padding: .9rem 1.8rem;
                  font-size: 1rem;
                  color: #616161;
                  border-bottom: 1px solid #d1d1d1;
                  &:hover {
                    color: #e51c23;
                  }
                }
                &:nth-of-type(odd) > a {
                    border-right: 1px solid #d1d1d1;
                }
              }
            }
          }
        }

        &:hover > {
          a {
            border-bottom: 1px solid #d1d1d1;
          }
        }
      }
    }
  }
}
</style>
