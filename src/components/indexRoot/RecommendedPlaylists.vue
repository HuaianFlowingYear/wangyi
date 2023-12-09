<template>
   
    <div class="horizontal-container">
        <div class="flex justify-between items-center h-[12vw]">
            <div data-v-3b54968e="" class="flex items-center">
                <span data-v-3b54968e="" class="dark:text-[#e9ebf2] text-[#374d5b] text-[4vw] font-[800]">推荐歌单</span> 
            </div>
        </div>
       
      <div class="scroll-wrapper " ref="scroll">
        <div class="scroll-content flex w-[192vw] mx-auto overflow-hidden h-[28] scroll-content relative">
            
          <ul class="scroll-item" v-for="(item, index) in tubiao" :key="index">
            
           <li class="w-[31vw] h-[31vw] rounded-[8px] overflow-hidden relative pt-[1vw]">
            <a href="#">
                <img :src="item.picUrl" alt="" class="w-[41vw] h-[31vw] rounded-[8px] relative z-[1]">
            </a>
            <p class="dark:text-[#e3e5ec] text-[2vw] text-[#3E4759] scroll-item" > {{item.name}}</p>
           </li>
           
          </ul>
        </div>
      </div>
    </div>
 
</template>

<script>
import BScroll from 'better-scroll'
import { getRecommendPlaylist} from '@/service/index'
export default {
    data () {
      return {
        tubiao:[]
      }
    },
    async created(){
        const [err,res] = await getRecommendPlaylist({type:0})
        if (err) return console.log(err)
        console.log('歌单数据',res.data.result);
        this.tubiao = res.data.result
    },
    mounted() {
      this.init()
    },
    beforeDestroy() {
      this.bs.destroy()
    },
    methods: {
      init() {
        this.bs = new BScroll(this.$refs.scroll, {
          scrollX: true,
          probeType: 3, // listening scroll event
          startX:0,
        })
        
      }
    }
  }
</script>

<style scoped>
.horizontal-container .scroll-wrapper {
    position: relative;
    width: 100%;
    margin: 20px auto;
    white-space: nowrap;
    border-radius: 5px;
    overflow: hidden;

}
.horizontal-container .scroll-wrapper .scroll-content {
    display: inline-block;
    transform: translateX(-368px) translateY(0px) translateZ(1px); 
    transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
    transition-property: transform; 
    transition-duration: 0ms;
}
p{
  margin-left: -80px;
  width: 180px;
  white-space: nowrap; /* 不换行 */
  overflow: hidden; /* 隐藏溢出部分 */
  text-overflow: ellipsis; /* 使用省略号表示溢出部分 */
  
  cursor: pointer; /* 鼠标悬停时显示指针形状 */
}
p:hover{
    text-overflow: initial; /* 鼠标悬停时取消省略号显示完整文本 */
    white-space: normal; /* 鼠标悬停时允许换行 */
    overflow: visible; /* 鼠标悬停时显示完整文本 */
}
.horizontal-container .scroll-wrapper .scroll-item {
    height: 30px;
    line-height: 30px;
    font-size: 16px;
    display: inline-block;
    text-align: center;
}
img{
    width: 19.5vw;
    height: 19vw;
}
.red-image {
    filter: url("data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27><filter id=%27colorize%27><feColorMatrix type=%27matrix%27 values=%271 0 0 0 0.698 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0%27/></filter></svg>#colorize");
  }

</style>