<!--
 * @Descripttion: pinia状态机的使用demo
 * @version: 
 * @Author: zhoukai
 * @Date: 2023-02-02 17:04:22
 * @LastEditors: zhoukai
 * @LastEditTime: 2023-02-03 11:49:41
-->
<!--------------------------------- <script setup> START     -->
<!-- <script setup lang="ts">
import { useDevStore } from '@/config/store/dev';
/**
 * 获取store
 * 直接解构会失去响应式: 但是可以通过以下两种方式获取
 * 方式1: 通过计算属性获取
 * 方式2: 通过pinia 内置方法storeToRefs()解构
 */
const store = useDevStore();

/**
 * 错误写法：
 * 直接结构，这样写会失去响应。
 * const { count } = store;
 */

// ---------------  正确写法至通过计算属性获取 START------------------
/**
 * 通过计算属性获取
 */
const count1 = computed({
    get: () => store.count,
    set: (val) => {
        store.count = val;
    }
});

// methods ↓
// 递加
const add1 = () => {
    count1.value++;
};
// 递减
const reduce1 = () => {
    count1.value--;
};
// 步进
const decrease1 = () => {
    count1.value += 10;
};
// 重置，通过调用 store 的 $reset() 方法将 state 重置为初始值。
const resetCount1 = () => {
    store.$reset();
};
// ---------------   END  ------------------

// ---------------  正确写法之通过pinia 内置方法storeToRefs()解构 START------------------
/**
 * 通过计算属性获取
 */
const { count } = storeToRefs(store);

// methods ↓
// 递加
const add2 = () => {
    count.value++;
};
// 递减
const reduce2 = () => {
    count.value--;
};
// 步进
const decrease2 = () => {
    count.value += 10;
};
// 重置，通过调用 store 的 $reset() 方法将 state 重置为初始值。
const resetCount2 = () => {
    store.$reset();
};
// ---------------   END  ------------------
</script> -->
<!--------------------------------- END     -->

<template>
    <div>
        使用文档：src/config/store/dev/README.md

        <div style="height: 30px"></div>
        <p>方式一：通过计算属性获取store,并更新store</p>
        <div>{{ count1 }}</div>
        <n-button aria-label="Increment value" @click="add1">增加</n-button>
        <n-button aria-label="Decrement value" @click="reduce1">减少</n-button>
        <n-button aria-label="Decrement value" @click="decrease1">步进</n-button>
        <n-button aria-label="Decrement value" @click="resetCount1">重置</n-button>

        <div style="height: 30px"></div>
        <p>方式二：通过pinia 内置方法storeToRefs()解构store,并更新store</p>
        <div>{{ count }}</div>
        <n-button aria-label="Increment value" @click="add2">增加</n-button>
        <n-button aria-label="Decrement value" @click="reduce2">减少</n-button>
        <n-button aria-label="Decrement value" @click="decrease2">步进</n-button>
        <n-button aria-label="Decrement value" @click="resetCount2">重置</n-button>
    </div>
</template>

<!-- 组合式 -->
<script lang="ts">
import { useDevStore } from '@/config/store/dev';

export default {
    setup() {
        /**
         * 获取store
         * 直接解构会失去响应式: 但是可以通过以下两种方式获取
         * 方式1: 通过计算属性获取
         * 方式2: 通过pinia 内置方法storeToRefs()解构
         */
        const store = useDevStore();

        /**
         * 错误写法：
         * 直接结构，这样写会失去响应。
         * const { count } = store;
         */

        // ---------------  正确写法至通过计算属性获取 START------------------
        /**
         * 通过计算属性获取
         */
        const count1 = computed({
            get: () => store.count,
            set: (val) => {
                store.count = val;
            }
        });

        // methods ↓
        // 递加
        const add1 = () => {
            count1.value++;
        };
        // 递减
        const reduce1 = () => {
            count1.value--;
        };
        // 步进
        const decrease1 = () => {
            count1.value += 10;
        };
        // 重置，通过调用 store 的 $reset() 方法将 state 重置为初始值。
        const resetCount1 = () => {
            store.$reset();
        };
        // ---------------   END  ------------------

        // ---------------  正确写法之通过pinia 内置方法storeToRefs()解构 START------------------
        /**
         * 通过计算属性获取
         */
        const { count } = storeToRefs(store);

        // methods ↓
        // 递加
        const add2 = () => {
            count.value++;
        };
        // 递减
        const reduce2 = () => {
            count.value--;
        };
        // 步进
        const decrease2 = () => {
            count.value += 10;
        };
        // 重置，通过调用 store 的 $reset() 方法将 state 重置为初始值。
        const resetCount2 = () => {
            store.$reset();
        };
        // ---------------   END  ------------------

        // 返回值会暴露给模板和其他的选项式 API 钩子
        return {
            store,
            count1,
            add1,
            reduce1,
            decrease1,
            resetCount1,
            count,
            add2,
            reduce2,
            decrease2,
            resetCount2
        };
    }
};
</script>
<style scoped lang="scss"></style>
