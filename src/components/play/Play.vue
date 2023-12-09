<template>
    <div tabindex="0" v-on:keydown.space="zanti" v-on:keydown.left="mixin_player.playPreviousTrack()" v-on:keydown.right="mixin_player.playNextTrack()">
        <div class="px-[4.5vw] bg-[#F9F9FA] h-[14.5vw] border-b-[1px] border-[#F5F8FA] flex items-center w-[100vw] fixed  z-[10] bottom-[14vw]">
            <div class="flex items-center">
                <div id="imgs" class="w-[10vw] h-[10vw] relative flex items-center justify-center rotateAnimation paused-animation">
                    <img src="https://admirable-jalebi-ce44af.netlify.app/static/d7e4e3a244701ee85fecb5d4f6b5bd57.png" alt="" class="absolute top-0 left-0 z-[1]">
                    <!-- <img :src=imgUrl alt="" class="w-[7vw] h-[7vw] rounded-[50%]">
                        :src="mixin_player.currentTrackDetail?.al?.picUrl"
                    -->
                    <img :src="mixin_player.currentTrackDetail?.al?.picUrl" alt="" class="w-[7vw] h-[7vw] rounded-[50%]">
                </div>
                <div class="text-[3vw] w-[60vw] text-ellipsis overflow-hidden whitespace-nowrap ml-[2vw]">
                    <span class="text-[#3E485E]">{{mixin_player.currentTrackDetail?.name}}</span>
                    <span class="text-[#7B8591]">-{{mixin_player.currentTrackDetail?.ar?.map(({name})=>name).join("/")}}</span>
                </div>
            </div>
            <div @click="play" class="w-[12.6vw]  pr-[4vw] h-[5.6vw] relative ml-[-6.2vw] overflow-hidden">
                    <van-circle :value="mixin_player.progress*1000" size="6vw" :speed="100">
                        <span @click="mixin_player.replaceTracks(musiclist.map(({id})=>id))">
                            <Icon icon="bi:play-fill" class="text-xl" v-show="!playing"/>
                        </span>
                        <span @click="mixin_player.pause()">
                            <Icon icon="lets-icons:stop-fill"  v-show="playing" />
                        </span>
                        <!-- <span @click="mixin_player.toggle()">
                            <Icon :icon="mixin_player ? 'lets-icons:stop-fill':'bi:play-fill'" />
                        </span> -->

                    </van-circle>
            </div>
            <div>
                <van-cell class="bg-[#F9F9FA] color-[#F9F9FA]" @click="showPopup">
                    <Icon icon="fontisto:play-list" class="text-[5vw] text-[#3b4152]"/>
                </van-cell>
                <van-popup v-model="show" round position="bottom" :style="{ height: '60%' }" >
                    <!-- <p class="h-[90vw]">当前播放</p> -->
                    <div class="rounded-t-[20px] px-[5.4vw]">
                        <div class="sticky top-0 z-50 left-0 bg-white py-[6vw]">
                            <h1 class="text-[4vw] font-extrabold">
                                当前播放
                                <span class="text-[2vw] text-[#929293]">({{musiclist.length}})</span>
                            </h1>
                            <div class="flex justify-between mt-[6.6vw] items-center">
                                <div class="flex">
                                    <Icon icon="icon-park-outline:loop-once" class="text-[6vw] text-[#B1B1B1]"/>
                                    <h1 class="ml-[1.5vw] text-[3.4vw] font-medium">列表循环</h1>
                                </div>
                                <div class="flex w-[30vw] justify-between">
                                    <Icon icon="material-symbols-light:download" class="text-[6vw] text-[#B1B1B1]"/>
                                    <Icon icon="fluent:collections-20-regular" class="text-[6vw] text-[#B1B1B1]" />
                                    <Icon icon="fluent-mdl2:delete" class="text-[6vw] text-[#B1B1B1]"/>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div v-for="(item,index) in musiclist" :key="item.id" class="flex justify-between items-center h-[14vw]" @click="playimg(index)">
                                <div @click="mixin_player.replaceTracks(musiclist.map(({id})=>id),musiclist.map(({id})=>id)[index])">
                                       <div class="flex items-center" @click="music(item.name,item.ar[0].name,item.al.picUrl)">
                                    <div  class="w-[4vw] text-[#bfbfbf] text-[3vw] text-center mr-[3.52vw] flex items-center justify-center">
                                        <span v-if="index!=num">{{ index+1}}</span>
                                        <img v-else src="https://admirable-jalebi-ce44af.netlify.app/static/wave.gif" class="bg-[red] w-[4vw] h-[3vw]" alt="">
                                    </div>
                                    <div class="text-[4.1vw] ml-[2vw] w-[60vw] line-clamp-1">
                                        <span class="px-[1vw] rounded-[3px] border-[1px] border-[red] font-[400] text-[3vw] text-[red] text-center leading-[6vw] scale-50"  v-if="item.originCoverType==1">
                                            vip
                                        </span>
                                        <span class="px-[0.5vw] rounded-[3px] border-[1px] border-[red] text-[3vw] text-[red] text-center leading-[6vw] scale-50 ml-[1vw] mr-[1vw]"  v-if="item.originCoverType==1">
                                            试听
                                        </span>
                                        {{item.name}}
                                        <span class="text-[3vw] text-[#BCBCBC]">-{{ item.ar[0].name}}</span>
                                    </div>
                                </div>
                                </div>
                             
                                <div class="flex items-center">
                                    <Icon icon="iwwa:delete" class="text-[5vw] text-[#B1B1B1]"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="h-[30vw]"></div>
                </van-popup>
            </div>
          </div>
    </div>
</template>

<script>


import { mapGetters } from 'vuex';
import { personaLized } from "@/service";

export default {
    name:'AudioPlayer',
    data() {
        return {  
            show: false,
            playing: false,
            currentRate: 0,
            tracks:[],
            musiclist:[],
            musicName:'',
            author:'',
            imgUrl:'',
            num:null
            // musicTrack:[]
        };
    },
    
    methods: {
        showPopup() {
            this.show = true;
        },
        text() {
            return this.currentRate.toFixed(0) + '%';
        },
        play() {
            const img = document.getElementById('imgs');
            this.playing = !this.playing;
            if (this.playing) {
                img.classList.add('rotating');
            }else{
                img.classList.remove('rotating');
            }
        },
        playimg(index){
            this.num = index;
        },
        music(name,zuojia,url){
          this.musicName = name; 
          this.author = zuojia;
          this.imgUrl = url;
        }
    },
    mounted() {
        setInterval(() => {
            if (this.playing) {
                this.currentRate -= 1;
            }
        }, 100);
    },
    async created() {
        const [err, res] = await personaLized({
        // id:this.$route.query.id,
            id:this.getSongId,
        });
        if (!err) this.musiclist = res.data.playlist.tracks;
        console.log('musiclist',this.musiclist);
        for(let i = 0;i<this.musiclist.length;i++){
            this.tracks.push(this.musiclist[i].dt);
        }
        // console.log('tracks',this.tracks);
    },
    computed: {
        ...mapGetters(['getSongId']),
        songId() {
            // console.log(this.getSongId);
            return this.getSongId;
        }
  }
};
</script>

<style scoped>
.rotating {
    animation: rotate 2s linear infinite;
  }
  
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
  
    100% {
      transform: rotate(360deg);
    }
  }
</style>