<template>
  <Card :title="resource.uiElement.subTitle.title"  class=" w-[90vw] overflow-hidden mb-6 ml-[-3vw] mt-[1vw] text-[4.5vw] h-[80vw]"> 
      <Scroll class="mt-[-5vw]" >
      <div class="flex overflow-hidden mt-[20px]"
        :style="{ width: `${this.resource.creatives.length * 70}vw` }">
        <div class="ml-[2vw] dark:bg-[#25272e] dark:bg-gradient-n dark:from-000 dark:via-000 dark:to-000 shadows w-[88vw] h-[90vw] scroll-item bg-[#fff] mr-[2vw] rounded-[10px] pt-[4vw] pb-[3.8vw] bg-gradient-to from-ff8177 via-ff8c7f to-b12a5b mb-[2vw]" v-for="creative in this.resource.creatives" :key="creative.id">
          <div v-for="resources in creative.resources" :key="resources.id" class="w-[70vw] h-[10vw] mt-[9vw] ml-[3vw] ">
            <div class="flex">
                <img :src="resources.uiElement.image.imageUrl" alt="" class="w-[16vw]  h-[16vw] rounded-[8px]">
                <div class="text-[3vw] ml-[3vw]">
                  <span>{{ resources.uiElement.mainTitle.title }}</span>
                  <p class="text-[2vw] text-gray-400" v-if="resources.uiElement.subTitle">{{ resources.uiElement.subTitle.title }}</p>
                </div>
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