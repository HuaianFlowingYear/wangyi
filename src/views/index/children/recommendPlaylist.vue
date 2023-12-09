<template>
  <Card :title="resource.uiElement.subTitle.title"  class="w-[90vw] ml-[-3vw] mt-[2vw] overflow-hidden">
   <Scroll>
     <div
       class="flex"
       :style="{ width: `200vw` }">
       <div v-for="creative in this.resource.creatives" :key="creative.id" class="w-[30vw] h-[38vw]  mr-[2vw] relative ">
        <div v-if="creative.resources.length>1" class="wgi w-[30vw]">
          <Icon icon="iconoir:infinite" color="white"  class="absolute top-[2vw] left-[23vw] z-10 text-[5vw]"/>
          <Icon icon="ph:play-fill" color="white" class="absolute bottom-[8vw] right-[1vw] text-[4vw]"/>
          <div class="swiper-container mySwiper2 w-[30vw]">
            <div class="swiper-wrapper w-[30vw]" > 
              <div class="swiper-slide" v-for="item1 in creative.resources" :key="item1.encodeId">            
                  <img :src="item1.uiElement.image.imageUrl" class="rounded-[8px] mb-[3vw]" alt="">
                <div class="text-[2.5vw] w-[36vw] mt-[3vw]" >{{ item1.uiElement.mainTitle.title }}</div>
              </div>
            </div>
          </div>
        </div>
         <div v-else>
          <Icon icon="ph:play-fill" color="white" class="absolute bottom-[8vw] right-[1vw] text-[4vw]"/>
          <router-link :to="{ path: '/musiclist', query: {id:creative.creativeId} }">
            <!-- creative.id -->
            <img :src="creative.resources[0].uiElement.image.imageUrl" alt="" class="w-[31vw] h-[31vw] shadow-md -top-0 border-t-4 border-gray-300 rounded-[8px] relative z-[1]">
          </router-link>
          <div class="text-[2.5vw] w-[36vw]" >{{ creative.uiElement.mainTitle.title }}</div>
         </div>
       </div>
     </div>
   </Scroll>
 </Card>
</template>

<script>
import Card from './card.vue';
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import Scroll from "@/components/Scroll";
// import { Popup } from 'vant';

// Popup
export default {
   components: { Card, Scroll, },
   props: {
       resource: {
       type: Object,
       required: true,
       },
   },
   data() {
    return {
      show: false,
    };
  },
   methods:{
tNumber(num) {
        num = Number(num);
        if (num == 0 || (num > 0 && num < 10000)) {
            return num + "";
          } else {
            return (num / 10000).toFixed(0) + "万";
        }
      },
      showPopup() {
      this.show = true;
    },
    
    },
   created() {
       console.log(this.resource.creatives);
      
     
   },
   mounted(){
    new Swiper(".mySwiper2", {
      loop: true,
      spaceBetween: 30,
      direction: "vertical",
      centeredSlides: true,
      effect: "creative",
      creativeEffect: {
        prev: {
          shadow: true,
          translate: ["-120%", 0, -500],
        },
        next: {
          shadow: true,
          translate: ["120%", 0, -500],
        },
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
   
  }
}
</script>

<style>

</style>