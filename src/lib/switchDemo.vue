<template>
    <button @click="toggle" :class="{checked: value}"><span></span></button>
</template>

<style lang="scss" scoped>
    $h: 22px;
    $h2: $h - 4px;
    button{
        height: $h;
        width: $h2*2;
        border: none;
        background:#aaa;
        border-radius: $h/2;
        position: relative;
    }
    span{
        position: absolute;
        top: 2px;
        left: 2px;
        height: $h2;
        width: $h2;
        background: white;
        border-radius: $h2/2;
        transition: left 250ms;
    }
    button.checked {
        background: blue;
    }
    button.checked span {
        left: calc(100% - #{$h2} - 2px);
    }
    button:focus {
        outline: none;
    }
</style>

<script lang='ts'>
import { ref } from 'vue'
export default {
    props: {
        value: Boolean
    },
    setup(props, ctx) {
        const toggle = ()=> {
            ctx.emit('update:value', !props.value)
        }
        return {toggle}
    }
}
</script>