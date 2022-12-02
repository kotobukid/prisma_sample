<script setup lang="ts">
import {computed} from "vue";

const props = defineProps({
    color: {type: String, required: false, default: 'grey'}
})

const style_text = computed((): string => {
    return `outline-color: ${props.color}`;
})

</script>

<template lang="pug">
.framed_box(:style="style_text")
    slot
</template>

<style scoped lang="less">
.framed_box {
    outline: 1px solid grey;
}
</style>