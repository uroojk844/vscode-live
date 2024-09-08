<template>
    <nav class="flex items-center p-2  border-b border-neutral-700">
        <div class="mr-auto uppercase text-xs font-semibold">
            <span>vscode-live</span>
        </div>

        <div class="cursor-pointer" title="Create File" @click="showInput = !showInput">
            <Icon icon="typcn:document-add" />
        </div>

    </nav>
</template>

<script setup lang="ts">
import { showInput } from '../store/editor.store';
import Icon from './Icon.vue';
</script>
