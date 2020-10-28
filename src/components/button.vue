<template>
    <div>
    button示例
    </div>
    <h1>Demo1</h1>
    <ButtonDemo @click="onClick">你好</ButtonDemo>
    <ButtonDemo theme="button" @click="onClick">你好</ButtonDemo>
    <ButtonDemo theme="link" @click="onClick">你好</ButtonDemo>
    <ButtonDemo theme="text" @click="onClick">你好</ButtonDemo>
</template>

<script lang='ts'>
import ButtonDemo from '../lib/buttonDemo.vue'
export default {
    components: {ButtonDemo},
    setup() {
        const onClick = ()=>{
            console.log('hello')
        }
        return {onClick}
    }
}
</script>