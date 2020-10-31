<template>
  <h1>Demo1</h1>
  <ButtonDemo @click="toggle">toggle</ButtonDemo>
  <DialogDemo
    :ok="f1"
    :cancel="f2"
    v-model:visible="visible"
    :closeOnClickOverlay="false"
  >
    <template v-slot:title>
      <strong>标题</strong>
    </template>
    <template v-slot:content>
      <h1>你好</h1>
      <p>hello</p>
    </template>
  </DialogDemo>
  <h1>Demo2</h1>
  <ButtonDemo @click="show">showDialog</ButtonDemo>
</template>
<script lang="ts">
import DialogDemo from '../lib/dialogDemo.vue'
import ButtonDemo from '../lib/buttonDemo.vue'
import {openDialog} from '../lib/openDialog'
import { ref } from 'vue'
export default {
  components: { ButtonDemo, DialogDemo },
  setup() {
    const visible = ref(false)
    const toggle = () => {
      visible.value = !visible.value
    }
    const f1 = () => {
      return false
    }
    const f2 = () => {}
    const show = () => {
        openDialog({title: '标题', content: '你好'})
    }
    return { visible, toggle, f1, f2, show }
  },
}
</script>
