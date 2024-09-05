<template>
    <section class="tabBar">
        <Tabs />
        <div class="content">
            <Editor v-for="(tab, index) in tabs" :is-active="activeTab == index" :key="index" :lang="tab.lang"
                :id="tab.editorId" :file="tab.filename" />
        </div>
    </section>
</template>

<script setup lang="ts">
import { activeTab, tabs } from '../functions';
import Editor from './Editor.vue';
import Tabs from './Tabs.vue';
</script>

<style scoped>
.tabBar {
    display: grid;
    grid-template-rows: max-content auto;
    background-color: #181818;
    color: whitesmoke;

    .content {
        position: relative;
    }
}
</style>