# 介绍

## 基础表单组件

# 使用方法

### 基础用法

```ts
<script setup lang="ts">
import BaseForm from '@/resources/components/base-form/index.vue';
import type { FormItemRule } from 'naive-ui/es/form/src/interface';

// 这是传给theForm 组件的表单构造项数据
const formItemList = [
    {
        name: 'usname', //名称，作为提交表单时的标识符
        // formItemProps 是formItem的相关props配置，直接参考naiveui FormItem-Props 配置即可
        formItemProps: {
            label: '用户名',
            rule: {
                trigger: ['blur'],
                required: true,
                validator: (rule: FormItemRule, value: string) => {
                    if (!value) return new Error('用户名不能为空!');
                    return true;
                }
            }
        },
        // inputProps 是输入框的相关props配置，直接参考naiveui Input-Props 配置即可
        inputProps: {
            placeholder: '请输入用户名码'
        }
    },
    {
        name: 'password', //名称，作为提交表单时的标识符
        type: 'password', //使用场景
        // formItemProps 是formItem的相关props配置，直接参考naiveui FormItem-Props 配置即可
        formItemProps: {
            label: '密码',
            rule: {
                trigger: ['blur'],
                required: true,
                validator: (rule: FormItemRule, value: string) => {
                    if (!value) return new Error('密码不能为空!');
                    return true;
                }
            }
        },
        // inputProps 是输入框的相关props配置，直接参考naiveui Input-Props 配置即可
        inputProps: {
            placeholder: '请输入密码'
        }
    },
    {
        name: 'issue', //名称，作为提交表单时的标识符
        type: 'textarea', //使用场景
        // formItemProps 是formItem的相关props配置，直接参考naiveui FormItem-Props 配置即可
        formItemProps: {
            label: '留言'
        },
        // inputProps 是输入框的相关props配置，直接参考naiveui Input-Props 配置即可
        inputProps: {
            placeholder: '请输入留言'
        }
    }
];

// BaseForm Methods
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const submit = (values: any) => {
    console.log(values);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const failed = (values: any) => {
    console.log(values);
};
</script>
```

```html
<template>
    <base-form :formItemList="formItemList" @submit="submit" @failed="failed"></base-form>
</template>
```

### 自定义提交按钮 、输入框右侧按钮

```ts
<script setup lang="ts">
import BaseForm from '@/resources/components/base-form/index.vue';
import TheSendsmsButton from '@/views/components/the-sendsms-button/index.vue';
import type { FormItemRule } from 'naive-ui/es/form/src/interface';
const loading = ref(false);

// 这是传给theForm 组件的表单构造项数据
const formItemList = [
    {
        name: 'tel', //名称，作为提交表单时的标识符
        type: 'text', //使用场景
        // formItemProps 是formItem的相关props配置，直接参考naiveui FormItem-Props 配置即可
        formItemProps: {
            label: '手机号',
            rule: {
                key: 'tel',
                trigger: ['blur'],
                required: true,
                validator: (rule: FormItemRule, value: string) => {
                    if (!value) return new Error('手机号不能为空!');
                    return true;
                }
            }
        },
        // inputProps 是输入框的相关props配置，直接参考naiveui Input-Props 配置即可
        inputProps: {
            placeholder: '请输入手机号码',
            allowInput: (value: string) => !value || /^\d+$/.test(value)
        }
    },
    {
        name: 'code', //名称，作为提交表单时的标识符
        // formItemProps 是formItem的相关props配置，直接参考naiveui FormItem-Props 配置即可
        formItemProps: {
            label: '验证码',
            rule: {
                trigger: ['blur'],
                required: true,
                validator: (rule: FormItemRule, value: string) => {
                    if (!value) return new Error('短信验证码不能为空!');
                    return true;
                }
            }
        },
        // inputProps 是输入框的相关props配置，直接参考naiveui Input-Props 配置即可
        inputProps: {
            placeholder: '请输入短信验证码',
            style: {
                width: '60%'
            }
        },
        inputSlots: {
            button: 'smsRightBtn' //自定义输入框尾部按钮
        }
    }
];

/**
 * 通过 ref 可以获取到 Form 实例并调用实例方法交表单，与点击提交按钮的效果等价。
 */
const baseForm = ref<InstanceType<typeof BaseForm>>();
const sublimeEvt = () => {
    loading.value = true;
    nextTick(() => {
        baseForm.value?.handleSubmit();
    });
};

// BaseForm Methods
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const submit = (values: any) => {
    console.log(values);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const failed = (values: any) => {
    console.log(values);
    loading.value = false;
};

// 发送短信验证码
const sendSmsEvt = (callback: () => void) => {
    nextTick(() => {
        baseForm.value
            ?.handleValidate(['tel'])
            .then(() => {
                //成功，没有返回值
                callback();
            })
            .catch((err) => {
                console.log(err);
            });
    });
};
</script>
```

```html
<template>
    <div class="zi-ding-yi-button">
        <n-tag type="info" mb-20>自定义提交按钮 && 输入框右侧按钮</n-tag>
        <base-form ref="baseForm" :formItemList="formItemList" @submit="submit" @failed="failed">
            <template #submitBtn>
                <div flex justify-end>
                    <n-button w="100px" :disabled="loading" round type="primary" attr-type="button" @click="sublimeEvt">
                        提 交
                    </n-button>
                </div>
            </template>
            <!-- 自定义输入框右侧按钮 -->
            <template #smsRightBtn>
                <the-sendsms-button @click="sendSmsEvt"></the-sendsms-button>
            </template>
        </base-form>
    </div>
</template>
```

# API

## Props

|     参数     |     说明     | 类型  | 默认值 |
| :----------: | :----------: | :---: | :----: |
| formItemList | 表单构造参数 | Array |   []   |

### formItemList 详解

|     参数      |                  说明                  |       类型       | 默认值 |
| :-----------: | :------------------------------------: | :--------------: | :----: |
|     name      |      名称，作为提交表单时的标识符      | number \| string |   -    |
|     type      |   'text' \| 'password' \| 'textarea'   |      string      | 'text' |
| formItemProps | FormItem Props 【与 naiveui 官方一致】 |      Object      |   -    |
|  inputProps   |  输入框 Props 【与 naiveui 官方一致】  |      Object      |   -    |
|  inputSlots   |              输入框 Slots              |      Object      |   -    |

### inputSlots 详解 【只适用于 type="text" 的输入框】

|  参数  |         说明         |  类型  |
| :----: | :------------------: | :----: |
| button | 自定义输入框尾部按钮 | string |

## Events

| 事件名 |            说明            |                     回调参数                      |
| :----: | :------------------------: | :-----------------------------------------------: |
| submit |  提交表单且验证通过后触发  |                  values: object                   |
| failed | 提交表单且验证不通过后触发 | errorInfo: { values: object, errors: object[] } - |

## 方法名

通过 ref 可以获取到 Form 实例并调用实例方法。
| 事件名 | 说明 | 参数 | 返回值 |
| :----: | :----------: | :-----------------------: | :-----: |
| handleSubmit | 提交表单，与点击提交按钮的效果等价 | - |- |
| handleResetForm | 重置表单 | - |- |
| handleValidate | 验证表单，支持传入一个或多个 name 来验证单个或部分表单项，不传入 name 时，会验证所有表单项 | name?: string[]|- |
| handleRestoreValidation | 重置表单项的验证提示 | - |- |

## Form Slots

|   名称    |          说明          | 参数 |
| :-------: | :--------------------: | :--: |
| submitBtn | 自定义表单底部操作按钮 |  -   |
