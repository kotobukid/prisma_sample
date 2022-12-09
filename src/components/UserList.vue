<script setup lang="ts">
import {useUsersStore} from "../stores";
import {computed, ref} from "vue";

const userStore = useUsersStore();

const rev_users = (): void => {
    alert('反転します(action発行的なものの例)');
    const reversed_users = [...userStore.users].reverse();
    userStore.replace_users(reversed_users);
    // userStore.users = reversed_users;
}

const sorted_users = computed(() => {
    return local_reverse.value ? [...userStore.users].reverse() : userStore.users;
})

const local_reverse = ref(false)
</script>

<template lang="pug">
a.button(href="#" @click.prevent="rev_users") Reverse Global
label
    input(type="checkbox" v-model="local_reverse")
    span Local Reverse
ul
    li(v-for="u in sorted_users" v-text="`${u.name} (${u.age})`" :key="u.id")
</template>