import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './styles/index.less' // 加载全局样式
// 引入vant组件库
import Vant from 'vant'
import 'vant/lib/index.css'
import 'amfe-flexible' // 引入REM动态设置
Vue.use(Vant) // 注册Vant组件
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
