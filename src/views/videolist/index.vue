<template>
  <div>
    <div class="bg-black z-20 w-screen h-screen pb-[-12vw] flex flex-wrap absolute">
        <div class="flex justify-between items-center px-[6vw] pt-[3vw] w-[100%] h-[12vw]">
            <router-link to="/thecharts">
                <Icon icon="formkit:left" class="text-[6vw] text-[#fefefe]"/>
            </router-link>
            <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24" class="text-[6vw] text-[#fefefe] mr-[7vw] iconify iconify--fluent"><path fill="currentColor" d="M2 6.25A3.25 3.25 0 0 1 5.25 3h13.5A3.25 3.25 0 0 1 22 6.25V12h-1.5V6.25a1.75 1.75 0 0 0-1.75-1.75H5.25A1.75 1.75 0 0 0 3.5 6.25v9.5c0 .966.784 1.75 1.75 1.75H11V19H5.25A3.25 3.25 0 0 1 2 15.75v-9.5ZM14 13a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2h-7ZM5.22 6.22a.75.75 0 0 1 1.06 0L9.5 9.44V7.75a.75.75 0 0 1 1.5 0v3.5a.75.75 0 0 1-.75.75h-3.5a.75.75 0 0 1 0-1.5h1.69L5.22 7.28a.75.75 0 0 1 0-1.06Z"></path>
                </svg>
                <Icon icon="ant-design:more-outlined" class="text-[6vw] text-[#fefefe]"/>
            </div>
        </div>
        <div class="w-[100%] h-[54vw] absolute top-[12%]">
            <div class="plyr plyr--full-ui plyr--video plyr--html5 plyr--fullscreen-enabled plyr--pip-supported plyr--is-touch plyr--paused">
                <div>
                    <div v-if="myurl">
                        <Videoplayer :source="myurl"></Videoplayer>
                    </div>  
                </div>
            </div>
        </div>
        <div class="w-[100%] absolute bottom-[0vw]">
            <div class="flex justify-between px-[4vw] items-end pb-[3vw]">
                <div class="flex-1 mr-[10vw]">
                    <div class="flex items-center mb-[3vw]">
                        <img src="http://p1.music.126.net/CsGY6JmX21cxa-5DZKIqpQ==/109951164546544248.jpg" alt="" class="w-[9vw] h-[9vw] rounded-[50%] border-[2px] border-[#ffffff]">
                        <span class="mx-[2vw] text-[#ffffff] text-[4vw]">队长</span>
                        <div class="bg-[#eb4d44] h-[5vw] w-[7vw] flex items-center justify-center rounded-[2vw]">
                            <Icon icon="ion:add-sharp" class="text-[#fff] text-[4vw]" />
                        </div>
                    </div>
                    <div class="mb-[5vw] van-collapse van-hairline--top-bottom">
                        <div class="van-collapse-item">
                            <div role="button" tabindex="0" class="van-cell van-cell--clickable van-collapse-item__title">
                                <div class="van-cell__title">
                                    <div class="flex-1">
                                        <h1 class="text-[3.2vw]"><span class="w-[7.3vw] mr-[2vw] leading-[5.2vw] text-center inline-block bg-[#333333] text-[#ACACAC]">MV</span>
                                            风
                                        </h1>
                                    </div>
                                </div>
                                <!-- <i class="van-icon van-icon-arrow van-cell__right-icon"></i> -->
                            </div>
                            <div class="van-collapse-item__wrapper" style="height: 0px; display: none;">
                                <div class="van-collapse-item__content">
                                    “风把你给带走  就像你没来过我没爱过把心都给掏空”队长EP《碎碎念》主打单曲《风》MV正式上线
                                </div>
                            </div>

                        </div>
                    </div>
                    
                    <div class="flex items-center">
                        <!-- <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 20 20" class="text-[4vw] text-[#b3b3b3] iconify iconify--entypo"><path fill="currentColor" d="M14.971 9.438c-.422.656-.646.375-.52 0c.336-.993.348-4.528-2.451-4.969L11.998 16c0 1.657-1.735 4-4.998 4c-1.657 0-3-.871-3-2.5c0-2.119 1.927-3.4 4-3.4c1.328 0 2 .4 2 .4V0h2c0 2.676 5.986 4.744 2.971 9.438z"></path>
                        </svg> -->
                        <Icon icon="solar:music-note-2-linear" class="text-[4vw] text-[#b3b3b3]"/>
                        
                        <p class="w-[30vw]">
                            <van-notice-bar background="#000" scrollable text="风" />
                        </p>
                        
                                <!-- <div class="van-notice-bar__content"> -->
                                    <!-- 风 -->
                           
                                <!-- </div> -->
                            
                       
                        <!-- <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 1024 1024" class="text-[4vw] text-[#fff] iconify iconify--ant-design"><path fill="currentColor" d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8a264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39c-10 6.1-19.5 12.8-28.5 20.1c-9-7.3-18.5-14-28.5-20.1c-41.8-25.5-89.9-39-139.2-39c-35.5 0-69.9 6.8-102.4 20.3c-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9c0 33.3 6.8 68 20.3 103.3c11.3 29.5 27.5 60.1 48.2 91c32.8 48.9 77.9 99.9 133.9 151.6c92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3c56-51.7 101.1-102.7 133.9-151.6c20.7-30.9 37-61.5 48.2-91c13.5-35.3 20.3-70 20.3-103.3c.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5c0 201.2-356 429.3-356 429.3z"></path>
                        </svg> -->
                        <!-- <Icon icon="flat-color-icons:like-placeholder" /> -->
                        <Icon icon="icon-park-solid:like" class="text-[4vw] text-[#fff]"/>
                    </div>  
                </div>
                <div class="w-[10vw]">
                    <div class="flex items-center flex-wrap justify-center mb-[4vw]">
                       
                        <Icon icon="streamline:like-1-solid" class="text-[6vw] mb-[2vw] text-[#eaeaea]"/>
                        <span class="text-[#eaeaea] text-[3vw]">1884</span>
                    </div>
                    <div class="flex items-center flex-wrap justify-center mb-[4vw]">
                        <Icon icon="ant-design:message-filled" class="text-[6vw] mb-[2vw] text-[#eaeaea]"/>
                        <span class="text-[#eaeaea] text-[3vw]">233</span>
                    </div>
                    <div class="flex items-center flex-wrap justify-center mb-[4vw]">
                        
                        <Icon icon="majesticons:share" class="text-[6vw] mb-[2vw] text-[#eaeaea]"/>
                        <span class="text-[#eaeaea] text-[3vw]">291</span>
                    </div>
                    <div class="flex items-center flex-wrap justify-center mb-[4vw]">
                        <Icon icon="fluent:collections-24-filled" class="text-[6vw] mb-[2vw] text-[#eaeaea]"/>
                        <span class="text-[#eaeaea] text-[3vw]">收藏</span>
                    </div>
                    <div class="rotate-image relative flex items-center justify-center">
                        <img src="/static/d7e4e3a244701ee85fecb5d4f6b5bd57.png" alt="" class="w-[10vw] h-[10vw] rounded-[50%]">
                        <img alt="" class="w-[7vw] h-[7vw] rounded-[50%] absolute rotateAnimation" src="http://p1.music.126.net/2b8wjb10WyTqGXZygG1_VA==/109951169103151905.jpg">
                    </div>
                </div>
            </div>
            <!-- <div class="text-[5vw] flex items-center justify-center h-[44vw]" style="display: none;">
                <span class="text-[#ffffff]">03:22</span> 
                <span class="text-[#666666]">/03:56</span>
            </div> -->
            <div class="videoProgressBar vue-slider vue-slider-ltr" style="padding: 7px 0px; width: auto; height: 4px;">
                <div class="vue-slider-rail">
                    <div class="vue-slider-process" style="height: 100%; top: 0px; left: 0%; width: 22.9236%; transition-property: width, left; transition-duration: 0s;">
                    </div>
                    <div aria-valuetext="22.923550137180538" class="vue-slider-dot" role="slider" aria-valuenow="22.923550137180538" aria-valuemin="0" aria-valuemax="100" aria-orientation="horizontal" tabindex="0" style="width: 14px; height: 14px; transform: translate(-50%, -50%); top: 50%; left: 22.9236%; transition: left 0s ease 0s;">
                        <div class="vue-slider-dot-handle"></div>
                    </div>
                </div>
            </div>
            <div class="w-[100%] flex items-center justify-between text-[#4d4d4d] px-[4vw] py-[4vw] text-[4vw]">
                "发条评论结识有趣的人"
                <Icon icon="ci:expand" class="text-[6vw] text-[#eaeaea]"/>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import {mvDetail} from '@/service'
import Videoplayer from '@/components/Videoplayer'
// import Plyr from 'plyr';
// import '../../../node_modules/plyr/dist/plyr.css';

export default {
    name:'videoPlayer',
    components:{Videoplayer},
    data(){
        return {
            myurl:''
        }
    },
    async created(){
      const [err, res] = await mvDetail({
        id:this.$route.query.id,
        vid:this.$route.query.id
        // s: 5,
      });
       
      if (!err) console.log('mv',res.data);
      this.myurl = res.data.data.url;
     
    },
    mounted() {
        // new Plyr()
        //  new Plyr(this.$refs.player, {
        //     controls:['progress','play-large'],
        //     muted:'false',
        //     autoplay:true,
        //     hideControls:false
        //  })

  },
   

}
</script>

<style scoped>
.van-cell {
    background: none;
    padding: 0;
    line-height: normal;
}
button, [role="button"] {
    cursor: pointer;
}
.plyr__progress{
    position: fixed !important;
    bottom: 3vw;
    width: 100vw;
  }
.van-cell__title {
    color: #ffffff;
}
.van-cell__right-icon {
    margin-left: 4px;
    color: #969799;
}

.van-cell__left-icon, .van-cell__right-icon {
    height: 24px;
    font-size: 16px;
    line-height: 24px;
}
.van-icon {
    position: relative;
    display: inline-block;
    font: normal normal normal 14px/1 vant-icon;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
}
.van-collapse-item__wrapper {
    overflow: hidden;
    -webkit-transition: height .3s ease-in-out;
    transition: height .3s ease-in-out;
    will-change: height;
}
.van-hairline--top-bottom::after, .van-cell::after {
    border: none;
}
.van-hairline--top-bottom::after, .van-hairline-unset--top-bottom::after {
    border-width: 1px 0;
}
[class*=van-hairline]::after {
    position: absolute;
    box-sizing: border-box;
    content: ' ';
    pointer-events: none;
    top: -50%;
    right: -50%;
    bottom: -50%;
    left: -50%;
    border: 0 solid #ebedf0;
    -webkit-transform: scale(.5);
    transform: scale(.5);
}

@keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  .rotate-image {
    animation: spin 5s infinite linear;
  }

</style>