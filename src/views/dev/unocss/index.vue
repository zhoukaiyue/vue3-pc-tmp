<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhoukai
 * @Date: 2022-12-06 16:06:01
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-12-08 15:06:49
-->

<template>
    <div>
        <div>
            <a href="https://uno.antfu.me/" target="_blank" c-blue text-18>UnoCSS</a>
            是一个原子 CSS 引擎而不是一个框架。一切都在设计时考虑了灵活性和性能。UnoCSS
            中没有核心实用程序，所有功能都是通过预设提供的。
        </div>

        <div flex justify-center items-center flex-col mt-20 w-350>
            <div flex flex-wrap justify-around p-10 rounded-10 b-1 bc-ccc>
                <div w-50 h-50 b-1 rounded-5 flex justify-center items-center p-10 m-20>
                    <span w-6 h-6 rounded-3 bg-black></span>
                </div>
                <div w-50 h-50 b-1 rounded-5 flex justify-between p-10 m-20>
                    <span w-6 h-6 rounded-3 bg-black></span>
                    <span w-6 h-6 rounded-3 bg-black self-end></span>
                </div>
                <div w-50 h-50 b-1 rounded-5 flex justify-between p-10 m-20>
                    <span w-6 h-6 rounded-3 bg-black></span>
                    <span w-6 h-6 rounded-3 bg-black self-center></span>
                    <span w-6 h-6 rounded-3 bg-black self-end></span>
                </div>
                <div w-50 h-50 b-1 rounded-5 flex justify-between p-10 m-20>
                    <div flex flex-col justify-between>
                        <span w-6 h-6 rounded-3 bg-black></span>
                        <span w-6 h-6 rounded-3 bg-black></span>
                    </div>
                    <div flex flex-col justify-between>
                        <span w-6 h-6 rounded-3 bg-black></span>
                        <span w-6 h-6 rounded-3 bg-black></span>
                    </div>
                </div>
                <div w-50 h-50 b-1 rounded-5 flex flex-col justify-between items-center p-10 m-20>
                    <div flex w-full justify-between>
                        <span w-6 h-6 rounded-3 bg-black></span>
                        <span w-6 h-6 rounded-3 bg-black></span>
                    </div>
                    <div w-6 h-6 rounded-3 bg-black></div>
                    <div flex w-full justify-between>
                        <span w-6 h-6 rounded-3 bg-black></span>
                        <span w-6 h-6 rounded-3 bg-black></span>
                    </div>
                </div>
                <div w-50 h-50 b-1 rounded-5 flex flex-col justify-between p-10 m-20>
                    <div flex w-full justify-between>
                        <span w-6 h-6 rounded-3 bg-black></span>
                        <span w-6 h-6 rounded-3 bg-black></span>
                    </div>
                    <div flex w-full justify-between>
                        <span w-6 h-6 rounded-3 bg-black></span>
                        <span w-6 h-6 rounded-3 bg-black></span>
                    </div>
                    <div flex w-full justify-between>
                        <span w-6 h-6 rounded-3 bg-black></span>
                        <span w-6 h-6 rounded-3 bg-black></span>
                    </div>
                </div>
            </div>
        </div>
        <p text-18>以上是unocss flex基础布局的使用</p>
    </div>
</template>

<script setup lang="ts"></script>
<style scoped lang="scss"></style>
