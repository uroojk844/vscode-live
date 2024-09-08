<template>
    <section v-if="showModel"
        class="rounded overflow-hidden border fixed max-w-sm w-full bg-primary text-white top-1/2 left-1/2 lg:left-1/3 -translate-x-1/2 -translate-y-1/2 z-[100]"
        id="model">
        <div class="p-2 text-sm border-b flex items-center gap-1.5">
            <Icon icon="material-symbols:delete-forever" /> {{ text }}
        </div>
        <div class="flex items-center justify-center gap-8 bg-secondary py-6">
            <Button icon="material-symbols:cancel" class="hover:bg-neutral-700" @click="modelAction = false">Cancel</Button>
            <Button icon="material-symbols:check-circle" class="bg-red-700" @click="modelAction = true">Yes</Button>
        </div>
    </section>
</template>

<script setup lang="ts">
import Icon from './Icon.vue';
import { modelAction, showModel } from '../store/model.store';
import Button from './Button.vue';

withDefaults(
    defineProps<{
        text?: string,
    }>(), {
    text: "Delete this file?",
})
</script>