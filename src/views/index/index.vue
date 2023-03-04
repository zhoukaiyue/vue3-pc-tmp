<!--
 * @Descripttion: 首页
 * @version: 
 * @Author: zhoukai
 * @Date: 2022-11-28 16:32:36
 * @LastEditors: zhoukai
 * @LastEditTime: 2023-03-02 22:26:03
-->
<script lang="ts" setup>
// 默认打开模态框
const showModal = ref(true);

// 执行 positive 时执行的回调函数
const router = useRouter();
function handlePositiveClick() {
    router.push({
        path: '/dev'
    });
}
</script>
<template>
    <div pt-20>
        <!-- 进入开发者中心模态框 -->
        <n-modal v-model:show="showModal" :mask-closable="false">
            <n-dialog
                title="提示"
                :closable="false"
                content="进入开发者中心"
                @positive-click="handlePositiveClick"
                positive-text="确认"
            />
        </n-modal>
    </div>
</template>

<style scoped lang="scss"></style>
