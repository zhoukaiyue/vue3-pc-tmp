# 任意组件内 或者 任意 ts 文件中，直接按照以下方式调用即可：

## 支持官方 [MessageProvider Props](https://www.naiveui.com/zh-CN/os-theme/components/message#MessageProvider-Props)

### 方式一：通过 window 对象调用

```html
<script setup lang="ts">
    window.$message.error('error message');
    window.$message.success('success message');
    window.$message.error('error message');
    window.$message.warning('warning messsage', {
        closable: true,
        duration: 5000
    });
</script>
```

### 方式二：通过 vue 实例调用

```html
<script setup lang="ts">
    import { getCurrentInstance } from 'vue';
    import type { ComponentInternalInstance } from 'vue';
    const { appContext } = getCurrentInstance() as ComponentInternalInstance;

    appContext.config.globalProperties.$message.info("I don't know why nobody told you how to unfold your love", {
        closable: true,
        duration: 5000
    });
</script>
```
