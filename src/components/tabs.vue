<template>
  <div>Tabs示例</div>
  <Demo :component="TabsDemo1"/>
</template>
<script lang="ts">
import Demo from './demo.vue'
import TabsDemo1 from './tabs1.demo.vue'
export default {
  component: {Demo},
  setup() {
    return {Demo,TabsDemo1}
  }
}
</script>