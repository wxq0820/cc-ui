import DialogDemo from './dialogDemo.vue'
import { createApp, h } from 'vue'
export const openDialog = (options) => {
  const { title, content } = options
  const div = document.createElement('div')
  document.body.append(div)
  const app = createApp({
    render() {
      return h(
        DialogDemo,
        {
          visible: true,
          'onUpdate:visible': (newVisible) => {
            if (newVisible === false) {
                app.unmount(div)
                div.remove()
            }
          }
        },
        { title, content }
      )
    },
  })
  app.mount(div)
}
