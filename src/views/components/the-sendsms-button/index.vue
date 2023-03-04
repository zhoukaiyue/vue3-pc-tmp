<!--
 * @Descripttion: 发送短信验证码按钮
 * @version: 
 * @Author: zhoukai
 * @Date: 2023-03-03 13:54:40
 * @LastEditors: zhoukai
 * @LastEditTime: 2023-03-04 22:04:00
-->
<template>
    <!-- 发送验证码 -->
    <n-button class="sms-field—rightBtn" type="info" attr-type="button" @click="clickEvt" :disabled="disabled">
        <span v-if="time === 0">{{ msg }}</span>
        <n-countdown
            v-else
            :render="renderCountdown"
            @finish="finishEvt"
            :duration="time"
            :precision="1"
            :active="true"
        />
    </n-button>
</template>

<script lang="ts">
import { ref } from 'vue';
import type { CountdownProps } from 'naive-ui';

export default {
    name: 'the-sendsms-button',
    emits: ['click', 'finish'],
    setup() {
        const msg = ref('获取验证码');
        const time = ref(0);
        const disabled = ref(false);
        const renderCountdown: CountdownProps['render'] = ({ seconds }) => {
            return `${String(seconds).padStart(2, '0')}秒后重发`;
        };

        return {
            msg,
            time,
            disabled,
            renderCountdown
        };
    },
    methods: {
        /**
         * 点击时触发
         */
        clickEvt() {
            this.$emit('click', () => {
                this.time = 60 * 1000;
                this.disabled = true;
            });
        },

        /**
         * 倒计时结束时触发
         */
        finishEvt() {
            this.msg = '重新发送';
            this.time = 0;
            this.disabled = false;
            this.$emit('finish');
        }
    }
};
</script>
<style scoped lang="scss"></style>
