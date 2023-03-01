# 任意组件内 或者 任意 ts 文件中，直接按照以下方式调用即可：

## 支持官方 [MessageProvider Props](https://www.naiveui.com/zh-CN/os-theme/components/message#MessageProvider-Props)

```ts
window.$message.error('error message');
window.$message.success('success message');
window.$message.error('error message');
window.$message.warning('warning messsage', {
    closable: true,
    duration: 5000
});
```
