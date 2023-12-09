<template>
  <component
    :is="blocksTypeComponentMap[resource.blockCode]"
    :resource="resource"
  />
</template>

<script>
import Banner from "./banner";
import RecommendPlaylist from "./recommendPlaylist";
import StylePlaylist from "./stylePlaylist";
import DragonBall from "./dragonBall";
import DragonBall1 from "./dragonBall1";
import Toplist from "./toplist";
import RadarPlaylist from "./radarPlaylist";
import NewSong from "./newSong";
const blocksTypeComponentMap = {
  HOMEPAGE_BANNER: Banner,
  HOMEPAGE_BLOCK_OLD_DRAGON_BALL: DragonBall1,
  HOMEPAGE_BLOCK_PLAYLIST_RCMD: RecommendPlaylist,
  HOMEPAGE_BLOCK_STYLE_RCMD: StylePlaylist,
  HOMEPAGE_BLOCK_TOPLIST: Toplist,
  HOMEPAGE_BLOCK_MGC_PLAYLIST: RadarPlaylist,
  HOMEPAGE_BLOCK_NEW_ALBUM_NEW_SONG: NewSong,
  HOMEPAGE_MUSICIAN_REVISIT:DragonBall,
};
export default {
    name: "Block",
    data() {
        return {
        blocksTypeComponentMap,
        };
    },
    props: {
        resource: {
            type: Object,
            required: true,
        },
    },
    created() {
      console.log(this.resource.blockCode);
    }
}
</script>

<style>

</style>