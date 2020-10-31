<template>
  <ButtonDemo @click="toggle">toggle</ButtonDemo>
  <DialogDemo :cancel="f2" :ok="f1" v-model:visible="visible" :closeOnClickOverlay="false"></DialogDemo>
</template>
<script lang="ts">
import DialogDemo from '../lib/dialogDemo.vue'
import ButtonDemo from '../lib/buttonDemo.vue'
import { ref } from 'vue'
export default {
  components: { ButtonDemo, DialogDemo },
  setup() {
    const visible = ref(false)
    const toggle = () => {
      visible.value = !visible.value
    }
    const f1 = ()=>{ return false }
    const f2 = ()=>{}
    return { visible, toggle, f1, f2 }
  }
}
</script>
