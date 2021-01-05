import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './views/home.vue'
import Doc from './views/doc.vue'
import Switch from './components/switch.vue'
import Button from './components/button.vue'
import Tabs from './components/tabs.vue'
import Dialog from './components/dialog.vue'
import DocDemo from './components/docDemo.vue'
import Intro from './views/intro.vue'
import Install from './views/install.vue'
import GetStart from './views/getStart.vue'

const history = createWebHashHistory()
export const router = createRouter({
  history: history,
  routes: [
    { path: '/', component: Home },
    {
      path: '/doc',
      component: Doc,
      children: [
        { path: '', redirect: '/doc/intro' },
        { path: 'intro', component: Intro },
        { path: 'install', component: Install },
        { path: 'get-start', component: GetStart },
        { path: 'switch', component: Switch },
        { path: 'button', component: Button },
        { path: 'tabs', component: Tabs },
        { path: 'dialog', component: Dialog },
      ],
    },
  ],
})
