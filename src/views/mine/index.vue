<template>
    <div>
      <div class="pb-[12vw] relative">
          <nav class="bg-[#6186AB] z-[999] t-0 pl-[3.9vw] pr-[3.4vw] h-[13.5vw] flex items-center justify-between fixed text-[white]">
              <div class="flex items-center">
                  <router-link to="/index">
                      <icon icon="ph:arrow-left"  class="text-[7vw] text-[#fff]"/>
                  </router-link>
                  <div class="w-[42vw] h-[13.5vw] flex items-center overflow-hidden relative">
                      <span v-if="false"  class="text-[4.2vw] text-[#fff] ml-[4.7vw] absolute textScrolling whitespace-nowrap">
                          <span>{{ name }}</span>
                      </span>
                      <div class="text-[4.2vw] text-[#fff] ml-[4.7vw] relative" v-else>歌单</div>
                  </div>
                  <div class="px-[2vw] flex items-center justify-center h-[7vw] rounded-[20px] bg-[#dedede] bg-opacity-10 text-[#f8fefe] text-[3vw] ml-[5vw] font-semibold">
                      <icon icon="fluent:star-add-24-regular" class="text-[5vw] mr-[1vw]" />
                      <span>收藏</span>
                  </div>
              </div>
              <div class="flex items-center">
                  <icon icon="ic:twotone-search" class="text-[7vw] text-[#fff] mr-[5vw]" />
                  <icon icon="ant-design:more-outlined" class="text-[7vw] text-[#fff]" />
              </div>
          </nav>
          <div class="w-[100%] h-[82vw] transition-all duration-20 0 relative bg-gradient-to-br from-[#486D8D] to-[#6186AB] pb-[5vw] pl-[3.9vw] pr-[3.4vw] pt-[13.5vw]">
              <div class="fixed top-0 h-[13.5vw] w-[100vw] left-0 z-[998] opacity-0"></div>
              <div class="transition-all fade-in" v-show="flag==true"> 
                  <section class="h-[29vw] flex pt-[2.6vw] justify-between">
                      <div class="w-[24vw] h-[25vw] pt-[1vw] relative">
                          <img :src="coverImgUrl" class="w-[24vw] h-[24vw] rounded-[10px] relative z-[2]" alt="">
                          <div class="w-[20vw] h-[10vw] bg-opacity-20 bg-[#fff] absolute top-0 left-1/2 -translate-x-1/2 rounded-[6px] z-[1]"></div>
                          <div class="absolute top-0 left-0 pr-[1.4vw] pt-[2vw] justify-end font-[800] text-[#fff] flex items-center w-[24vw] z-[2] transform scale-80">
                              <icon class="text-[#fff] w-[3vw] h-[3vw]" icon="solar:play-bold" />
                              <span class="font-[800] text-[1.5vw]">{{ count }}</span>
                          </div>
                      </div>
                          <div class="w-[67vw] pr-[12vw]">
                          <p class="text-[#fff] text-[3.6vw] leading-[4.9vw] font-[800]">{{ name }}</p>
                          <div class="h-[10.5vw] flex items-center">
                              <img :src="avatarUrl" class="w-[6vw] h-[6vw] rounded-[50%]" alt="">
                              <span class="text-[2.73vw] ml-[2vw] mr-[1.5vw] text-[#fff] opacity-50">{{ nickname }}</span>
                              <span class="px-[2vw] py-[1.25vw] rounded-[50px] text-[2.2vw] text-[#fff] opacity-50 bg-opacity-20 bg-[#fff] flex items-center pr-[3.5vw]">
                                  <icon icon="material-symbols-light:add" class="text-[4vw] text-[#fff]" />
                                  关注
                              </span>
                          </div>
                          <div class="flex">
                              <div class="flex items-center justify-center pl-[2.5vw] pr-[1.5vw] py-[0.7vw] bg-opacity-20 bg-[#fff] text-[#fff] rounded-[4px] mr-[1.4vw]" v-for="(item,index) in tags" :key="index">
                                  <span class="text-[2.2vw]">{{ item }}</span>
                                  <icon icon="ic:outline-greater-than" class="text-[3vw] ml-[0.6vw]" />
                              </div>
                          </div>
                      </div>
                  </section>
                  <p class="h-[4vw] flex items-center w-[90vw] overflow-hidden mt-[3.8vw] justify-between">
                      <span class="text-[#fff] opacity-50 text-[2.8vw] whitespace-nowrap w-[83vw] overflow-hidden">{{ description }}</span>
                      <icon icon="ic:outline-greater-than" class="text-[3vw] ml-[0.6vw]" style="color: rgb(216, 228, 245);" />
                  </p>
              </div>
              <div class="fade-in" v-show="flag==false">
                  <div class="h-[10vw] flex items-center text-[#fff] opacity-50 text-[3vw]">喜欢这个歌单的用户也听了</div>
                  <BetterScroll>
                      <div class="flex scroll-content" :style="{width:`${this.subscribers.length * 30}vw`}">
                          <div class="w-[28vw] scroll-item mr-[2.5vw]" v-for="(item,index) in subscribers" :key="index">
                              <div class="w-[28vw] h-[28vw] rounded-[8px] overflow-hidden relative pt-[1vw]">
                                  <img :src="item.backgroundUrl" alt="" class="w-[28vw] h-[28vw] rounded-[8px] relative z-[1]">
                              </div>
                              <p class="dark:text-[#e3e5ec] text-[2.78vw] text-[#fff] mt-[2vw] scroll-item">{{ item.nickname }}</p>
                          </div>
                      </div>
                  </BetterScroll>
              </div>
              <div @click="flagBoolean" class="absolute right-[3.4vw] top-[15vw] w-[6vw] h-[6vw] rounded-[50%] bg-opacity-20 bg-[#fff] flex items-center justify-center">
                  <icon v-show="flag==true" icon="bytesize:chevron-bottom" class="text-[3vw] mt-[0.5vw]" />
                  <icon v-show="flag==false" icon="bytesize:chevron-top" class="text-[3vw] mt-[0.5vw]" />
              </div>
              <div class="flex items-center mt-[3.5vw]">
                  <div class="flex items-center justify-center h-[9.9vw] rounded-[200px] bg-opacity-20 bg-[#fff] font-[800] flex-1 text-[#f8fefe] text-[3vw]">
                      <icon icon="majesticons:share" class="text-[5vw] mr-[1.8vw]" />
                      {{ shareCount }}
                  </div>
                  <div class="flex items-center justify-center h-[9.9vw] rounded-[200px] bg-opacity-20 bg-[#fff] font-[800] flex-1 text-[#f8fefe] text-[3vw]">
                      <icon icon="humbleicons:chat" class="text-[5vw] mr-[1.8vw]" />
                      {{ commentCount }}
                  </div>
                  <div class="flex items-center justify-center h-[9.9vw] rounded-[200px] bg-[#ff2658] font-[800] flex-1 text-[#f8fefe] text-[3vw]">
                      <icon icon="fluent:star-add-28-filled" class="text-[5vw] mr-[1.8vw]" />
                      {{ subscribedCount }}
                  </div>
              </div>
          </div>
      </div>
      <div class="bg-[#fff] w-[100vw] rounded-[15px] relative z-[1] mt-[-2.5vw] px-[3.8vw]">
          <nav class="h-[13vw] flex items-center justify-between">
              <div class="flex items-center">
                  <icon icon="carbon:play-filled" class="text-[#ED3E20] text-[8vw]" />
                  <span class="text-[#25272C] text-[3.7vw] ml-[3.9vw] mr-[2.3vw]">播放全部</span>
                  <span class="text-[#8C9094] text-[2.7vw]">({{ trackCount }})</span>
              </div>
              <div class="flex items-center">
                  <icon icon="iconoir:download" class="text-[5vw] text-[#2C3034]" />
                  <icon icon="ri:menu-add-line" class="text-[6vw] text-[#2C3034] ml-[5vw] mt-[1vw] iconify iconify--solar" />
              </div>
          </nav>
          <div>
              <div v-for="(item,index) in tracksList" :key="item.id" class="flex items-center h-[14vw]">
                  <div class="w-[4vw] text-[#bfbfbf] text-[3vw] text-center mr-[3.52vw] font-medium">{{ index+1 }}</div>
                  <div class="font-medium text-[3.6vw] w-[64vw]">
                      <div class="text-[3.6vw] text-ellipsis overflow-hidden whitespace-nowrap w-[50vw] text-[#949797]">
                          <span class="text-ellipsis text-[#000]">{{ item.name }}</span>
                          <span class="text-[#949797]" v-if="item.alia.length>0">{{ item.alia[0] }}</span>
                      </div>
                      <div class="w-[64vw] text-ellipsis overflow-hidden whitespace-nowrap text-[#808080] text-[2.8vw] flex items-center">
                          <span class="w-[8.5vw] h-[6vw] rounded-[3px] border-[1px] border-[red] font-[800] text-[3vw] text-[red] text-center leading-[6vw] scale-50 ml-[-2vw] mr-[-1vw]" v-if="item.originCoverType==1">vip</span>
                          <span class="w-[8.5vw] h-[6vw] rounded-[3px] border-[1px] border-[#60BDEF] text-[3vw] text-[#60BDEF] text-center leading-[6vw] scale-50 ml-[-2vw] mr-[-1vw]" v-if="item.originCoverType==1">试听</span>
                          <span>{{ item.ar[0].name }}-{{ item.al.name }}</span>
                      </div>
                  </div>
                  <icon icon="mdi:play-box-outline" class="ml-[4.6vw] text-[6vw] text-[#B3B3B3] mt-[-2vw]"/>
                  <icon icon="mingcute:more-2-line" class="ml-[4.6vw] text-[5vw] text-[#B3B3B3] mt-[-2vw]" />
              </div>
          </div>
      </div>
    </div>
  </template>
  
  <script>
  import { personaLized } from "@/service";
