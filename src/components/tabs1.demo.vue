<demo>
常规用法
</demo>
<template>
  <TabsDemo v-model:selected="s">
    <TabDemo title="title1">内容1</TabDemo>
    <TabDemo title="title2">内容2</TabDemo>
  </TabsDemo>
</template>
<script lang="ts">
import {TabsDemo,TabDemo} from '../lib/index'
import { ref } from 'vue'
export default {
  components: {
    TabsDemo,
    TabDemo,
  },
  setup() {
    const s = ref('title1')
    return { s }
  }
}
</script>
