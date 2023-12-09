<template>
  <!-- <div></div> -->
  <div id="app" :class="{dark:isDark}">
    <AudioPlayer></AudioPlayer>
    <Footer></Footer>
    <transition name="slide-fade">
      <router-view class="bg-[#F4F4F4] dark:bg-[#000]"/>
    </transition>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  
  created(){
    this.$store.dispatch("requestHomePageData")
    this.$store.dispatch("requestHomepageDragonBall")
  },
  computed:{
    ...mapState(['isDark'])
  }
}
</script>
<style scoped>
*{
  margin: 0;
  padding: 0;
}
#app{
      overflow-x: hidden;
}
.activea {
  color:red;
}

.slide-fade-enter-active {
  transition: all 0.8s;
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
</style>