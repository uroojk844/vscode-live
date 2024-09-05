<template>
    <section class="bg-primary border border-neutral-700 text-gray-300">
        <AsideNav />
        <CreateFile />
        <Files />
    </section>
</template>

<script setup lang="ts">
import AsideNav from './AsideNav.vue';
import CreateFile from './CreateFile.vue';
import Files from './Files.vue';
</script>