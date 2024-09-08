<template>
    <form @submit.prevent="createFile(newFileName)">
        <input type="text" class="outline-none text-sm bg-neutral-800 border-b w-full p-1"
            :class="{ 'hidden': !showInput }" v-model="newFileName" required>
    </form>
</template>

<script setup lang="ts">
import { newFileName, showInput } from '../store/editor.store';
import { useFileStore } from '../store/files.store';
const { createFile } = useFileStore();
</script>