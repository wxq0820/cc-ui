<demo>
尺寸
</demo>
<template>
    <ButtonDemo size="big" @click="onClick">你好</ButtonDemo>
    <ButtonDemo @click="onClick">你好</ButtonDemo>
    <ButtonDemo size="small" @click="onClick">你好</ButtonDemo>
    <br/>
    <ButtonDemo theme="link" size="big" @click="onClick">你好</ButtonDemo>
    <ButtonDemo theme="link" @click="onClick">你好</ButtonDemo>
    <ButtonDemo theme="link" size="small" @click="onClick">你好</ButtonDemo>
    <br/>
    <ButtonDemo theme="text" size="big" @click="onClick">你好</ButtonDemo>
    <ButtonDemo theme="text" @click="onClick">你好</ButtonDemo>
    <ButtonDemo theme="text" size="small" @click="onClick">你好</ButtonDemo>
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