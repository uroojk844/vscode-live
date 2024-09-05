<template>
    <ul class="tabs">
        <li v-for="(tab, index) in tabs" :class="{ 'active': activeTab == index }" :key="index"
            @click="activeTab = index">
            <IconFile :icon="LanguagesIcon[tab.lang]" :name="tab.filename" />
        </li>
    </ul>
</template>

<script setup lang="ts">
import { activeTab, tabs } from '../functions';
import { LanguagesIcon } from '../store/editor.store';
import IconFile from './IconFile.vue';
</script>

<style scoped>
.tabs {
    display: flex;

    li {
        flex: 0 0 150px;
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