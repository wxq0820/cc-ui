import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './views/home.vue'
import Doc from './views/doc.vue'
import Switch from './components/switch.vue'
import Button from './components/button.vue'
import Tabs from './components/tabs.vue'
import Dialog from './components/dialog.vue'
import DocDemo from './components/docDemo.vue'

const history = createWebHashHistory()
export const router = createRouter({
  history: history,
  routes: [
    { path: '/', component: Home },
    {
      path: '/doc',
      component: Doc,
      children: [
        { path: '', component: DocDemo },
        { path: 'switch', component: Switch },
        { path: 'button', component: Button },
        { path: 'tabs', component: Tabs },
        { path: 'dialog', component: Dialog },
      ],
    },
  ],
})
