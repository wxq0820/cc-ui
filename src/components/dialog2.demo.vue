<demo>
常规用法
</demo>
<template>
  <ButtonDemo @click="show">showDialog</ButtonDemo>
</template>
<script lang="ts">
import ButtonDemo from '../lib/buttonDemo.vue'
import {openDialog} from '../lib/openDialog'
export default {
  components: { ButtonDemo },
  setup() {
    const show = () => {
        openDialog({title: '标题', content: '你好'})
    }
    return { show }
  },
}
</script>