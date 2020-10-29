<template>
  <div class="gugu-dialog-overlay"></div>
  <div class="gugu-dialog-wrapper">
    <header>标题</header>
    <main>
      <p>第一行</p>
      <p>第二行</p>
    </main>
    <footer>
      <ButtonDemo>取消</ButtonDemo>
      <ButtonDemo>确认</ButtonDemo>
    </footer>
  </div>
</template>
<script lang="ts">
import ButtonDemo from './buttonDemo.vue'
export default {
  components: { ButtonDemo },
}
</script>
