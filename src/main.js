import Vue from 'vue';
import App from './App';
import router from './router';//引入router下的index.js文件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';    // 默认主题
import store from "./store/index.js"
// import '../static/css/theme-green/index.css';       // 浅绿色主题
import "babel-polyfill";
import axios from './axios'
Vue.prototype.$axios = axios;
Vue.use(ElementUI);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
