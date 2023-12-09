<template>
    <!-- <Card :title="resource.uiElement.subTitle.title"  class="w-[90vw] ml-[1vw] mt-[2vw] overflow-hidden"> -->
        <div class="swiper-container ml-[-1vw] mySwiper3 w-[95vw] h-[45vw] m-[auto] rounded-[3vw] text-center bg-red-100">
          <div class="swiper-wrapper">
              <div class="swiper-slide w-[100%] h-[100%]" v-for="item in bannerArr" :key="item.encodeId" >
                  <img :src="item.imageUrl" class="w-[100%] h-[100%]">
              </div>
          </div>
          <!-- <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div> -->
          <div class="swiper-pagination"></div>

      </div>
    <!-- </Card> -->
    
  </template>
  
  <script>
  import Swiper from "swiper"
  import "swiper/css/swiper.min.css"
//   import Card from './card.vue';
  import { getBanners } from "@/service"
  export default {
    // components:{Card},
      data(){
          return {
              bannerArr:[]
          }
      },
      async created(){
        const [err,res] = await getBanners({type:0})
        if (err) return console.log(1)
        // console.log('轮播图数据',res.data.banners);
        this.bannerArr = res.data.banners
      },
        updated(){
          new Swiper(".mySwiper3", {
          spaceBetween: 30,
          centeredSlides: true,
          loop: true,
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
  
  <style scoped>
  .swiper-container {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }  
  </style>