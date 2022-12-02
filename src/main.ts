import axios, {AxiosResponse} from "axios";
import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import {createPinia} from "pinia";
import {useUsersStore} from "./stores";
import {User} from "../types";

const pinia = createPinia();

axios.get('/api/user').then((resp: AxiosResponse<{ users: User[] }>) => {
    const app = createApp(App);
    app.use(pinia);

    const userStore = useUsersStore();

    // userStore.users = resp.data.users;
    userStore.replace_users(resp.data.users);   // Piniaはstoreのプロパティに直接代入しても良いらしい？が…

    app.mount('#app')
});