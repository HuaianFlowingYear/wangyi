import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';

//为什么要做这一步？（ 注册两个全局组件，分别是router-link、router-view）
Vue.use(VueRouter);
const router = new VueRouter({
    mode: "history",
    routes,
})
export default router;