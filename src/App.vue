<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhoukai
 * @Date: 2022-10-26 16:42:22
 * @LastEditors: zhoukai
 * @LastEditTime: 2023-03-01 11:06:36
-->
<script setup lang="ts">
// naiveui message
import message from '@/resources/components/base-message/index.vue';
</script>

<template>
    <!-- naiveui message API注册 START -->
    <n-message-provider>
        <message />
    </n-message-provider>
    <!-- naiveui message API注册 END -->

    <router-view v-slot="{ Component }">
        <component :is="Component" />
    </router-view>
</template>

<style scoped></style>
