<template>
    <div class="flex items-center gap-1.5 mr-auto">
        <Icon :icon="icon" class=""/>
        <span class="flex-grow-0 max-w-24 text-ellipsis overflow-hidden">{{ name }}</span>
    </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
defineProps<{
    icon: string,
    name: string,
}>()
</script>

<style scoped></style>