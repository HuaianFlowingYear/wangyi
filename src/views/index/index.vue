<template>

  <div class="bg-[#F4F4F4] dark:bg-[#000] dark:text-[#fff] opacity-0.2 shou">
    <HeaterIndex></HeaterIndex> 
   <div class="content">
    <Block v-for="block in blocks" :resource="block" :key="block.id" />
   </div>
    <!-- <Play></Play> -->
    <Footer></Footer>
    
   
  </div>
 
</template>

<script>
import HeaterIndex from '@/components/HeaterIndex.vue';
import Block from "./children/block.vue";
// import Play from '@/components/Play.vue';
import { mapState } from "vuex";
export default {
    
    components: {
        HeaterIndex,
        Block,
        // Play,

    },
  
    computed:{
      ...mapState(["blocks"]),
    }
    
    
}
</script>

<style scoped>
    *{
        padding: 0;
        margin: 0;
    }
    .shou{
        height: auto;
        margin: 0 auto;
        overflow-x: hidden
    }
   
    body{
        background-color: #ccc !important;
    }
    .content {
        padding:6vw ;  
        /* 其他样式属性 */
      }
</style>