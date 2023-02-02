<!--
 * @Descripttion: 404页面
 * @version: 
 * @Author: zhoukai
 * @Date: 2022-11-28 16:48:31
 * @LastEditors: zhoukai
 * @LastEditTime: 2023-02-02 10:46:45
-->

<template>
    <div w-full h-full flex items-center justify-center>
        <n-result status="404" title="抱歉，您访问的页面不存在。" size="huge" description="生活总归带点荒谬">
            <template #footer>
                <n-button @click="goHomeEvt">回到首页</n-button>
            </template>
        </n-result>
    </div>
</template>

<script lang="ts">
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
            // 返回首页
            this.$router.push({
                path: '/index'
            });
        }
    }
};
</script>
<style scoped lang="scss"></style>
