<template>
  <button class="gugu-switch" @click="toggle" :class="{ 'gugu-checked': value }">
    <span></span>
  </button>
</template>

<style lang="scss">
$h: 22px;
$h2: $h - 4px;
.gugu-switch {
  height: $h;
  width: $h2 * 2;
  border: none;
  background: #aaa;
  border-radius: $h/2;
  position: relative;
  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: $h2/2;
    transition: left 250ms;
  }
  &.gugu-checked {
    background: blue;
  }
  &.gugu-checked span {
    left: calc(100% - #{$h2} - 2px);
  }
  &:focus {
    outline: none;
  }
}
</style>

<script lang="ts">
import { ref } from 'vue'
export default {
  props: {
    value: Boolean,
  },
  setup(props, ctx) {
    const toggle = () => {
      ctx.emit('update:value', !props.value)
    }
    return { toggle }
  },
}
</script>
