<template>
  <div>
    <button v-bind="rest">
      <slot />
    </button>
  </div>
</template>
<script lang='ts'>
export default {
    inheritAttrs: false,
    setup(props, ctx){
       const {size, ...rest} = ctx.attrs
       return {size, rest}
    }
}
</script>