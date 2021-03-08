<demo>
加载中
</demo>
<template>
  <ButtonDemo @click="onClick" loading>你好</ButtonDemo>
  <ButtonDemo @click="onClick">你好</ButtonDemo>
</template>

<script lang="ts">
import {ButtonDemo} from '../lib/index'
export default {
  components: { ButtonDemo },
  setup() {
    const onClick = () => {
      console.log('hello')
    }
    return { onClick }
  },
}
</script>
