<script setup lang="ts">
import {ref} from 'vue'
import UserList from './UserList.vue';
import RotationBox from "./RotationBox.vue";

defineProps<{ msg: string }>()

const count = ref(0)


const incr = () => {
    count.value = count.value + 3
}
</script>

<template lang="pug">
RotationBox
RotationBox
h1 {{ msg }}
UserList
hr
UserList
.card
    button(type="button" @click="incr") count is {{ count }}
</template>

<style scoped>

</style>
