<demo>
常规用法
</demo>
<template>
  <ButtonDemo @click="show">showDialog</ButtonDemo>
</template>
<script lang="ts">
import {openDialog, ButtonDemo} from '../lib/index'
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