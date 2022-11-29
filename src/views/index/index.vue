<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhoukai
 * @Date: 2022-11-28 16:32:36
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-11-29 14:28:14
-->
<template>
    <div class="index fs-10">主页</div>
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
<style scoped lang="scss">
.index {
    display: flex;
}
</style>
