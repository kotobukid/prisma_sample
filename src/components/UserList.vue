<script setup lang="ts">
import {useUsersStore} from "../stores";

const userStore = useUsersStore();

const rev_users = (): void => {
    alert('反転します(action発行的なものの例)');
    const reversed_users = userStore.users.reverse();
    userStore.replace_users(reversed_users);
    // userStore.users = reversed_users;
}
</script>

<template lang="pug">
a.button(href="#" @click.prevent="rev_users") Reverse
ul
    li(v-for="u in userStore.users" v-text="`${u.name} (${u.age})`" :key="u.id")
</template>