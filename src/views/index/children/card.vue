<template>
  <div>
    <div class="flex items-center justify-between">
      <div>{{ title }}</div>
      <div>
          <van-cell style="background:0" @click="showPopup">
            <Icon icon="ant-design:more-outlined" class="dark:text-[#e9ebf2] text-2xl"/>
          </van-cell>
          <van-popup
            v-model="show"
            closeable
            close-icon="close"
            position="bottom"
            class="bg-[#ccc]"
            :style="{ height: '30%' }"
        >
        <div data-v-7bfda910="">
          <div data-v-3b54968e="" class="dark:border-b-[#3C3C3C] flex justify-between items-center h-[10vw] border-b-[0.35vw] border-b-[#E8e8e8] px-[5vw]">
            <p data-v-3b54968e="" class="text-[3vw] text-[#939BA1] font-[800]">
              新歌新碟\数字专辑
            </p> 
          </div>
        </div>
          <div data-v-7bfda910=""> 
            <div data-v-3b54968e="" class="ml-[5vw]">
              <div data-v-3b54968e="" class="h-[12vw] flex items-center">
              
                <Icon icon="uiw:like-o" class="dark:text-[#FDFDFC] w-[6vw] h-[6vw] mr-[2vw] iconify iconify--iconamoon"/>
                <p data-v-3b54968e="" class="dark:text-[#fff] h-[3vw] text-[3vw] text-[#3a393f]">
                  优先推荐
                </p>
              </div> 
              <div data-v-3b54968e="" class="h-[12vw] flex items-center">
                <Icon icon="ion:heart-dislike-outline" class="dark:text-[#FDFDFC] w-[6vw] h-[6vw] mr-[2vw] iconify iconify--basil"/>
                <p data-v-3b54968e="" class="dark:text-[#fff] h-[4vw] text-[3vw] text-[#3a393f]">
                  减少推荐
                </p>
              </div> 
              <div data-v-3b54968e="" class="h-[12vw] flex items-center">
                
                <Icon icon="iconoir:more-vert-circle" class="dark:text-[#FDFDFC] w-[6vw] h-[6vw] mr-[2vw]"/>
                <p data-v-3b54968e="" class="dark:text-[#fff] h-[5vw] text-[3vw] text-[#3a393f]">
                  更多内容
                </p>
              </div>
            </div>
          </div>
      </van-popup>
      </div>
    </div>
    <div>
      <slot />
    </div>
   
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    }
  },
  data(){
    return{
      isMore: false,
      show: false,
    }
  },
  methods:{
    more(){
      this.$emit('more',this.isMore)
    },
   
    showPopup() {
      this.show = true;
    },
  
  }
}
</script>

<style scoped>

</style>