<template>
  <div>
    <Topnav />
    <div class="content">
      <aside v-if="asideVisible">
        <h2>組件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">switch組件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">button組件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">dialog組件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">tabs組件</router-link>
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
    height: calc(100% - 61px);
    background-color: lightblue;
    width: 150px;
    margin-top: 5px;
    padding: 16px;
    position: absolute;
    > h2 {
      margin-bottom: 4px;
    }
    > ol {
      > li {
        padding: 4px 0;
      }
    }
    @media (max-width: 500px) {
      position: fixed;
      top: 0px;
      left: 0;
      padding-top: 70px;
    }
  }
  > main {
    position: absolute;
    height: calc(100% - 61px);
    width: calc(100% - 160px);
    margin: 5px 0 0 160px;
    padding: 15px 20px;
    overflow-y: scroll;
    background-color: lightgreen;

    @media (max-width: 500px) {
      margin-left: 0;
      width: 100%;
    }
  }
}
</style>
