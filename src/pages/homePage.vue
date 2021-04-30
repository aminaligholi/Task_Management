<template>
  <div class="body">
    <UserCard
      v-for="(item, index) in SubordinateUsers"
      :key="index"
      :userInformation="item"
      
    >
    </UserCard>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import UserCard from "../components/Card/UserCard";
export default {
  name: "homePage",
  data() {
    return {
      SubordinateUsers: [],
    };
  },
  components: { UserCard },
  computed: {
    ...mapGetters(["getUserInformationEntered", "getAllUsers"]),
  },
  methods: {
    loadPage() {
      let rol = this.getUserInformationEntered.rol;
      console.log(rol);
      console.log(this.getAllUsers);
      if (rol == "Admin") {
        this.getAllUsers.forEach((eleme) => {
          if (eleme.rol == "User" || eleme.rol == "Management") {
            this.SubordinateUsers.push(eleme);
          }
        });
        return;
      }
      if (rol == "Management") {
        this.getAllUsers.forEach((eleme) => {
          if (eleme.rol == "User") {
            this.SubordinateUsers.push(eleme);
          }
        });
        return;
      }
      if (rol == "User") {
        this.SubordinateUsers.push(this.getUserInformationEntered)
        return;
      }
    },
  },
  mounted() {
    this.loadPage();
  },
};
</script>

<style scoped>
.body {
  background-color: rgb(85, 111, 136);
  width: 100%;
  height: 100vh;
  overflow: scroll;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  flex-grow: 0;
  flex-shrink: 0;
  padding-top: 90px;
}
</style>