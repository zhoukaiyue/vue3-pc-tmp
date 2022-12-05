<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhoukai
 * @Date: 2022-11-28 16:48:31
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-12-05 11:15:33
-->

<template>
    <div class="errpage err404">
        <n-result status="404" title="404 资源不存在" size="huge" description="生活总归带点荒谬">
            <template #footer>
                <n-button @click="goHomeEvt">回到首页</n-button>
            </template>
        </n-result>
    </div>
</template>

<script lang="ts">
import { reactive, toRefs, onBeforeMount, onMounted } from 'vue';
export default {
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
    },

    methods: {
        goHomeEvt() {
            this.$router.push({
                path: '/'
            });
        }
    }
};
</script>
<style scoped lang="scss">
.errpage,
.err404 {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
