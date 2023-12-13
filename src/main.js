import Vue from 'vue'
import App from './App.vue'
// @的优先级比.号高
// import router from './router'
import router from './router';
import store from './store';
import '@/assets/main.css'
import Footer from '@/components/Footer'
// import Play from '@/components/Play'
import { Icon } from '@iconify/vue2';
import 'vant/lib/index.css';
import AudioPlayer from '@/components/play'
import * as Sentry from "@sentry/vue";
// import Player from '@/components/play/player'
// Vue.use(Player)
Vue.use(AudioPlayer);
import Vant from 'vant';
Vue.use(Vant);
import Plyr from 'plyr';
Vue.component('plyr', Plyr);

Vue.config.productionTip = false
Vue.component('Icon', Icon)
Vue.component('Footer', Footer)

Sentry.init({
    Vue,
    dsn: "https://fab3adee0b0cde177a8633ce96131a08@o4506386926600192.ingest.sentry.io/4506387958988800",
    integrations: [
        new Sentry.BrowserTracing({
            routingInstrumentation: Sentry.vueRouterInstrumentation(router),
            tracePropagationTargets: [],
        }),
    ],
    tracesSampleRate: 1.0,
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,
});


new Vue({
    router,
    store,
    linkActiveclass: "active",
    linkExactActiveclass: "exactactive",
    render: h => h(App)
}).$mount('#app')