<template>
    <div>
    button示例
    </div>
    <h1>Demo1</h1>
    <ButtonDemo @click="onClick">你好</ButtonDemo>
    <ButtonDemo theme="button" @click="onClick">你好</ButtonDemo>
    <ButtonDemo theme="link" @click="onClick">你好</ButtonDemo>
    <ButtonDemo theme="text" @click="onClick">你好</ButtonDemo>
    <h1>Demo2</h1>
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
    <h1>Demo3</h1>
    <ButtonDemo level="main" @click="onClick">你好</ButtonDemo>
    <ButtonDemo @click="onClick">你好</ButtonDemo>
    <ButtonDemo level="danger" @click="onClick">你好</ButtonDemo>
    <br/>
    <ButtonDemo theme="link" level="main" @click="onClick">你好</ButtonDemo>
    <ButtonDemo theme="link" @click="onClick">你好</ButtonDemo>
    <ButtonDemo theme="link" level="danger" @click="onClick">你好</ButtonDemo>
    <br/>
    <ButtonDemo theme="text" level="main" @click="onClick">你好</ButtonDemo>
    <ButtonDemo theme="text" @click="onClick">你好</ButtonDemo>
    <ButtonDemo theme="text" level="danger" @click="onClick">你好</ButtonDemo>
    <h1>Demo4</h1>
    <ButtonDemo @click="onClick" loading>你好</ButtonDemo>
    <ButtonDemo @click="onClick">你好</ButtonDemo>
    <h1>Demo5</h1>
    <ButtonDemo @click="onClick" disabled>你好</ButtonDemo>
    <ButtonDemo @click="onClick" theme="link" disabled>你好</ButtonDemo>
    <ButtonDemo @click="onClick" theme="text" disabled>你好</ButtonDemo>
   

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