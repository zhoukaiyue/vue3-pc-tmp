<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhoukai
 * @Date: 2022-11-28 16:32:36
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-12-19 13:53:38
-->
<template>
    <div flex justify-center items-center pt-20>
        <!-- 进入开发者中心 -->
        <n-button type="info" text-18 @click="devEvt"> 开发者中心 </n-button>
    </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';

const router = useRouter();
function devEvt() {
    router.push({
        path: '/dev'
    });
}
</script>
<style scoped lang="scss"></style>
