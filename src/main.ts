import {createApp} from 'vue'
import './style.css'
import App from './App.vue'

fetch('/api/user').then((resp: Response) => {
    console.log(resp.body)
    createApp(App).mount('#app')
});