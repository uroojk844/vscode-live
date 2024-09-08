<template>
    <ul class="tabs">
        <li v-for="(tab, index) in tabs" :key="index" class="flex items-center gap-2"
            :class="{ 'active': activeTab == index }" @click="activeTab = index">
            <IconFile :icon="LanguagesIcon[tab.lang]" :name="tab.filename" />
            <div v-if="tab.lang=='html'" @click="hardReload">
                <Icon icon="material-symbols:refresh-rounded" class="hover:text-blue-400" />
            </div>
            <Icon icon="material-symbols:close-rounded" class="hover:text-red-500" />
        </li>
    </ul>
</template>

<script setup lang="ts">
import { activeTab, tabs } from '../functions';
import { LanguagesIcon } from '../store/editor.store';
import Icon from './Icon.vue';
import IconFile from './IconFile.vue';

function hardReload() {
    (document.querySelector('iframe') as HTMLIFrameElement).src = (document.querySelector('iframe') as HTMLIFrameElement).src;
}
</script>

<style scoped>
.tabs {
    display: flex;

    li {
        flex: 0 0 170px;
        padding: 8px 12px;
        font-size: 13px;
        cursor: pointer;

        &:hover {
            background-color: #1f1f1f;
        }

        &.active {
            background-color: #1f1f1f;
            border-top: 1px solid dodgerblue;
        }
    }
}
</style>