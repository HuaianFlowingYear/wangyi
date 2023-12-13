<template>
  <Card :title="resource.uiElement.subTitle.title"  class="w-[90vw] ml-[-3vw] mt-[12vw] h-[90vw] overflow-hidden">
   <Scroll>
     <div
       class="flex"
       :style="{ width: `200vw` }">
       <div v-for="creative in this.resource?.creatives" :key="creative.id" class=" mr-[2vw] relative overflow-hidden">
         <Icon icon="ph:play-fill" color="white" class="absolute bottom-[8vw] right-[1vw] text-[4vw]"/>
         <span></span>
         <router-link :to="{ path: '/musiclist', query: {id:creative.creativeId} }">
            <img
            class="w-[30vw] h-[30vw] rounded-[8px] overflow-hidden"
            :src="creative.uiElement.image.imageUrl"
            alt=""
          />
         </router-link>
        
         <div class="text-[2.5vw] w-[30vw]" >{{ creative.uiElement.mainTitle.title }}</div>
       </div>
     </div>
   </Scroll>
 </Card>
</template>

<script>
import Card from './card.vue';
import Scroll from "@/components/Scroll";
export default {
   components: { Card, Scroll },
   props: {
       resource: {
       type: Object,
       required: true,
       },
   },
   created() {
       // console.log(this.resource.creatives);
   },
}
</script>

<style>

</style>