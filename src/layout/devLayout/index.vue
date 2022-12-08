<!--
 * @Descripttion: 开发者中心的基础布局组件
 * @version: 
 * @Author: zhoukai
 * @Date: 2022-12-06 16:06:35
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-12-08 14:41:01
-->
<!-- 开发者中心的基础布局组件 -->
<template>
    <n-layout has-sider class="w-100% h-100%">
        <n-layout-sider collapse-mode="width" :collapsed-width="120" :width="240" show-trigger="arrow-circle" bordered>
            <left-menu></left-menu>
        </n-layout-sider>
        <n-layout-content content-style="padding: 24px;">
            <router-view v-slot="{ Component }">
                <component :is="Component" />
            </router-view>
        </n-layout-content>
    </n-layout>
</template>

<script lang="ts" setup>
import leftMenu from './leftMenu/index.vue';
</script>
<style scoped lang="scss"></style>
