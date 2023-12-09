<template>
    <div>
        <div class="px-[4.5vw] bg-[#F9F9FA] h-[14.5vw] border-b-[1px] border-[#F5F8FA] flex items-center w-[100vw] fixed  z-[10] bottom-[14vw]">
            <div class="flex items-center">
                <div class="w-[10vw] h-[10vw] relative flex items-center justify-center rotateAnimation paused-animation">
                    <img data-v-36d9f586="" src="	https://admirable-jalebi-ce44af.netlify.app/static/d7e4e3a244701ee85fecb5d4f6b5bd57.png" alt="" class="absolute top-0 left-0 z-[1]">
                    <img data-v-36d9f586="" src="https://p1.music.126.net/8BYQxzYCS5-cnl8o4mdQXA==/109951168879252133.jpg" alt="" class="w-[7vw] h-[7vw] rounded-[50%]">
                </div>
                <div class="text-[3vw] w-[60vw] text-ellipsis overflow-hidden whitespace-nowrap ml-[2vw]">
                    <span data-v-36d9f586="" class="text-[#3E485E]">This Time (sped up)</span>
                    <span data-v-36d9f586="" class="text-[#7B8591]">-Jeff Bernat</span>
                </div>
            </div>
            <div @click="play()" class="w-[12.6vw]  pr-[4vw] h-[5.6vw] relative ml-[-6.2vw] overflow-hidden">
                    <van-circle v-model="currentRate" :rate="0" :stroke-width="100" layer-color="#ccc" color="#999" size="6vw" :speed="50">
                        <Icon icon="bi:play-fill" class="text-xl" v-show="!playing"/>
                        <Icon icon="lets-icons:stop-fill"  v-show="playing" />
                    </van-circle>
            </div>
            <div>
                <van-cell class="bg-[#F9F9FA] color-[#F9F9FA]" @click="showPopup">
                    <Icon icon="fontisto:play-list" class="text-[5vw] text-[#3b4152]"/>
                </van-cell>
                <van-popup v-model="show" round position="bottom" :style="{ height: 'auto' }" >
                    <p class="h-[90vw]">当前播放</p>
                </van-popup>
            </div>
            <div class="van-overlay" style="z-index: 2003; display: none;"></div>
          </div>
    </div>
 
</template>

<script>
export default {
    data() {
        return {    
            show: false,
            playing: false,
            currentRate: 100,
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
            this.playing = !this.playing;
        },
    },
    mounted() {
        setInterval(() => {
            if (this.playing) {
                this.currentRate -= 1;
            }
        }, 100);
    },
};
</script>

<style>

</style>