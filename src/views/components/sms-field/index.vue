<!--
 * @Descripttion: 短信验证码输入框
 * @version: 
 * @Author: zhoukai
 * @Date: 2023-03-03 13:54:40
 * @LastEditors: zhoukai
 * @LastEditTime: 2023-03-03 17:57:47
-->
<template>
    <div flex justify-between flex-nowrap w-full class="sms-field">
        <n-input :value="value" @input="input" v-bind="inputOptions" />
        <!-- 发送验证码 -->
        <n-button class="sms-field—rightBtn" type="info" attr-type="button" @click="geSmsEvt" :disabled="disabled">
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
    </div>
</template>

<script lang="ts">
import type { CountdownProps } from 'naive-ui';
export default {
    name: 'smsField',
    props: {
        /**
         * inputProps 是输入框的相关props配置，直接参考naiveui Input-Props 配置即可
         */
        inputProps: {
            type: Object,
            default: () => {
                return {};
            }
        },

        /**
         * 表单绑定的值
         */
        value: {
            type: String,
            required: true
        },
        smsApiCallbak: {
            type: Function,
            default: Promise.resolve()
        }
    },
    setup(props) {
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
            renderCountdown,
            inputOptions: props.inputProps // 非响应式的
        };
    },
    methods: {
        geSmsEvt() {
            this.smsApiCallbak()
                .then(() => {
                    this.time = 60 * 1000;
                    this.disabled = true;
                })
                .catch(() => {
                    //
                });
        },
        finishEvt() {
            this.msg = '重新发送';
            this.time = 0;
            this.disabled = false;
        },
        input(value: string) {
            this.$emit('update:value', value);
        }
    }
};
</script>
<style scoped lang="scss"></style>
