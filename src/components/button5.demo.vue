<demo>
禁用按钮
</demo>
<template>
  <ButtonDemo @click="onClick" disabled>你好</ButtonDemo>
  <ButtonDemo @click="onClick" theme="link" disabled>你好</ButtonDemo>
  <ButtonDemo @click="onClick" theme="text" disabled>你好</ButtonDemo>
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
