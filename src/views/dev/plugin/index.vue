<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhoukai
 * @Date: 2023-03-01 11:54:00
 * @LastEditors: zhoukai
 * @LastEditTime: 2023-03-27 10:08:12
-->
<script setup lang="ts">
import { getCurrentInstance } from 'vue';
import type { ComponentInternalInstance } from 'vue';
const { appContext } = getCurrentInstance() as ComponentInternalInstance;

/**
 * 打开message信息弹窗
 * TODO:以vue插件的形式调用
 */
const openMessage = () => {
    /**
     * 以 warning 为例,支持官方 [MessageProvider Props](https://www.naiveui.com/zh-CN/os-theme/components/message#MessageProvider-Props)
     */
    appContext.config.globalProperties.$message.warning('How many roads must a man walk down');
};

/**
 * 打开可关闭的message信息弹窗
 * TODO:通过window方法调用
 */
const createMessage = () => {
    /**
     * 以 info 为例,支持官方 [MessageProvider Props](https://www.naiveui.com/zh-CN/os-theme/components/message#MessageProvider-Props)
     */
    window.$message.info("I don't know why nobody told you how to unfold your love", {
        closable: true,
        duration: 5000
    });
};
</script>
<template>
    <div>
        <n-divider title-placement="left">信息 Message</n-divider>
        <n-button type="primary" @click="openMessage">信息 Message</n-button>
        <n-button ml-20px type="primary" @click="createMessage">信息 Message</n-button>
    </div>
</template>

<style scoped lang="scss"></style>
