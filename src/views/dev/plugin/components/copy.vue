<script setup lang="ts">
import useClipboard from 'vue-clipboard3';
const { toClipboard } = useClipboard();
const text = ref('复制到剪贴板的内容');

const copy = async () => {
    try {
        await toClipboard(text.value);
        window.$message.success('Copied to clipboard');
    } catch (e) {
        console.error(e);
    }
};
</script>
<template>
    <n-button size="small" plain type="primary" @click="copy">复制到剪贴板</n-button>
</template>

<style scoped lang="scss"></style>
