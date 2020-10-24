<template>
  <div>
    <Topnav/>
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
      <main>主内容</main>
    </div>
  </div>
</template>
<script lang="ts">
import { inject, Ref } from 'vue'
import Topnav from '../components/Topnav.vue'
export default {
  components: {Topnav},
  setup() {
        const asideVisible = inject<Ref<boolean>>('asideVisible')
        return {asideVisible}
    }
  }
</script>
<style lang="scss" scoped>
  aside {
    background-color: lightblue;
    width: 150px;
    padding: 16px;
    position: fixed;
    top: 50px;
    left: 0;
    > h2 {
      margin-bottom: 4px;
    }
    > ol {
      > li {
        padding: 4px 0;
      }
    }
  }
</style>