//   import BetterScroll from "@/components/BetterScroll.vue";
  export default {
    // components: { BetterScroll},
    name: "NeteasecloudPerson",
  
    data() {
      return {
          name:"",
          coverImgUrl:"",
          count:"",
          avatarUrl:"",
          nickname:"",
          tags:[],
          description:"",
          subscribers:[],
          shareCount:"",
          commentCount:"",
          subscribedCount:"",
          trackCount:"",
          tracksList:[],
          flag:true
      };
    },
  
    async created() {
      const [err, res] = await personaLized({
        id: this.$route.query.personid,
        s: 5,
      });
      if (!err) console.log(res);
      const dataPlaylist = res.data.playlist;
      this.name = dataPlaylist.name
      this.coverImgUrl = dataPlaylist.coverImgUrl
      this.count = dataPlaylist.playCount
      this.avatarUrl = dataPlaylist.creator.avatarUrl
      this.nickname = dataPlaylist.creator.nickname
      this.tags = dataPlaylist.tags
      this.description =dataPlaylist.description
      this.subscribers = dataPlaylist.subscribers
      this.shareCount = dataPlaylist.shareCount
      this.commentCount = dataPlaylist.commentCount
      this.subscribedCount = dataPlaylist.subscribedCount
      this.trackCount = dataPlaylist.trackCount
      this.tracksList = dataPlaylist.tracks
      console.log(this.tracksList);
    },
    methods:{
      flagBoolean(){
          this.flag = !this.flag
      }
    }
  };
  </script>
  
  <style lang="scss" scoped>
  
  </style>