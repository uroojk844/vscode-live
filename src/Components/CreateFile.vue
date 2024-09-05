<template>
    <form @submit.prevent="createNewFile">
        <input type="text" class="outline-none text-sm bg-neutral-800 border-b w-full p-1"
            :class="{ 'hidden': !showInput }" v-model="filename" required>
    </form>
</template>

<script setup lang="ts">
import { createNewFile, filename, showInput } from '../store/editor.store';
</script>