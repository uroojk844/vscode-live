<template>
    <Icon :icon="icon" />
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue';
defineProps<{ icon: string }>();
</script>