<template>
    <div>
      <h2 class="m-auto mt-6 flex justify-between w-[90vw]">
        <router-link to="/index">
           <span>
              <Icon icon="iconamoon:close-bold" />
           </span>
        </router-link>
        <span>游客登入</span>
      </h2>
      <div v-if="flay">
        <div class="mt-10 m-auto w-[90vw] flex justify-center">
          <Icon
            icon="ri:netease-cloud-music-fill"
            class="text-[#F12A24] text-[30vw]"
          />
        </div>
        <div class="border-2 m-auto flex items-center w-[80vw] h-[15vw] rounded-[2vw]">
          <van-cell @click="show = true">+{{title}}</van-cell>
          <van-action-sheet v-model="show" title="选择国家">
            <div class="content">
                <van-index-bar :index-list="indexList">
                    <van-index-anchor v-for="(item,index) in contryList" :key="index">
                        {{ item.label }}
                        <van-cell v-for="(i,n) in item.countryList" :key="n">
                            <div @click="some(i.code)" class="flex justify-between">
                                <span>{{i.zh}}</span>
                                <span>{{i.code}}</span>
                            </div>
                        </van-cell>
                    </van-index-anchor>      
                  </van-index-bar>
            </div>
          </van-action-sheet>
          <input
            type="search"
            class="outline-none pl-4 w-[60vw]"
            v-model="phone"
          />
        </div>
        <div class="m-auto w-[80vw] mt-6">
          <button
            class="text-[5vw] text-white w-[80vw] h-[15vw] rounded-[7.5vw] bg-[#FF3A39]"
            @click="sentCard"
          >
            获取验证码
          </button>
        </div>
        <div class="m-auto w-[80vw] mt-6 flex h-[10vw]">
          <span class="h-[8vw]">
            <van-checkbox v-model="checked" class="mt-1"></van-checkbox>
          </span>   
          <p class="pl-5">
            我已阅读并同意《服务条款》、《隐私政策》
        </p>
        </div>
      </div>
      <div v-else>
          <p class="ml-[6vw]">验证码已发送至{{phone}}</p>
            <!-- 密码输入框 -->
        <input type="tel" ref="input" v-model="captcha" style=""  >
        <van-password-input
            :value="captcha"
            :focused="focused"
            :length="4"
            :mask="false"
            @focus="showKeyboard = true"
            :gutter="13"
        />
        <p class="flex justify-around"><a href="#">重新获取 
            (<van-count-down :time="time" style="display:inline-block">
                <template #default="timeData">
                    <span class="block">{{ timeData.seconds }}</span>
                </template>
            </van-count-down>) </a>
            <a href="#">手机号已停用</a>
        </p>
      </div>
    </div>
  </template>
  <script>
  import { Toast } from 'vant';
  import { getCaptcha,getCountries} from "@/service";
  export default {
    data() {
      return {
        title:"86",
        phone: "",
        captcha: "12",
        flay: true,
        checked: true,
        code:'',
        value: '',
        showKeyboard: true,
        value1: 0,
        time: 30 * 60 * 60 * 1000,
        show:false,
        indexList:[],
        contryList:[],
        focused:false

      };
    },
    async created(){
        const [err,res] = await getCountries({type:0})
        if (err) return console.log(err)
        console.log('地区数据',res.data);
        this.option1.text = '866',
        this.contryList = res.data.data
        console.log(this.contryList );
    },
    methods: {
      async sentCard() {
          if (!/^1[356789]\d{9}$/.test(this.phone)) return Toast('手机号格式错误');
          const [err, res] = await getCaptcha({ phone: this.phone });
          if (err) return Toast('获取验证码失败');
          this.flay = false;
          Toast('获取验证码成功');
          console.log(res);
      },
      
        loginHandler() {
            if (!/^\d{4}$/.test(this.captcha)) return alert("验证码不合法");
            this.$store.dispatch("requestLoginCellphone", {
                phone: this.phone,
                captcha: this.captcha,
            });
        },
        focusInput() {
      this.$refs.input.focus();
      this.focused = true;
    },
        some(res){
            this.show = false;
            this.title = res
            console.log(res);
        }
    },
    watch:{
      captcha(){
        this.captcha.length ==4?this.loginHandler():''
      }
    }
    // watch: {
    //   value() {
    //         if (this.value.length === 4) {
    //           this.loginHandler();
    //           this.$router.push('/index');
    //         } 
    //     },
      
    // },
    
  };
  </script>
  
  <style scoped>
  span {
    position: relative;
  }
  .Checkbox {
    position: absolute;
    visibility: hidden;
  }
  .Checkbox + label {
    position: absolute;
    width: 16px;
    height: 16px;
    border: 1px solid #a6a6a6;
    border-radius: 50%;
    background-color: #dedede;
  }
  .Checkbox:checked + label:after {
    content: "";
    position: absolute;
    left: 2px;
    top: 2px;
    width: 9px;
    height: 4px;
    border: 2px solid #424242;
    border-top-color: transparent;
    border-right-color: transparent;
    transform: rotate(-45deg);
    -ms-transform: rotate(-60deg);
    -moz-transform: rotate(-60deg);
    -webkit-transform: rotate(-60deg);
  }
  ul li {
    border-bottom: 1px solid black;
  }
  </style>
  