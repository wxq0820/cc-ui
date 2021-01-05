<demo>
支持 disabled
</demo>
<template>
<SwitchDemo v-model:value="bool" disabled/>        
</template>
<script lang="ts">
import { ref } from 'vue'
import SwitchDemo from '../lib/switchDemo.vue'
export default {
  components: { SwitchDemo },
  setup() {
    const bool = ref(false)
    return { bool }
  }
}
</script>