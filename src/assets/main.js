import vue from 'vue'
import app from './../components/app.js'

/* -------------------------------------------------------------------------- */

new vue({
  el: '#app',
  render: h => h(app),
})

/* -------------------------------------------------------------------------- */
