import Vue from 'vue'
import App from './App'
import router from './router'


Vue.config.productionTip = false;

Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
});

Vue.component('modal', {
  template: '#modal-template'
});

new Vue({
  render: h => h(App),
  router,
  data: {
    showModal: false
  }
}).$mount('#app');