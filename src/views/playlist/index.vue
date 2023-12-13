<template>
    <div id="my-container" tabindex="0" v-on:keydown.space="xuan" >
      <div class="z-20 relative h-[100vh] pb-[12vw] bg-[rgb(117,112,101)]">
          <div class="absolute z-[3] flex flex-wrap h-[100%] pb-[7.5vw]">
              <div class="h-[15vw] w-[100vw] flex items-center px-[4vw] justify-between">
                  <router-link to="/index">
                      <Icon icon="bytesize:chevron-bottom" class="dark:text-[#EEEEEE] text-[6vw] mt-[0.6vw] text-[#fff]"/>
                  </router-link>
                  <div class="text-center w-[60vw]">
                      <p class="h-[5vw] text-[4vw] text-[#fff] line-clamp-1">{{mixin_player.currentTrackDetail?.name}}</p>
                      <p class="text-[2.8vw] text-[#BCBFBF] mt-[2vw] font-[400]">
                        {{mixin_player.currentTrackDetail?.ar?.map(({name})=>name).join("/")}}
                          <span class="px-[1.6vw] py-[0.8vw] text-[#D8DBDB] text-[2vw] rounded-[8px] bg-[#84868B] ml-[1vw]">
                              关注
                          </span>
                      </p>
                  </div>
                  <Icon icon="material-symbols-light:share-outline" class="text-[6vw] text-[#fff]"/>
              </div>
              <div class="relative top-[2%] w-[100vw] h-[120vw]">
                  <div id="gangzi"  :class="{ rotated: isRotating, translated: isTranslating }"  class="gangzi absolute top-[16%] left-[50%] translate-x-[-50%] z-[10] w-[30vw] h-[40vw]">
                      <img src="https://admirable-jalebi-ce44af.netlify.app/static/needle-ab.png" alt="" class="h-[40vw] absolute top-[-3.2vw] left-[-3.2vw]">
                  </div>
                    <van-popup v-model="show1" :get-container="getContainer" >歌词</van-popup>
                  <div @click="showPopup1" id="cd" :style="{ transform: 'rotate(' + rotationDegree + 'deg)', animationPlayState: isRotating ? 'running' : 'paused'}" :class="{ rotating: isRotating }" class="cd w-[80vw] h-[80vw] absolute top-1/3 left-[10vw]  translate-x-[-50%] translate-y-[-45%]">
                      <div class="absolute w-[80vw] h-[80vw]">
                          <img src="https://admirable-jalebi-ce44af.netlify.app/static/d7e4e3a244701ee85fecb5d4f6b5bd57.png" alt="" class="absolute top-0 w-[80vw] h-[80vw]">
                          <img src="https://admirable-jalebi-ce44af.netlify.app/static/disc_light.png" alt="" class="w-[80vw] h-[80vw] absolute top-0">
                      </div>
                      <img :src="mixin_player.currentTrackDetail?.al?.picUrl" alt="" class="w-[50vw] h-[50vw] absolute translate-x-[30%] translate-y-[30%]  rounded-[50%] border-[5px] border-[#000] rotateAnimation1 paused-animation">
                  </div>
              </div>
              <div class="flex flex-wrap content-end">
                  <div class="w-[100vw] mt-[5vw] flex justify-evenly items-center">
                      <div>
                          <Icon icon="icon-park-outline:like" class="text-[6vw] text-[#fff]"/>
                      </div>
                      <Icon icon="streamline:download-circle" class="text-[5vw] text-[#fff]"/>
                      <Icon icon="octicon:people-24" class="text-[5vw] text-[#fff]"/>
                      <router-link to="/commentlist">
                        <Icon icon="icon-park-outline:message" class="text-[5vw] text-[#fff]"/>
                      </router-link> 
                      <Icon icon="ant-design:more-outlined" class="text-[5vw] text-[#fff]"/>
                  </div>
                  <div class="h-[8vw] w-[100vw] flex items-center px-[5vw] mt-[3vw]">
                      <div class="text-[#fff] text-[1.6vw] scale-[0.8] opacity-80">02:00</div>
                      <!-- <div class="flex-1 mx-[2.5vw] vue-slider vue-slider-ltr" style="padding: 7px 0px; width: auto; height: 4px;">
                      </div> -->
                      
                      <!-- <div class="text-[#fff] text-[1.6vw] scale-[0.8] opacity-80">{{ formatTime(currentTime) }}</div> -->
                      <div ref="progressBar" class="progress-bar"></div> 
                      <!-- <div class="text-[#fff] text-[1.6vw] scale-[0.8] opacity-50">{{ formatTime(this.sound.duration()) }}</div> -->
                      <div class="text-[#fff] text-[1.6vw] scale-[0.8] opacity-50">07:13</div>
                  </div>
                  <div class="h-[12.3vw] flex w-[100vw] items-center justify-evenly">
                      <Icon icon="cil:loop" class="text-[#fff] text-[8vw]"/>
                      <span @click="mixin_player.playPreviousTrack()">
                        <Icon icon="fluent:previous-48-filled" class="text-[#fff]"/>
                      </span>
                      <div @click="togglePlay" class="w-[12vw] h-[12vw] rounded-[50%] bg-[#fff] flex items-center justify-center">
                          <!-- <Icon icon="ph:play-fill" /> -->
                        <span @click="mixin_player.replaceTracks(musiclist.map(({id})=>id))">
                            <Icon icon="bi:play-fill" class="text-xl" v-show="!isRotating"/>
                        </span>
                        <span @click="mixin_player.pause()">
                            <Icon icon="lets-icons:stop-fill"  v-show="isRotating" />
                        </span>
                      </div>
                      <span @click="mixin_player.playNextTrack()">
                        <Icon icon="fluent:next-16-filled" class="text-[#fff]"/>
                      </span>
                      <!-- <Icon icon="iconamoon:playlist-fill" class="text-[6vw] text-[#fff]"/> -->
                      <div class="w-[2vw]">
                        <van-cell style="background:0;" class="text-[#fff]" @click="showPopup">
                            <Icon icon="iconamoon:playlist-fill" class="text-[6vw]"/>
                        </van-cell>
                        <van-popup v-model="show" round position="bottom" :style="{ height: '60%' }" >
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
                                    <div v-for="(item,index) in musiclist" :key="item.id" class="flex justify-between items-center h-[14vw]"  @click="playimg(index)">
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

                        </van-popup>
                      </div>
                  </div>
              </div>
          </div>
          <div class="element fixed z-[1] top-0 left-0 right-0 bottom-0" style="background-image: url('mixin_player.currentTrackDetail?.al?.picUrl');"></div>
          <div class="fixed z-[2] bgColor top-0 left-0 right-0 bottom-0"></div>
        </div>
    </div>
  </template>
  <script>
  import { Howl } from 'howler';
  import { mapGetters } from 'vuex';
  import { personaLized } from "@/service";
  export default {
      data(){
          return {
            show:false,
            show1:false,
            tracks:[],
            musiclist:[],
            musicName:'',
            author:'',
            imgUrl:'',
            isRotating: false,
            isPlaying: false,
            rotationDegree: 0,
            playing:false,
            isTranslating: false,
            rotationInterval: null,
            num:null,
            sound: null,
            currentTime: 0,
        }   
      }, 
      methods:{
        showPopup() {
            this.show = true;
        },
        showPopup1() {
            this.show1 = true;
        },
        getContainer() {
            return document.getElementById('my-container');
         },
         playimg(index){
            this.num = index;
        },
        music(name,zuojia,url){
          this.musicName = name; 
          this.author = zuojia;
          this.imgUrl = url;
            // console.log(this.musicName);
        },
        xuan(){
            if (this.isRotating) {
            this.rotationDegree = 0;
            }
            this.isRotating = !this.isRotating;
        },
        togglePlay() {
            if (this.isRotating) {
                this.rotationDegree = 0; // 将旋转角度重置为0
                clearInterval(this.rotationInterval); // 停止旋转
            } else {
                this.rotationInterval = setInterval(() => {
                this.rotationDegree += 1; // 每次增加1度
                }, 100); // 设置旋转速度
            }
            this.isRotating = !this.isRotating;
            this.isTranslating = !this.isTranslating;
        },
        playAudio() {
            if (!this.sound) {
            this.sound = new Howl({
                src: ['audio.mp3'],
                onplay: () => {
                this.updateProgressBar();
                },
            });
            }
            this.sound.play();
        },
        updateProgressBar() {
            const progressBar = this.$refs.progressBar;
            progressBar.style.width = '0%';
            const interval = setInterval(() => {
                if (this.sound && this.sound.state() === 'loaded') {
                const progress = (this.sound.seek() / this.sound.duration()) * 100;
                progressBar.style.width = progress + '%';
                this.currentTime = this.sound.seek();
                if (this.sound.seek() >= this.sound.duration()) {
                    clearInterval(interval);
                }
                }
            }, 100);
        },
        formatTime(time) {
            const minutes = Math.floor(time / 60);
            const seconds = Math.floor(time % 60);
            return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
        },
  
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
        // console.log('tracks1',this.tracks);
    },

      computed: {
          ...mapGetters(['getSongId']),
          songId() {
            //   console.log(this.getSongId);
              return this.getSongId;
          }
     }
  }
  
  </script>
  
  <style scoped>
        .cd {
            animation: rotate 2s linear infinite;
        }
        
        @keyframes rotate {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        
        .gangzi {
            transform-origin: left top;
            transition: transform 0.3s ease;
            transform: rotate(-45deg);
        }
        
        .rotated {
            transform: rotate(-45deg);
        }
        .translated {
            transition: transform 0.3s ease; 
            transform:  rotate(10deg);

          }
        
          .progress-bar {
            width: 100%;
            height: 10px;
            background-color: #cccccc;
          }
  </style>