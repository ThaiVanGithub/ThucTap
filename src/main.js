import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.css';
import App from './App.vue'
import router from './router';
import { Drawer, Button, message, List, Menu } from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import '../src/static/fontawesome-free-6.7.2-web/fontawesome-free-6.7.2-web/css/all.min.css'
import { createI18n } from 'vue-i18n';
import './GlobalCSS/main.scss'

const messages = {
    en: {
      message: {
        hello: 'hello world',
        goodbye: 'goodbye world',
        name: 'My name is ...'
      }
    },
    vi: {
      message: {
        hello: 'xin chào thế giới',
        goodbye: 'tạm biệt thế giới',
        name: 'Tên tôi là ...'
      }
    }
  };

const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'en', 
    messages 
  });
const app = createApp(App);

app.use(i18n);
app.use(router)
app.use(Drawer)
app.use(List)
app.use(Menu)
app.use(Button)
app.mount('#app')
app.config.globalProperties.$message = message;

