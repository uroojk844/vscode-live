<template>
    <ul>
        <li class="flex items-center gap-2 text-sm py-1 px-2 hover:bg-neutral-800 cursor-pointer"
            :class="{ 'bg-neutral-800': activeTab == index }" v-for="(tab, index) in tabs" :key="index"
            @click.stop="activeTab = index">
            <IconFile :icon="LanguagesIcon[tab.lang]" :name="tab.filename" />

            <div title="Open in new tab" @click.stop="openInNewWindow(URL + tab.filename)">
                <Icon icon="ph:browsers-fill" class="hover:text-blue-400" />
            </div>
            <div title="Download File" @click.stop="download(URL + tab.filename)" download>
                <Icon icon="material-symbols:download-2-rounded" class="hover:text-green-500" />
            </div>
            <div title="Delete File" @click.stop="openModel(tab.filename)">
                <Icon icon="material-symbols:delete" class="hover:text-red-500" />
            </div>
        </li>
    </ul>
</template>

<script setup lang="ts">
import { activeTab, tabs, uid } from '../functions';
import { LanguagesIcon } from '../store/editor.store';
import IconFile from './IconFile.vue';
import { openModel } from '../store/model.store';
import Icon from './Icon.vue';

const URL = `${import.meta.env.VITE_API_URL}code/${uid.value}/`;

function openInNewWindow(path: string) {
    window.open(path, "_blank");
}

function download(path: string) {
    
}
</script>