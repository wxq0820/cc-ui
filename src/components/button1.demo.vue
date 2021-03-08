<demo>
常规用法
</demo>
<template>
    <ButtonDemo @click="onClick">你好</ButtonDemo>
    <ButtonDemo theme="button" @click="onClick">你好</ButtonDemo>
    <ButtonDemo theme="link" @click="onClick">你好</ButtonDemo>
    <ButtonDemo theme="text" @click="onClick">你好</ButtonDemo>
</template>

<script lang='ts'>
import {ButtonDemo} from '../lib/index'
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