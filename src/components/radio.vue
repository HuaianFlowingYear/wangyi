<template>
    <div>
      <video ref="player" class="plyr">
        <source :src="videoSrc" :type="videoType" />
      </video>
    </div>
  </template>
  
  <script>
  import Plyr from 'plyr';
  
  export default {
    data() {
      return {
        player: null,
        videoSrc: 'path/to/video.mp4',
        videoType: 'video/mp4'
      };
    },
    mounted() {
      this.player = new Plyr(this.$refs.player);
    },
    beforeDestroy() {
      if (this.player) {
        this.player.destroy();
      }
    }
  };
  </script>
  
  <style scoped>
  .plyr {
    /* 添加样式以适应你的项目需求 */
    color: red;
  }
  </style>
  