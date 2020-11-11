<template>
  <div class="gugu-tabs">
    <div class="gugu-tabs-nav" ref="container">
      <div
        class="gugu-tabs-nav-item"
        :class="{ selected: t === selected }"
        v-for="(t, index) in titles"
        :ref="
          (el) => {
            if (t === selected) selectedItem = el
          }
        "
        @click="select(t)"
        :key="index"
      >
        {{ t }}
      </div>
      <div class="gugu-tabs-nav-item-indicator" ref="indicator"></div>
    </div>
  </div>
  <div class="gugu-tabs-content">
    <component
      class="gugu-tabs-content-item"
      :class="{ selected: c.props.title === selected }"
      v-for="(c, index) in defaults"
      :key="index"
      :is="c"
    />
  </div>
</template>
<script lang="ts">
import { onMounted, ref, watchEffect, computed } from 'vue'
import TabDemo from './tabDemo.vue'
export default {
  props: {
    selected: {
      type: String,
    },
  },
  setup(props, ctx) {
    const selectedItem = ref<HTMLDivElement>(null)
    const indicator = ref<HTMLDivElement>(null)
    const container = ref<HTMLDivElement>(null)
    onMounted(() => {
      watchEffect(() => {
        const { width } = selectedItem.value.getBoundingClientRect()
        indicator.value.style.width = width + 'px'
        const { left: left1 } = container.value.getBoundingClientRect()
        const { left: left2 } = selectedItem.value.getBoundingClientRect()
        const left = left2 - left1
        indicator.value.style.left = left + 'px'
      })
    })

    const defaults = ctx.slots.default()
    defaults.forEach((tag) => {
      if (tag.type !== TabDemo) {
        throw new Error('TabsDemo子组件必须是TabDemo')
      }
    })
    const current = computed(() => {
      return defaults.find(tag =>tag.props.title === props.selected)
    })
    const titles = defaults.map((tag) => {
      return tag.props.title
    })
    const select = (title: string) => {
      ctx.emit('update:selected', title)
    }

    return {
      defaults,
      titles,
      select,
      indicator,
      container,
      selectedItem,
      current
    }
  },
}
</script>
<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;

.gugu-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
      &-indicator {
        position: absolute;
        height: 3px;
        background: $blue;
        left: 0;
        bottom: -1px;
        width: 100px;
        transition: all 250ms;
      }
    }
  }
  &-content {
    padding: 8px 0;
    &-item {
      display: none;
      &.selected {
        display: block;
      }
    }
  }
}
</style>
