<!--
 * @Descripttion: 基础布局组件
 * @version: 
 * @Author: zhoukai
 * @Date: 2022-12-06 10:57:44
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-12-08 15:10:12
-->
<!-- <script setup lang='ts'></script> -->
<template>
    <router-view v-slot="{ Component }">
        <component :is="Component" />
    </router-view>
</template>

<script lang="ts" setup>
import { RouterView } from 'vue-router';
</script>
<style scoped lang="scss"></style>
