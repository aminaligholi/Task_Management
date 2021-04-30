<template>
  <div class="baseCard">
    <section class="status">
      <label  for="status">status:</label>
      <select @change="whoisChange()" class="selectForStatus" v-model="works.status" id="status">
        <option value="DONE">DONE</option>
        <option value="DOING">DOING</option>
        <option value="TODO">TODO</option>
      </select>
      <button v-if="getUserInformationEntered.rol != 'User'" @click="del()" class="delete">
        del
      </button>
    </section>
    <section class="createBy">createBy:{{ works.createBy }}</section>
    <section class="lastChengeBy">
      lastChengeBy:{{ works.lastChengeBy }}
    </section>
    <section class="dudTime">
    <p>dudTime:</p>
    <input @change="whoisChange()" type="text" v-model=" works.dudTime " />
    </section>
    <section class="description">
    <p> description:</p>
    <textarea  v-if="getUserInformationEntered.rol != 'User'" @change="whoisChange()" cols="30" rows="10" type="text" v-model="works.description" ></textarea>
    <textarea disabled v-if="getUserInformationEntered.rol == 'User'" cols="30" rows="10" type="text" v-model="works.description" ></textarea>
  </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: "workCart",
  props: {
    works: {
      type: Object,
    },
  },
  computed:{
      ...mapGetters(['getUserInformationEntered'])
  },
  methods:{
      whoisChange(){
          this.works.lastChengeBy=this.getUserInformationEntered.fullname
      }
  }
};
</script>

<style scoped>
.baseCard {
  width: 95%;
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  border: 1px solid brown;
  border-radius: 3px;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 0, 0.541);
  padding-top: 10px;
}
section {
  border-bottom: 1px dotted yellow;
  padding: 5px;
}
.delete {
  background-color: red;
  color: white;
  width: 30px;
}
.status {
  width: 85%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.selectForStatus{
  margin-right: auto;
}
.createBy,.lastChengeBy,.dudTime{
    margin-right: auto;
}
textarea{
    padding: 10px;
     resize: none;
}
</style>