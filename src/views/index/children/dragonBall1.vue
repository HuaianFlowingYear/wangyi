<template>
    <div class="w-[90vw] overflow-hidden ml-[-5vw] mt-[2vw] text-[3vw] h-[26vw]">
      <Scroll class="mt-[2vw]">
          <div class="flex w-[210vw] relative">
              <span class="absolute top-[6vw] left-[6vw] text-white text-[4vw]" >{{ dates }}</span>
              <div v-for="creative in this.resource.creatives[0].resources" :key="creative.id" class="w-[21vw] scroll-item flex items-center justify-center flex-wrap mr-[3vw]">
                  <img :src="creative.uiElement.image.imageUrl2" alt="" class=" w-[20vw]">
                  <div class="dark:text-[#bcbec5] text-[#666F7D] text-center text-[2.78vw] w-[100%] mt-[-2vw]">
                      {{ creative.uiElement.mainTitle.title }}
                  </div>
              </div>
          </div>
      </Scroll>
    </div>
  </template>
  
  <script>
  import Scroll from "@/components/Scroll";
  export default {
      components: { Scroll },
      data(){
          return {
              dates:new Date().getDate()
          }
      },
      props: {
          resource: {
          type: Object,
          required: true,
          },
      },
      created() {
      //   console.log(new Date().getDate());
      },
  }
  </script>
  
  <style>
  
  </style>