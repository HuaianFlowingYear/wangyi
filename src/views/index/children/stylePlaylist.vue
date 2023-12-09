<template>
    <Card :title="resource.uiElement.subTitle.title"  class=" w-[90vw] overflow-hidden mb-6 ml-[-3vw] mt-[1vw] text-[4.5vw] h-[80vw]"> 
        <Scroll class="mt-[-5vw]" >
        <div class="flex overflow-hidden"
          :style="{ width: `${this.resource.creatives.length * 70}vw` }">
          <div class="w-[90vw] h-[66vw] mt-[1vw]" v-for="creative in this.resource.creatives" :key="creative.id">
            <div v-for="resources in creative.resources" :key="resources.id" class="w-[70vw] h-[10vw] flex mt-[9vw] ">
                <img :src="resources.uiElement.image.imageUrl" alt="" class="w-[16vw]  h-[16vw] rounded-[8px]">
                <div class="text-[3vw] ml-[3vw]">
                  <span>{{ resources.uiElement.mainTitle.title }}</span>
                  <p class="text-[2vw] text-gray-400" v-if="resources.uiElement.subTitle">{{ resources.uiElement.subTitle.title }}</p>
                </div>
            </div>
          </div>
        </div>
      </Scroll>
    
      
    </Card>
    

</template>

<script>
import Card from './card.vue';
import Scroll from "@/components/Scroll";
export default {
    components: { Card,Scroll },
    props: {
        resource: {
        type: Object,
        required: true,
        },
    },
    created() {
      console.log(this.resource.creatives)
    },
}
</script>

<style scoped>
img{
  border-radius: 12px;
}

</style>