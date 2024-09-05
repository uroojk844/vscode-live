<template>
    <ul>
        <li class="flex items-center gap-1.5 text-sm py-1 px-2 hover:bg-neutral-800 cursor-pointer"
            :class="{ 'bg-neutral-800': activeTab == index }" v-for="(tab, index) in tabs" :key="index"
            @click="activeTab = index">
            <IconFile :icon="LanguagesIcon[tab.lang]" :name="tab.filename" />
            <div title="Delete File" @click="deleteFile(tab.filename)">
                <Icon icon="material-symbols:delete-forever" />
            </div>
        </li>
    </ul>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { activeTab, deleteFile, tabs } from '../functions';
import { LanguagesIcon } from '../store/editor.store';
import IconFile from './IconFile.vue';
</script>