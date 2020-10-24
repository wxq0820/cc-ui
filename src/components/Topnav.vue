<template>
  <div class="topnav">
    <div class="logo" @click="toggleMenu">LOGO</div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.topnav {
  background-color: pink;
  position: relative;
  z-index: 10;
  display: flex;
  padding: 16px;
  > .logo {
    max-width: 6em;
    margin-right: auto;
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
}
</style>
<script lang="ts">
import { inject, Ref } from 'vue'

export default {
    setup() {
        const asideVisible = inject<Ref<boolean>>('asideVisible')
        const toggleMenu = ()=>{
            asideVisible.value = !asideVisible.value
        } 
        return {toggleMenu}
    }
}
</script>