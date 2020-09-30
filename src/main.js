import data from './mixins/data.js';
import messages from './locales/messages.js';
import router from './router/router.js';

import Vue from 'vue';
import VueI18n from 'vue-i18n';
import VueLazyload from 'vue-lazyload'
import App from './App.vue';

import Helper from './libraries/Helper.js';

Vue.use(VueI18n);
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: Helper.characters.imagePath(),
  loading: Helper.images.blurLoader(),
  attempt: 1
});

const i18n = new VueI18n({
  locale: data.config.locales.default,
  messages
});

new Vue({
  i18n,
  router,
  el: '#app',
  render: h => h(App)
});
