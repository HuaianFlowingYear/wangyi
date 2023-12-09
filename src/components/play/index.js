// import Vue from "vue";
import Play from "./Play.vue";
import Player from "./player";
const player = new Player();

// export default (Vue) => Vue.component(Play.name, Play);
export default {
    install(Vue) {
        Vue.component(Play.name, Play)
            // 全局混入响应的player的实例，方便在任何组件里调用
        Vue.mixin({
            computed: {
                mixin_player() {
                    return Vue.observable(player)
                }
            }
        })
    }

}