// import Home from '@/views/home';
// import Mine from '@/views/mine';
import Index from '@/views/index';
// import thecharts from '@/views/thecharts';
// import Vue from 'vue'
// import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
// import Course from '../views/Course.vue'


export default [{
        path: '/',
        redirect: '/index'
    },
    {
        path: '/home',
        name: 'home',
        component: () =>
            import ('@/views/home')
    },
    {
        path: '/mine',
        name: 'mine',
        component: () =>
            import ('@/views/mine')
    },
    {
        path: '/index',
        name: 'index',
        component: Index
    },
    {
        path: '/login',
        name: 'login',
        component: () =>
            import ('@/views/login/index.vue')
    },
    {
        path: '/my',
        name: 'my',
        component: () =>
            import ('@/views/my')
    },
    {
        path: '/musiclist',
        name: 'musiclist',
        component: () =>
            import ('@/views/musiclist')
    },
    {
        path: '/thecharts',
        name: 'thecharts',
        component: () =>
            import ('@/views/thecharts')
    },
    {
        path: '/videolist',
        name: 'videolist',
        component: () =>
            import ('@/views/videolist')
    },
    {
        path: '/audioPlay',
        name: 'audioPlay',
        component: () =>
            import ('@/components/play')
    },
    {
        path: '/playlist',
        name: 'playlist',
        component: () =>
            import ('@/views/playlist')
    },
    {
        path: '/commentlist',
        name: 'commentlist',
        component: () =>
            import ('@/views/commentlist')
    },
    {
        path: '/search',
        name: 'search',
        component: () =>
            import ('@/views/search')
    }


];