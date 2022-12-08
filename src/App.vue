<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhoukai
 * @Date: 2022-10-26 16:42:22
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-12-08 16:21:30
-->
<script setup lang="ts"></script>

<template>
    <router-view v-slot="{ Component }">
        <component :is="Component" />
    </router-view>
</template>

<style scoped></style>
