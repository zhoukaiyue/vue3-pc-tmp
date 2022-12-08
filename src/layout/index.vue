<!--
 * @Descripttion: 基础布局组件
 * @version: 
 * @Author: zhoukai
 * @Date: 2022-12-06 10:57:44
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-12-08 16:20:08
-->
<template>
    <router-view v-slot="{ Component }">
        <component :is="Component" />
    </router-view>
</template>

<script lang="ts" setup></script>
<style scoped lang="scss"></style>
