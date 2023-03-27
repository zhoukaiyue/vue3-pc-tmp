<!--
 * @Descripttion: 顶级routerVIew
 * @version: 
 * @Author: zhoukai
 * @Date: 2022-10-26 16:42:22
 * @LastEditors: zhoukai
 * @LastEditTime: 2023-03-27 10:15:27
-->
<script setup lang="ts"></script>

<template>
    <router-view v-slot="{ Component, route }">
        <!-- 缓存的视图 -->
        <keep-alive>
            <component v-if="route.meta.keepAlive" :is="Component" :key="route.name || route.fullPath" />
        </keep-alive>
        <!-- 不缓存的视图 -->
        <component v-if="!route.meta.keepAlive" :is="Component" />
    </router-view>
</template>

<style scoped></style>
