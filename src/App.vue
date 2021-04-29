<template>
  <div id="app">
  <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
   watch: {
      '$route' (to) {
        document.title = to.meta.title || 'Your Website'
      }
    },
}
</script>

<style scoped>

</style>
