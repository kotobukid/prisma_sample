<script setup lang="ts">
import {ref} from 'vue'
import UserList from './UserList.vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template lang="pug">
h1 {{ msg }}
UserList
hr
UserList
.card
    button(type="button" @click="count++") count is {{ count }}
</template>

<style scoped>

</style>
