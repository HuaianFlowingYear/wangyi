<template>
  <div class="login">
    <!-- <div class="w-[80%] flex justify-between items-center">
      <Icon icon="fluent-mdl2:status-circle-error-x" />
      <span class="text-[#ccc]">游客登录</span>
     </div> -->
     <!-- <div class=" flex  flex-col justify-between">
        <p>输入验证码</p>
        <p>验证码已发送至</p>
        <ul class=" flex">
            <li v-for="(item,index) in code" :key="index" class="text-[red]">{{item}}</li>
        </ul>
        <p>
          <a href="#">重新获取</a>
          <a href="#">手机号已停用</a>
        </p>
     </div> -->
   
  </div>
</template>

<script>

export default {
  name: 'Login',
  data(){
    return {
       code:'',
       value: '123',
      showKeyboard: true,
    }
  },
  created(){
    this.code = this.$route.params.code;
  },
  methods:{
    handleClick() {
      // 在这里执行子组件中的方法逻辑
      // ...
      this.$emit('child-event', 'hello from child');
    },
  },
  watch: {
    login(value) {
      if (value.length === 4) {
        
        this.$emit('login', this.code, this.value);
      }
    },
  },
  
}
</script>

<style scoped>
.login{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 12vw auto;
}
.ksns{
  border-bottom: 1px solid aqua;
}
</style>