<template>
  <div class="layout">
    <Topnav toggleMenuButtonVisible class="nav" />
    <div class="content">
      <aside v-if="asideVisible">
        <h2>文档</h2>
        <ol>
          <li>
            <router-link to="/doc/intro">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/install">安装</router-link>
          </li>
          <li>
            <router-link to="/doc/get-start">开始使用</router-link>
          </li>
        </ol>
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">switch组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">button组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">dialog组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">tabs组件</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>
<script lang="ts">
import { inject, Ref } from 'vue'
import Topnav from '../components/Topnav.vue'
export default {
  components: { Topnav },
  setup() {
    const asideVisible = inject<Ref<boolean>>('asideVisible')
    return { asideVisible }
  },
}
</script>
<style lang="scss" scoped>
.content {
  height: 100%;
  > aside {
    height: calc(100% - 73px);
    background-color: lightblue;
    width: 150px;
    padding: 16px 0;
    position: absolute;
    > h2 {
      padding: 0 16px;
      margin-bottom: 4px;
    }
    > ol {
      > li {
        > a {
          display: block;
          padding: 4px 16px;
          text-decoration: none;
        }
        > .router-link-active {
          
          background-color: #fff;
          
        }
      }
    }
    @media (max-width: 500px) {
      height: 100%;
      position: fixed;
      z-index: 1;
      top: 0px;
      left: 0;
      padding-top: 70px;
      height: 100%;
    }
  }
  > main {
    position: absolute;
    height: calc(100% - 73px);
    width: calc(100% - 160px);
    margin: 5px 0 0 160px;
    padding: 15px 20px;
    overflow-y: scroll;
    background-color: white;

    @media (max-width: 500px) {
      margin-left: 0;
      width: 100%;
    }
  }
}
</style>
