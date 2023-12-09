<template>
  <div class="swiper-demo">
    <div class="swiper-container mySwiper" >
      <div class="swiper-wrapper">
        <div class="swiper-slide w-[100%] h-[100%]" v-for="item1 in bannerArr" :key="item1.encodeId">
          <img :src="item1.imageUrl" class="w-[100%] h-[100%]">
      </div>
      </div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-pagination"></div>
      <div class="autoplay-progress">
        <svg viewBox="0 0 48 48">
          <circle cx="24" cy="24" r="20"></circle>
        </svg>
        <span></span>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
// import axios from 'axios'
import { getBanners} from '@/service/index'
export default {
  data(){
        return {
            bannerArr:[]
        }
    },
    async created(){
        const [err,res] = await getBanners({type:0})
        if (err) return console.log(err)
        // console.log('轮播图数据',res.data.banners);
        this.bannerArr = res.data.banners
    },
  updated(){
    new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
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
.swiper-demo{
  margin-top: -40vw;
  height: 160px;
  border-radius: 20px;
}

.swiper-slide {
  border-radius: 15px;
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  border-radius: 16px;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.autoplay-progress {
  position: absolute;
  right: 16px;
  bottom: 16px;
  z-index: 10;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: var(--swiper-theme-color);
}

.autoplay-progress svg {
  --progress: 0;
  position: absolute;
  left: 0;
  top: 0px;
  z-index: 10;
  width: 100%;
  height: 100%;
  stroke-width: 4px;
  stroke: var(--swiper-theme-color);
  fill: none;
  stroke-dashoffset: calc(125.6 * (1 - var(--progress)));
  stroke-dasharray: 125.6;
  transform: rotate(-90deg);
}
</style>