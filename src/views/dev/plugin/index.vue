<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhoukai
 * @Date: 2023-03-01 11:54:00
 * @LastEditors: zhoukai
 * @LastEditTime: 2023-05-22 14:20:36
-->
<script setup lang="ts">
import message from './components/message.vue';
import copy from './components/copy.vue';
</script>
<template>
    <div>
        <n-divider title-placement="left">信息 Message</n-divider>
        <message></message>
        <n-divider title-placement="left">copy</n-divider>
        <copy></copy>
    </div>
</template>

<style scoped lang="scss"></style>
