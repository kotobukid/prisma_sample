<script setup lang="ts">
import {computed, ref} from 'vue';
import type {ComputedRef} from 'vue';

const style_text: ComputedRef<string> = computed(() => {
    return `background: linear-gradient(${deg.value}deg, #67dafd, #f773db); border-color: ${border_style.value};`;
});

const border_style = computed(() => {
    // @ts-ignore
    return timerId.value > 0 ? '#882424': 'black';
})

const deg = ref(0);

let timerId = ref(-1);

const toggle_rotation = () => {
    // @ts-ignore
    if (timerId.value > 0) {
        clearTimeout(timerId.value);
        // @ts-ignore
        timerId.value = -1;
    } else {
        // @ts-ignore
        timerId.value = setInterval(() => {
            deg.value = deg.value += 1;
            if (deg.value > 359) {
                deg.value = 0;
            }
        }, 16 * 4);
    }
}

</script>

<template lang="pug">
.rotation_box(:style="style_text" @click="toggle_rotation")
</template>

<style scoped lang="less">
.rotation_box {
    width: 100px;
    height: 100px;
    border-width: 5px;
    border-color: black;
    border-style: solid;
}
</style>