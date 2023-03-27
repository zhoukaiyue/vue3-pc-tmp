<!--
 * @Descripttion: 顶级routerVIew
 * @version: 
 * @Author: zhoukai
 * @Date: 2022-10-26 16:42:22
 * @LastEditors: zhoukai
 * @LastEditTime: 2023-03-27 10:06:23
-->
<script setup lang="ts"></script>

<template>
    <router-view v-slot="{ Component }">
        <component :is="Component" />
    </router-view>
</template>

<style scoped></style>
