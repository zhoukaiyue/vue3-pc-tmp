<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhoukai
 * @Date: 2022-11-28 16:32:36
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-12-06 15:19:22
-->
<template>
    <div class="fs-24 fw-blod tl-center">主页</div>
</template>

<script lang="ts">
import { reactive, toRefs, onBeforeMount, onMounted } from 'vue';
export default {
    name: 'index',
    props: [],
    setup() {
        const state = reactive({});
        onBeforeMount(() => {
            console.log('2.组件挂载页面之前执行----onBeforeMount');
        });
        onMounted(() => {
            console.log('3.-组件挂载到页面之后执行-------onMounted');
        });
        const refState = toRefs(state);
        return {
            ...refState
        };
    }
};
</script>
<style scoped lang="scss"></style>
