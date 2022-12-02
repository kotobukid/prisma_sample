<script setup lang="ts"></script>

<template lang="pug">
.framed_box
    slot
</template>

<style scoped lang="less">
.framed_box {
    outline: 1px solid grey;
}
</style>