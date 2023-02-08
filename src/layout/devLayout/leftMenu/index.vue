<!--
 * @Descripttion: 左侧导航菜单
 * @version: 
 * @Author: zhoukai
 * @Date: 2022-12-06 16:31:06
 * @LastEditors: zhoukai
 * @LastEditTime: 2023-02-02 09:53:52
-->

<template>
    <n-menu
        :collapsed-width="64"
        :collapsed-icon-size="22"
        :options="menuOpt"
        key-field="whateverKey"
        label-field="whateverLabel"
        v-model:value="selectedKey"
        @update:value="menuChange"
    />
</template>

<script lang="ts" setup>
import type { Component } from 'vue';
import type { MenuOption } from 'naive-ui';
import { NIcon } from 'naive-ui';
import routes from '@/config/router/dev';
import { useRouter, useRoute } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

const router = useRouter();
const route = useRoute();

/**
 * 构造icon
 */
const renderIcon = function (icon: Component) {
    return () => h(NIcon, null, { default: () => h(icon) });
};

//------ data --------
const selectedKey = ref(route.name); //菜单当前的选中值
const menuOpt = ref([] as MenuOption[]); //菜单数据

/**
 * 获取菜单的数据
 * @param routes
 */
const getMenuItem = function (routes: RouteRecordRaw[]) {
    routes.forEach((item: RouteRecordRaw) => {
        if (item.children && item.children.length) getMenuItem(item.children);
        else
            menuOpt.value.push({
                whateverLabel: item?.meta?.title,
                whateverKey: item.name,
                routerConf: item,
                icon: renderIcon(item?.meta?.icon || '')
            });
    });
};

getMenuItem(routes);

/**
 * 选中菜单的回调
 * @param key 是选中菜单项的 key
 * @param item 是菜单项原始数据
 * @returns {void}
 */
const menuChange = function (
    key: string,
    item: {
        routerConf: RouteRecordRaw;
    }
) {
    router.push(item.routerConf);
};
</script>
