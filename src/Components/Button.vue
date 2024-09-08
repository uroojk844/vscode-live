<template>
    <button class="border px-4 py-1 rounded text-sm flex items-center gap-2">
        <Icon v-if="icon" :icon="icon" />
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
import Icon from './Icon.vue';
defineProps<{ icon?: string }>()
</script>