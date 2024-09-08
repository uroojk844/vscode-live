<template>
    <ul>
        <li class="flex items-center gap-2 text-sm py-1 px-2 hover:bg-neutral-800 cursor-pointer"
            :class="{ 'bg-neutral-800': getActiveTab === file.filename }" v-for="(file, index) in getAllFiles"
            :key="index" @click.stop="openFile(file)">
            <IconFile :icon="LanguagesIcon[file.lang]" :name="file.filename" />

            <div title="Open in new tab" @click.stop="openInNewWindow(URL + file.filename)">
                <Icon icon="ph:browsers-fill" class="hover:text-blue-400" />
            </div>
            <div title="Delete File" @click.stop="openModel(file.filename)">
                <Icon icon="material-symbols:delete" class="hover:text-red-500" />
            </div>
        </li>
    </ul>
</template>

<script setup lang="ts">
import { uid } from '../functions';
import { LanguagesIcon } from '../store/editor.store';
import IconFile from './IconFile.vue';
import { openModel } from '../store/model.store';
import Icon from './Icon.vue';
import { FileType } from '../types';
import { useFileStore } from '../store/files.store';
import { storeToRefs } from 'pinia';

const fileStore = useFileStore();
const { getActiveTab, getAllFiles } = storeToRefs(fileStore);

const URL = `${import.meta.env.VITE_API_URL}code/${uid.value}/`;

function openInNewWindow(path: string) {
    window.open(path, "_blank");
}

function openFile(file: FileType) {
    file.isOpen = true;
    fileStore.setActiveTab(file.filename);
}
</script>