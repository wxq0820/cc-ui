<template>
  <div class="topnav">
    <router-link to="/" class="logo">
      <svg class="icon">
        <use xlink:href="#icon-chengzi"></use>
      </svg>
    </router-link>
    <router-link to="/doc" class="menu">
      <div>文档</div>
    </router-link>
    <svg v-if="toggleMenuButtonVisible" class="icon toggleAside" @click="toggleMenu">
      <use xlink:href="#icon-menu1"></use>
    </svg>
  </div>
</template>
<style lang="scss" scoped>
$color: #28d1c9;
.topnav {
  color: $color;
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  > .logo {
    max-width: 6em;
    margin-right: auto;
    > svg {
      width: 32px;
      height: 32px;
    }
  }
  > .menu {
    display: flex;
    &:hover {
      text-decoration: none;
    }
  }
  > .toggleAside {
    display: none;
    width: 36px;
    height: 36px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
  }
  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>
<script lang="ts">
import { inject, Ref } from 'vue'

export default {
  props: {
    toggleMenuButtonVisible: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const asideVisible = inject<Ref<boolean>>('asideVisible')
    const toggleMenu = () => {
      asideVisible.value = !asideVisible.value
    }
    return { toggleMenu }
  },
}
</script>
