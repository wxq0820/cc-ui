<template>
  <div>
    hi|<router-link to="/">frank</router-link>|
    <router-link to="/xxx">frank2</router-link>
  </div>
  <router-view />
</template>

<script>
export default {
  name: 'App',
}
</script>
