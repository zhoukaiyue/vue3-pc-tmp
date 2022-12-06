<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhoukai
 * @Date: 2022-12-06 10:57:44
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-12-06 10:58:56
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
