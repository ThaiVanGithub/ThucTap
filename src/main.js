import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.css';
import App from './App.vue'
import router from './router';
import { Drawer, Button, message, List, Menu } from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import '../src/static/fontawesome-free-6.7.2-web/fontawesome-free-6.7.2-web/css/all.min.css'




const app = createApp(App);


app.use(router)
app.use(Drawer)
app.use(List)
app.use(Menu)
app.use(Button)
app.mount('#app')
app.config.globalProperties.$message = message;

