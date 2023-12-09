import Vue from 'vue';
import Vuex from 'vuex';
import persistedstate from 'vuex-persistedstate'
import { getHomePageData, getHomepageDragonBall, loginCellphone, } from "@/service";

Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        blocks: [],
        menus: [],
        auth: {},
        isDark: false,
        songId: null // 初始化songId为null
    },
    getters: {
        getSongId(state) {
            return state.songId;
        }
    },
    mutations: {
        updatedBlocks(state, res) {
            state.blocks = res.data.data.blocks;
        },
        updatedMenus(state, res) {
            state.menus = res.data.data;
        },
        updateAuth(state, res) {
            state.auth = res.data;
        },
        // exit() {
        //     localStorage.clear();
        // },
        changeDark(state, payload) {
            state.isDark = payload
        },
        setSongId(state, id) {
            state.songId = id;
        }

    },
    actions: {
        async requestHomePageData() {
            const [err, HomePageData] = await getHomePageData();
            if (err) return;
            store.commit("updatedBlocks", HomePageData)
        },
        async requestHomepageDragonBall() {
            const [err, HomepageDragonBall] = await getHomepageDragonBall();
            if (err) return;
            store.commit("updatedMenus", HomepageDragonBall)
        },
        async requestLoginCellphone(store, data) {
            const [err, res] = await loginCellphone(data);
            if (err) return alert("请求错误，请稍后再试！");
            store.commit("updateAuth", res);
            console.log(res);
        },
        updateSongId({ commit }, id) {
            commit('setSongId', id);
        }
    },
    plugins: [persistedstate()]
});

window.store = store

export default store;