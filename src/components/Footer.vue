<template>
  <div class="fixed z-20 bottom-0 w-[100%] s bg-[#fff] dark:bg-[#000]" id="foot">
    <!-- tabar -->
    <ul class="flex justify-around items-stretch text-center p-1">
        <li class="text-center">
            <router-link  active-class="active" to="/index"  >
                <Icon icon="ri:netease-cloud-music-fill" class="text-2xl text-violet-200"/>
                <span style="font-size: 12px;" class="text-center">首页</span>
            </router-link>
        </li>
        <li>
            <router-link to="/thecharts">
                    <Icon icon="icon-park-outline:ranking" class="text-2xl text-violet-200"/>
                <span class="text-center" style="font-size: 12px;">排行榜</span>
            </router-link>
        </li>
        <li>
            <router-link to="/my">
                <Icon icon="lucide:music" class="text-2xl text-violet-200"/>
             </router-link>
            <span style="font-size: 12px;">我的</span>
        </li>
        <li>
            <router-link to="/index">
                <Icon icon="tabler:user-x" class="text-2xl text-violet-200"/>
            </router-link>
            <span style="font-size: 12px;">关注</span>
        </li>
        <li>
            <router-link to="/index">
                <Icon icon="gridicons:chat" class="text-2xl text-violet-200"/>
            </router-link>
            <span style="font-size: 12px;">社区</span>
        </li>
    </ul>
  </div>
  
  
</template>

<script>
export default {

}
</script>

<style scoped>
    span{
        font-size: 18px;
        color: #ccc;
        font-weight: bold;
    }
    
    .active{
      
        color: #ff0000;
    }
    
   #foot a.router-link-exact-active{
   
        color: red !important;
    }
</style>