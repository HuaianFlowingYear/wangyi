<template>
  <div class="">
    <div class="pb-[24vw]">
        <div class="w-[100vw] h-[74vw] relative">
            <div class="w-[100vw] h-[15vw] px-[4.5vw] flex items-center justify-between fixed top-0 z-[10]">
                <router-link to="/index">
                    <Icon icon="mdi:arrow-left" class="text-[7vw] text-[#fff]"/>
                </router-link>
               
                <Icon icon="ant-design:more-outlined" class="text-[#fff] font-[800] text-[7vw]"/>
            </div>
            <img src="http://p1.music.126.net/2zSNIqTcpHL2jIvU6hG0EA==/109951162868128395.jpg" alt="" class="w-[100vw] h-[74vw]"></div>
            <div class="dark:bg-[#151515] bg-[#f1f1f1] px-[4vw] pb-[10vw]">
                <div class="dark:from-[#2D2C2C] dark:to-[#161616] bg-gradient-to-b from-[#f1f1f1] to-[#f1f1f1]  mt-[-4vw] rounded-[15px] bg-[#fff] w-[92vw]  relative pt-[11vw] text-center pb-[3.8vw]">
                <img :src=myUrl alt="" class="w-[18vw] h-[18vw] rounded-[50%] absolute top-[-9vw] left-1/2 translate-x-[-50%]">
                <p class="dark:text-[#DADADA] text-[5vw] text-[#253346] font-[800]">
                    {{myuserName}}
                </p>
                    <div class="wt-[3vw] text-[3vw] text-[#9396A2] mt-[2vw]">
                        <span class="px-[2vw]">
                            <span>1</span> 关注
                        </span>
                        <span class="px-[2vw]">
                            <span>0</span> 粉丝
                        </span>
                        <span class="px-[2vw]">Lv.
                            <span>0</span>
                        </span>
                 </div>
                    <div class="h-[11vw] flex items-center justify-center">
                        <span class="dark:bg-[#282828] dark:border-[#282828] dark:text-[#EEE] bg-[#fff] pl-[1.5vw] pr-[1.9vw] pb-[1vw] pt-[0.8vw] text-[#41495E] text-[2vw]  border-[1px] border-[#CCCCCD] rounded-[8px] ml-[1.5vw]">
                            IP:
                        </span>
                        <span class="dark:bg-[#282828] dark:border-[#282828] dark:text-[#EEE] bg-[#fff] pl-[1.5vw] pr-[1.9vw] pb-[1vw] pt-[0.8vw] text-[#41495E] text-[2vw] flex items-center border-[1px] border-[#CCCCCD] rounded-[8px] ml-[1.5vw]">
                                <Icon icon="noto-v1:female-sign" />
                                00后 摩羯座
                        </span>
                        <span class="dark:bg-[#282828] dark:border-[#282828] dark:text-[#ECECEC] bg-[#fff] pl-[1.5vw] pr-[1.9vw] pb-[1vw] pt-[0.8vw] text-[#41495E] text-[2vw]  border-[1px] border-[#CCCCCD] rounded-[8px] ml-[1.5vw]">
                            村龄 0 年
                        </span>
                    </div>
                    <div class="flex items-center justify-center">
                        <span class="dark:border-[#383838] dark:text-[#EEEEEE] px-[3vw] py-[1vw] text-[#41495E] text-[2.9vw] font-[800] flex items-center justify-center border-[1px] border-[#CCCCCD] rounded-[200px] ml-[1.5vw]">
                            编辑资料
                        </span>
                        <span class="dark:border-[#383838] dark:text-[#EEEEEE] w-[7.7vw] h-[7.7vw] text-[#41495E] text-[2.9vw] font-[800] flex items-center justify-center border-[1px] border-[#CCCCCD] rounded-[200px] ml-[1.5vw]">
                            <Icon icon="eva:arrow-ios-downward-outline" class="dark:text-[#EEEEEE] text-[#41495E] text-[5vw] mt-[0.6vw]"/>
                        </span>
                    </div>
                    <div>

                    </div>
                </div>
                <div>
                    <nav class="flex justify-evenly h-[15vw] items-center font-semibold relative w-[80vw] mx-auto">
                        <div class="dark:text-[#f1f1f1] text-[#2a3146] text-[3.3vw]">
                            主页
                        </div>
                        <div class="dark:text-[#8B8B8B] text-[#9095a1] text-[3.3vw]">
                            动态
                        </div>
                        <div class="dark:text-[#8B8B8B] text-[#9095a1] text-[3.3vw]">
                            播客
                        </div>
                        <div class="absolute bg-[#eb474e] w-[3.3vw] h-[1vw] rounded-[20vw] bottom-[2vw] left-[16.4vw]">                         
                        </div>
                    </nav>
                    <div>
                        <div class="dark:bg-[#2C2C2C] w-[92vw] h-[43vw] rounded-[15px] bg-[#fff] mb-[3.7vw]">
                            <h1 class="dark:text-[#EAEAEA] leading-[12vw] text-[4vw] pl-[4vw]">
                                音乐品味
                            </h1>
                            <div class="flex justify-evenly">
                                <div class="dark:from-[#424242] dark:to-[#303030] dark:border-[#303030] w-[27vw] h-[28vw] rounded-[15px] bg-gradient-to-b from-[#ffdfd3] to-[#FEFEFB] border-[1px] border-[#F6F4F0] relative">
                                    <div class="dark:text-[#AFAFAF] text-[2.6vw] text-[#837C87] h-[7.4vw] leading-[7.4vw] pl-[1.7vw]">
                                        我的喜欢
                                    </div>
                                    <p class="dark:text-[#DFDFDF] text-[3.5vw] text-[#5A565D]  pl-[1.7vw]">
                                        0首
                                    </p>
                                    <div class="dark:text-[#7D7D7D] absolute bottom-[2.5vw] left-[1.7vw] text-[#B1B1AE] text-[2.4vw] flex items-center">
                                        <Icon icon="wpf:like" />
                                        喜欢的音乐
                                    </div>
                                    </div>
                                    <div class="dark:from-[#424242] dark:to-[#303030] dark:border-[#303030] w-[27vw] h-[28vw] rounded-[15px] bg-gradient-to-b from-[#f9ebcf] to-[#FEFEFB] border-[1px] border-[#F6F4F0] relative">
                                        <div class="dark:text-[#AFAFAF] text-[2.6vw] text-[#837C87] h-[7.4vw] leading-[7.4vw] pl-[1.7vw]">
                                            累计听歌
                                        </div>
                                        <p class="dark:text-[#DFDFDF] text-[3.5vw] text-[#5A565D]  pl-[1.7vw]">
                                            0首
                                        </p>
                                        <div class="dark:text-[#7D7D7D] absolute bottom-[2.5vw] left-[1.7vw] text-[#B1B1AE] text-[2.4vw] flex items-center">
                                            <Icon icon="pixelarticons:chart-bar" class=" mr-[0.8vw] text-[2.6vw]"/>
                                            喜欢的音乐
                                        </div>
                                    </div>
                <div class="dark:from-[#424242] dark:to-[#303030] dark:border-[#303030] w-[27vw] h-[28vw] rounded-[15px] bg-gradient-to-b from-[#dbeff9] to-[#FEFEFB] border-[1px] border-[#F6F4F0] relative pr-[1.9vw]">
                    <div class="dark:text-[#AFAFAF] text-[2.6vw] text-[#837C87] h-[7.4vw] leading-[7.4vw] pl-[1.7vw]">
                         本周关键词
                    </div>
                    <p class="dark:text-[#DFDFDF] text-[3.5vw] text-[#5A565D]  pl-[1.7vw]">
                        属于你的音乐档案
                    </p>
                    <div class="dark:text-[#7D7D7D] absolute bottom-[2.5vw] left-[1.7vw] text-[#B1B1AE] text-[2.4vw] flex items-center">
                        <Icon icon="eos-icons:hourglass" />黑胶时光机
                    </div>
                </div>
            </div>
        </div>
        <div class="dark:bg-[#2C2C2C] w-[100%] bg-[#fff] rounded-[15px]  pt-[5vw] mb-[3.7vw]">
            <p class="dark:text-[#ECECEC] text-[#2a3146] font-semibold text-[4vw] mb-[4.4vw] mx-[4vw]">
                创建的歌单
                <span class="dark:text-[#A1A1A1] text-[#9599a3] text-[2.7vw] ml-[1.6vw] font-[200]">
                    (1个)
                </span>
            </p>
            <ul class="px-[4vw] pb-[4vw]">
                <li class="flex mb-[1.5vw]">
                    <div class="relative pt-[0.6vw] mr-[2.6vw] ">
                        <img src="http://p1.music.126.net/vmCcDvD1H04e9gm97xsCqg==/109951163350929740.jpg" class="w-[12vw] h-[12vw] rounded-[10px] bg-black z-[2] relative">
                        <div class="dark:bg-[#434343] w-[9vw] h-[4vw] bg-[#ddd] bg-opacity-50 absolute top-[0vw] left-1/2 -translate-x-1/2 rounded-[6px] z-[1]"></div>
                    </div>
                    <div class="flex flex-wrap items-center flex-1 py-[1vw]">
                        <p class="dark:text-[#E6E6E6] w-[100%] text-[3.8vw] text-[#3f4659] line-clamp-1">
                            现代歌
                        </p>
                        <p class="dark:text-[#B7B7B7] w-[100%] text-[2.8vw] text-[#aaadb5] line-clamp-1">
                            2首，播放0次
                        </p>
                    </div>
                </li>
            </ul>
            <div>
            </div>
        </div>
        <div class="dark:bg-[#2C2C2C] w-[100%] bg-[#fff] rounded-[15px]  pt-[5vw] mb-[3.7vw]">
            <p class="dark:text-[#ECECEC] text-[#2a3146] font-semibold text-[4vw] mb-[4.4vw] mx-[4vw]">
                收藏的歌单
                <span class="dark:text-[#A1A1A1] text-[#9599a3] text-[2.7vw] ml-[1.6vw] font-[200]">
                    (1个)
                </span>
            </p>
            <ul class="px-[4vw] pb-[4vw]">
                <li class="flex mb-[1.5vw]">
                    <div class="relative pt-[0.6vw] mr-[2.6vw] ">
                        <img src="http://p1.music.126.net/wkG9iLxExVnCj_I8Z8vk0A==/109951168667120528.jpg" class="w-[12vw] h-[12vw] rounded-[10px] bg-black z-[2] relative">
                        <div class="dark:bg-[#434343] w-[9vw] h-[4vw] bg-[#ddd] bg-opacity-50 absolute top-[0vw] left-1/2 -translate-x-1/2 rounded-[6px] z-[1]"></div>
                    </div>
                    <div class="flex flex-wrap items-center flex-1 py-[1vw]">
                        <p class="dark:text-[#E6E6E6] w-[100%] text-[3.8vw] text-[#3f4659] line-clamp-1">
                            孤独诗人的慰籍 | 孤独又灿烂的情绪美学
                        </p>
                        <p class="dark:text-[#B7B7B7] w-[100%] text-[2.8vw] text-[#aaadb5] line-clamp-1">
                            80首，By小翅膀的羽毛，播放79108次
                        </p>
                    </div>
                </li>
            </ul>
            <div>

            </div>
        </div>
        <div>

        </div>
        <div class="dark:bg-[#2C2C2C]  w-[92vw] h-[50vw] bg-[#fff]  rounded-[15px]">
            <nav class="h-[15vw] flex items-center justify-between mx-[3.8vw]">
                <div class="dark:text-[#ECECEC] text-[4vw] text-[#333]">
                    基本信息
                </div>
                <div class="dark:text-[#ECECEC] dark:border-[#474747] text-[2.6vw] border-[1px] border-[#E7E7E7] rounded-[200px] px-[2.7vw] py-[1.5vw] text-[#333]">
                    领取村名证
                </div>
            </nav>
            <div class="dark:text-[#ADADAD] h-[25vw] text-[3vw] text-[#666] flex flex-wrap mx-[3.8vw]">
                <div class="w-[100%]">村龄：
                    <span class="dark:text-[#E3E3E3]">0年 (2023年12月注册)</span>
                </div>
                <div class="w-[100%]">
                    性别：<span class="dark:text-[#E3E3E3]">女</span>
                </div>
                <div class="w-[100%]">
                    年龄：<span class="dark:text-[#E3E3E3]">00后 摩羯座</span>
                </div>
            </div>
            <div class="dark:border-[#434343] border-t-[1px] border-[#EAEAEA] text-[3vw] text-[#999] flex items-center justify-center h-[9vw]">
                查看全部
                <Icon icon="formkit:right" class="ml-[1vw] text-[2.5vw] font-[800]" />
            </div>
        </div>
    </div>
</div>
</div>
</div>

</div>
</template>

<script>
import {myuser,getUserPlaylist} from '@/service'
// import {mapState} from "vuex"
export default {
    data(){
      return {
        myuserName:'',
        myUrl:'',
        dengj:'',
      }
    },
    async created(){
        const [err,res] = await myuser({type:0})
        if (err) return console.log(err)
        console.log('wo',res.data);
        this.myuserName = res.data.profile.nickname
        this.myUrl = res.data.profile.avatarUrl
        this.dengj = res.data.profile.accountType
        // console.log(this.auth);
        const [err1,res1] = await getUserPlaylist({id:this.auth.profile.userId})
        if (err1) return console.log(err1,'错',res)
        console.log('wo1',this.auth.profile.userId,res1);
        
    },
    // eslint-disable-next-line no-dupe-keys
    // created(){
    //     // console.log(this.auth);
    // },
    // computed:{
    //     // ...mapState(['auth'])
    // }
}
</script>

<style>

</style>