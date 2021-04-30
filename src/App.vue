<template>
  <div id="app">
    <header_com class="header"></header_com>
    <router-view></router-view>
  </div>
</template>

<script>
import header_com from "./components/header/header_com.vue";
export default {
  components: { header_com },
  name: "App",
};
</script>

<style scoped>
.header{
  position:fixed;
}

</style>
