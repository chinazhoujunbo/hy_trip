<script setup>
const { title } = defineProps(['title']);
</script>

<template>
    <div class="nav-bar">
        <slot>
            <div class="title">{{ title }}</div>
        </slot>
    </div>
</template>

<style lang="less" scoped>
.nav-bar {
    display: flex;
    justify-content: center;
    align-items: center;
    height :46px;
    border-bottom: 1px solid #f3f3f3;
}

.title {
    color: var(--primary-color);
    font-size: 18px;
    font-weight: 700;
}
</style>