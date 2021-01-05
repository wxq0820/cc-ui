<demo>
危险等级
</demo>
<template>
  <ButtonDemo level="main" @click="onClick">你好</ButtonDemo>
  <ButtonDemo @click="onClick">你好</ButtonDemo>
  <ButtonDemo level="danger" @click="onClick">你好</ButtonDemo>
  <br />
  <ButtonDemo theme="link" level="main" @click="onClick">你好</ButtonDemo>
  <ButtonDemo theme="link" @click="onClick">你好</ButtonDemo>
  <ButtonDemo theme="link" level="danger" @click="onClick">你好</ButtonDemo>
  <br />
  <ButtonDemo theme="text" level="main" @click="onClick">你好</ButtonDemo>
  <ButtonDemo theme="text" @click="onClick">你好</ButtonDemo>
  <ButtonDemo theme="text" level="danger" @click="onClick">你好</ButtonDemo>
</template>

<script lang="ts">
import ButtonDemo from '../lib/buttonDemo.vue'
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
