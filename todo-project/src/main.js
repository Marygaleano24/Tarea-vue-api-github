import Vue from 'vue'
import App from './App.vue'
import router from './router'
// ElementUIとCSSファイルをimport
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.config.debug = true;
Vue.config.devtools = true;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
