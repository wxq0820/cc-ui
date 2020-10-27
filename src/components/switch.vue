<template>
    <div>
    <SwitchDemo v-model:value='y'/>
    </div>
</template>

<script lang='ts'>
import { ref } from 'vue'
import SwitchDemo from '../lib/switchDemo.vue'

export default {
    components: {SwitchDemo},
    setup() {
        const y = ref(false)
        return {y}
    }
}
</script>