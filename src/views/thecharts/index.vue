<template>
    <div>
       <div class="buPmeF pb-[24vw]">
           <div class="flex items-center justify-center w-[100%] px-[4vw] py-[3vw] bg-[#fff] dark:bg-[#000] text-[#010101]  text-[4.2vw] font-[600]">
               MV排行榜
           </div>
           <div class="bg-[#fff] dark:bg-[#000]">
               <van-tabs v-model="active" sticky animated>
               <van-tab  class="" v-for="(item,index) in arritem" :title='arritem[index].data[0].mv.area'  :key="index">
                  <div v-for="(arr_item) in item.data" :key="arr_item.id">
                    <!-- {{arr_item.id}}  -->
                    <div class="w-[92vw] mt-5 ml-[4vw] overflow-auto px-[4vw]">
                        <div class="w-[100%] h-[52vw] relative">
                            <router-link :to="{ path: '/videolist', query: {id:arr_item.id} }">
                                <img :src="arr_item.cover" alt="" class=" w-[100%] h-[52vw] bg-black rounded-[3vw] mb-[2.7vw]">
                            </router-link>
                            <div class="absolute top-[2vw] text-[#fff] right-[2vw] text-[2.6vw] flex items-center">
                                <Icon icon="tabler:triangle-filled" color="white" :rotate="1" />
                                {{ arr_item.playCount }}
                            </div>
                        </div>
                        <div class="h-[15vw] flex items-center flex-wrap">
                            <div class="flex h-[5vw] w-[100vw]">
                                <span class="w-[5.3vw] text-[4.3vw] mr-[2.8vw] text-center text-[red]">{{ arr_item.lastRank }}</span>
                                <span class=" flex-1 line-clamp-1 text-[#000] text-[4vw] font-semibold h-[5vw]">{{arr_item.name}}</span>
                            </div>
                            <div class="flex h-[4vw] items-center">
                                <div class="w-[5.3vw] text-[#999999] text-[2vw] mr-[2.8vw] flex items-center justify-center">-</div>
                                <div class=" flex-1 line-clamp-1 text-[#7c7c7c] text-[2vw]">
                                    <span>{{ arr_item.artistName}}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>

               </van-tab>
               </van-tabs>
           </div>

       </div>
    </div>
</template>

<script>
import {mvAll} from '@/service'
export default {
   data() {
       return {
         active: 0,
         arr:['内地','港台','欧美','韩国','日本'],
         arr1:[],
         arritem:[]
       };
   },
   components:{
      
   },
   async created() {
    for (let index = 0; index < this.arr.length; index++) {
      const [err, res] = await mvAll({
        type: 0,
        area: this.arr[index],
      });
      if (err) return alert(err);
      this.arritem.push(res.data);  
    //   console.log(this.arritem);
    //   this.arr1.push(res.config.params.area)
    }
  
   
   
    },
    
  

   
}



</script>

<style>

</style>