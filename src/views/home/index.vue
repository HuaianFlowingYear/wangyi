<template>
    <div>
      <button @click="f1">get</button>
      <button @click="f2">post</button>
      <!-- 昨天的—————————————————————————————— -->
        <!-- <div class="w-[100px] h-[100px] bg-[#abcdef] rounded-md mx-auto mt-[100px] leading-[100px] text-center decoration-neutral-500">
            div
        </div>
      Home {{ count }}
      <button @click="setCount()">Sync</button>
      <button @click="delaySetCount()">async</button> -->
    </div>
  </template>
  
  <script>
  // import axios from 'axios';
  import {getArtistList} from '@/service'
 export default{
    methods:{
      f1(){
        // axios如何发送请求
        //一、发送get请求
        // 写法1
        // axios.request({
        //   method:'get',//请求方式
        //   url:'/artist/list',//请求路径
        //   params:{//get请求的参数
        //     type:2,
        //     area:7,
        //     limit:10,
        //   }
        // }).then(res=>console.log(res))//请求成功后的回调
        // .catch(err => console.log(err))//请求失败的回调
          getArtistList({type:2,area:7,limit:10}).then(res=>console.log(res))
      .catch(err=>console.log(err))
      // 写法2：是第一种写法的语法糖
      // axios.get('/artist/list',{
      //   params:{//get请求的参数
      //       type:2,
      //       area:7,
      //       limit:10,
      //     }
      // }).then(res=>console.log(res))
      // .catch(err=>console.log(err))
      },
      // f2(){
         // 二、发送post请求
      // 1、方式1      
      // axios.request({
      //   method:'post',
      //   url:'/artist/list',
      //   data:{
      //     type:1,
      //     area:96,
      //     limit:20,
      //   }
      // }).then(res=>console.log(res))
      // .catch(err=>console.log(err))
      // 写法2
      // axios.post(`/artist/list?timestamp${Date.now()}`,{type:2,area:7,limit:15,})
      // .then(res=>console.log(res))
      // .catch(err=>console.log(err))
      // }
    }
  }
  // 昨天的——————————————————————————————
  // import { mapState, mapMutations, mapActions } from 'vuex';
  // import { SET_COUNT } from '@/store/mutations.type';
  
  // export default {
  //   computed: {
  //     ...mapState(['count']),
  //   },
  //   methods: {
  //     ...mapMutations({ setCount: SET_COUNT }),
  //   // ...mapMutations([SET_COUNT]),
  //     ...mapActions(['delaySetCount']),
  //   },
  // };
  </script>
  