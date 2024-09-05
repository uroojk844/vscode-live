<template>
    <nav class="flex items-center p-2  border-b border-neutral-700">
        <div class="mr-auto uppercase text-xs font-semibold">vscode-live</div>
        <div class="">
            <div class="cursor-pointer" title="Create File" @click="showInput = !showInput">
                <Icon icon="typcn:document-add" />
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { showInput } from '../store/editor.store';
</script>
