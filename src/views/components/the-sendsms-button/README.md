# 介绍

## 发送短信验证码按钮。

### 一般用于表单项（短信验证码）输入框右侧的发送短信验证码场景。

# 使用方法

```ts
import TheSendsmsButton from '@/views/components/the-sendsms-button/index.vue';
// 发送短信验证码
const sendSmsEvt = (fn: () => void) => {
    /**发送短信验证码接口，成功之后执行 fn() 开始倒计时*/
    setTimeout(() => {
        fn(); //开始倒计时
    }, 2000);
};
```

```html
<template>
    <the-sendsms-button @click="sendSmsEvt"></the-sendsms-button>
</template>
```

# API

## Events

| 事件名 |       说明       |                     回调参数                      |
| :----: | :--------------: | :-----------------------------------------------: |
| click  |  按钮点击时触发  | fn: () => void 【注：需要执行该函数才开始倒计时】 |
| finish | 倒计时结束时触发 |                         -                         |
