<template>
  <div>
  {{getamin}}
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    name:'loginPage',
    data(){
        return{

        }
    },
    methods:{},
    computed:{
        ...mapGetters(['getamin'])
    },
    watch:{},
    mounted(){},

}
</script>

<style>

</style>