<script setup lang="ts">
import {ref} from 'vue'
import UserList from './UserList.vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
<h1>{{ msg }}</h1>
<UserList></UserList>
<hr>
<UserList></UserList>
<div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
</div>

</template>

<style scoped>

</style>
