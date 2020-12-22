<template>
  <div>Tabs示例</div>
  <h1>Demo1</h1>
  <TabsDemo v-model:selected="s">
    <TabDemo title="title1">内容1</TabDemo>
    <TabDemo title="title22222">内容2</TabDemo>
  </TabsDemo>
</template>
<script lang="ts">
import TabsDemo from '../lib/tabsDemo.vue'
import TabDemo from '../lib/tabDemo.vue'
import { ref } from 'vue'
export default {
  components: {
    TabsDemo,
    TabDemo,
  },
  setup() {
    const s = ref('title1')
    return { s }
  },
}
</script>
