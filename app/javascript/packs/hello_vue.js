import Vue from 'vue'
import App from '../app.vue'
import LoginForm from '../login_form.vue'

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    render: h => h(App)
  }).$mount()
  document.body.appendChild(app.$el)

  console.log(app)
})

