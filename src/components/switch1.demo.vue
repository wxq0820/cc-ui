<demo>
常规用法
</demo>
<template>
<SwitchDemo v-model:value="bool" />
</template>
<script lang="ts">
import { ref } from 'vue'
import {SwitchDemo} from '../lib/index'
export default {
  components: { SwitchDemo },
  setup() {
    const bool = ref(false)
    return { bool }
  }
}
</script>