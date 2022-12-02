import {defineStore} from "pinia";
import {User} from "../../types";


export const useUsersStore = defineStore('user', {
    state: () => ({users: <User[]>[]}),
    actions: {
        replace_users(users: User[]) {
            this.users = users;
        }
    },
    // getters: {   // gettersにusersがあると、stateへのセット時にそちらへの代入とみなされエラーが出る
    //     users(): User[] {
    //         return this.users;
    //     }
    // }
})