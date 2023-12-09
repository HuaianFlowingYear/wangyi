<template>
    <div class="horizontal-container">
      <div class="scroll-wrapper" ref="scroll">
        <div class="scroll-content flex w-[192vw] mx-auto overflow-hidden h-[22vw] scroll-content relative">
          <ul class="scroll-item" v-for="(item, index) in tubiao" :key="index">
           <li>
            <a href="#">
                    <img :src="item.iconUrl" alt="" class="red-image">
            </a>
            <p> {{item.name}}</p>
           </li>
           
          </ul>
        </div>
      </div>
    </div>
 
</template>

<script>
import BScroll from 'better-scroll'
import { getDragonBall} from '@/service/index'
export default {
    data () {
      return {
        tubiao:[]
      }
    },
    async created(){
        const [err,res] = await getDragonBall({type:0})
        if (err) return console.log(err)
        // console.log('图标数据',res.data.data);
        this.tubiao = res.data.data
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
.horizontal-container .scroll-wrapper .scroll-item {
    height: 30px;
    line-height: 30px;
    font-size: 16px;
    display: inline-block;
    text-align: center;
    padding: 0 10px;
}
img{
    width: 15vw;
    height: 15vw;
}
.red-image {
    filter: url("data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27><filter id=%27colorize%27><feColorMatrix type=%27matrix%27 values=%271 0 0 0 0.698 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0%27/></filter></svg>#colorize");
  }

</style>