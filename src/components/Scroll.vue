<template>
  <div class="wrapper" ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
export default {
    mounted(){
        new BScroll(this.$refs.wrapper, this.config);
    },
    props: {
        config: {
            type: Object,
            default: () => ({ scrollX: true ,click:true}),
        },
    },
}
</script>

<style scoped>
       .scroll-wrapper{
      position :relative;
      width :90vw;
      margin: auto;
      white-space: nowrap;
      border-radius: 5px;
      overflow: hidden;
}
  
  .scroll-content{
    display: inline-block;
    height: 30vw;
    width: 230vw;
  }
  .scroll-item{
    line-height:10vw;
    font-size:2vw;
    display:inline-block;
    text-align:center;
    margin-left: 2vw;
    
  }
</style>