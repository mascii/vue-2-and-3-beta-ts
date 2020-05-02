import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
import App from './common/App.vue'

Vue.use(VueCompositionAPI);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
