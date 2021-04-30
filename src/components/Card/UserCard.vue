<template>
  <div class="user">
    <div :class="`rol-${userInformation.rol}`">{{ userInformation.rol }}</div>
    <div class="nameandadd">
      <p class="name">{{ userInformation.fullname }}</p>
      <button :disabled="getUserInformationEntered.rol=='User'" @click="openModalAddWork = true" class="addWork">
        <img src="../../assets/plus.png" width="20" height="20" />
      </button>
    </div>
    <div class="work">
      <work-card v-for="work in dataa" :key="work.id" :works="work" :userId="userInformation.id"></work-card>
    </div>
    <div v-if="openModalAddWork" class="ModalAddWork">
      <div class="addWorkBox">
        <div class="title">
          <div class="status">
            <label for="status">status: </label>
            <select v-model="newStatus" class="selectForStatus" id="status">
              <option value="TODO">TODO</option>
              <option value="DOING">DOING</option>
              <option value="DONE">DONE</option>
            </select>
          </div>
          <div class="dudTime">
            <label for="dudTime">dudTime: </label>
            <input v-model="newDudTime" type="text" id="dudTime" />
          </div>
        </div>
        <div class="disc">
          <label for="description">description: </label>
          <textarea
            v-model="newDescription"
            rows="5"
            cols="20"
            type="text"
            id="description"
          >
          </textarea>
        </div>
        <div class="btns">
          <button @click="openModalAddWork = false" class="btnsubmit cancel">
            cancel
          </button>
          <button @click="addwork()" class="btnsubmit done">submit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import WorkCard from "./workCard.vue";
export default {
  components: { WorkCard },
  name: "UserCard",
  props: {
    userInformation: {
      type: Object,
    },
  },
  computed: {
    ...mapGetters(["getUserInformationEntered"]),
    dataa() {
      return this.userInformation.works;
    },
  },
  data() {
    return {
      openModalAddWork: false,
      newStatus: "",
      newDudTime: "",
      newDescription: "",
    };
  },
  methods: {
   async addwork() {
     if(this.newStatus =="" || this.newDudTime=="" || this.newDescription==""){
    this.$swal.fire("Warning", "Please complete all fields.", "error").then(()=>{
      this.newStatus=''
      this.newDudTime=''
      this.newDescription=''
    })
    
    return
    }
      let userForAddWork = {};
      this.$store.state.users.forEach((elem) => {
        if (elem.id == this.userInformation.id) {
          userForAddWork = elem;
        }
      });
      userForAddWork.works.push({
        id: `${this.userInformation.works.length + 1}`,
        createBy: `${this.getUserInformationEntered.fullname}`,
        lastChengeBy: `${this.getUserInformationEntered.fullname}`,
        status: `${this.newStatus}`,
        dudTime: `${this.newDudTime}`,
        description: `${this.newDescription}`,
      });
      console.log("this.userInformation.works**********");
      console.log(this.userInformation.works);
      this.openModalAddWork = false;
      this.newStatus = "";
      this.newDudTime = "";
      this.newDescription = "";
    },
  },
};
</script>

<style scoped>
.user {
  width: 300px;
  border: 2px solid rgba(137, 255, 147, 0.514);
  flex-grow: 0;
  flex-shrink: 0;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.rol-Management {
  width: 98%;
  font-size: 18px;
  height: 40px;
  color: darkgreen;
  background-color: lightcyan;
  text-align: center;
  padding-top: 10px;
  font-weight: 900;
}
.rol-User {
  width: 98%;
  font-size: 18px;
  height: 40px;
  color: rgb(255, 255, 255);
  background-color: rgb(151, 201, 14);
  text-align: center;
  padding-top: 10px;
  font-weight: 900;
}

.nameandadd {
  width: 98%;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: dimgrey;
}
.name {
  width: 60%;
  font-size: 14px;
  color: rgb(255, 255, 255);
  margin: 1%;
}
.addWork {
  width: 10%;
  font-size: 14px;
  color: rgb(255, 255, 255);
  margin: 2%;
  background-color: chartreuse;
  text-align: center;
}
.work {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.ModalAddWork {
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.507);
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
}
.addWorkBox {
  width: 40%;
  margin: auto;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  border: 2px solid gold;
  background-color: rgba(213, 255, 246, 0.616);
  align-items: center;
}
.title {
  width: 90%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.selectForStatus {
  margin-right: auto;
}
.dudTime,
.status {
  margin-top: 10px;
}
.disc {
  width: 90%;
  margin-top: 20px;
}
textarea {
  resize: none;
  width: 100%;
}
.btns {
  margin: 10px;
  margin-left: auto;
}
.btnsubmit {
  margin: 5px;
  width: 50px;
}
.done {
  background-color: green;
  color: white;
}
.cancel {
  background-color: red;
  color: white;
}
</style>