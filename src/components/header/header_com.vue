<template>
  <div class="body">
    <section v-if="getheaderType == 'Title'" class="Title">
      <h1>Welcome To My Task Management</h1>
    </section>
    <section v-if="getheaderType == 'Menu'" class="Menu">
    <h3 > welcome {{getUserInformationEntered.fullname}}</h3>
    <button class="exit"  @click="exit()">Exit</button>
    </section>
  </div>
</template>

<script>
import {  mapGetters } from 'vuex';
export default {
  name: "header_com",
  data() {
    return {};
  },
  computed:{
    ...mapGetters(['getheaderType','getUserInformationEntered'])
  },
  methods:{
    exit(){
      this.$store.state.Authentication=false;
      this.$router.push('/login');
    }
  }

};
</script>

<style scoped>
.body {
  background-color: rgb(177, 117, 192);
  width: 100%;
  height: 90px;
  border-bottom: 3px solid rgba(128, 0, 128, 0.308);
  box-shadow: 1px 0px 20px rgb(128, 0, 128);
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.Title h1 {
  color: yellow;
  text-align: center;
}
.Menu{
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.exit{
  background-color: rgb(255, 158, 158);
  color: black;
  padding: 10px;
  width: 60px;
}
.exit:hover{
  background-color: red;
  color: yellow;
}
</style>