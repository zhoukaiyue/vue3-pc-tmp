<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhoukai
 * @Date: 2022-11-28 16:32:36
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-12-20 14:51:09
-->
<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

// 默认打开模态框
const showModal = ref(true);

// 执行 positive 时执行的回调函数
const router = useRouter();
function handlePositiveClick() {
    router.push({
        path: '/dev'
    });
}
// 关闭模态框
function handleCloseModal() {
    showModal.value = false;
}
</script>
<template>
    <div pt-20>
        <span m-10 text-18>首页</span>
        <!-- 进入开发者中心模态框 -->
        <n-modal v-model:show="showModal">
            <n-dialog
                title="提示"
                content="进入开发者中心"
                v-on:close="handleCloseModal"
                @negative-click="handleCloseModal"
                @positive-click="handlePositiveClick"
                negative-text="不确认"
                positive-text="确认"
            />
        </n-modal>
    </div>
</template>

<style scoped lang="scss"></style>
