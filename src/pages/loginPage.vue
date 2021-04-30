<template>
  <div class="body">
    <div class="loginBox">
      <h3>Please enter your username and password</h3>
      <section class="userNamePart">
        <label for="username"> UserName: </label>
        <input id="username" v-model="username" type="text" />
      </section>
      <section class="passwordPart">
        <label for="password"> Password: </label>
        <input id="password" v-model="password" type="password" />
      </section>
      <button
        :disabled="!username || !password"
        @click="sendForCheck()"
        class="submit"
      >
        Login!
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "loginPage",
  data() {
    return {
      password: "",
      username: "",
    };
  },
  methods: {
    ...mapActions({
      Verification: "Verification",
    }),
    sendForCheck() {
      let data = { username: this.username, password: this.password };
      this.Verification(data).then((req) => {
          if(req.status==200){
              this.$swal.fire("welcome", "We are very happy to see you again.", "success")
              .then(()=>{this.$router.push('/homePage')
              console.log(this.$router)})
          }else{
                 this.$swal.fire("Warning", "Your username or password is incorrect.", "error").then(()=>{
                     this.username='';
                     this.password='';
                 })
                 
          }

          
      });
    },
  },
  computed: {
    ...mapGetters(["getamin"]),
  },
  watch: {},
  mounted() {},
};
</script>

<style scoped>
.body {
  width: 100%;
  height: 100vh;
  background-color: lightslategray;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
}

.body .loginBox {
  width: 500px;
  height: 300px;
  border-radius: 20px;
  background-color: ivory;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 10px;
  box-shadow: 2px 2px 3px rgb(32, 32, 32), 3px 3px 3px rgb(39, 39, 39);
}
.loginBox h3 {
  text-align: center;
}
.userNamePart,
.passwordPart {
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.userNamePart label,
.passwordPart label {
  width: 30%;
}
.userNamePart input,
.passwordPart input {
  width: 65%;
  color: slateblue;
}
.submit {
  width: 30%;
  height: 30px;
  font-size: 14px;
  background-color: rgb(94, 255, 0);
  border: 1 solid lawngreen !important;
  outline: none;
  border-radius: 5px;
}

.submit:hover {
  border: 1px solid rgb(128, 0, 0);
}
.loginBox button {
  border: none;
}
</style>