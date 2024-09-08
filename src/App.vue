<template>
  <main :class="{ open: openAside }">
    <Aside></Aside>
    <TabBar />
    <iframe :src="path" frameborder="0"></iframe>
  </main>
  <div @click="openAside = !openAside"
    class="text-white text-xl border fixed top-1/2 -translate-y-1/2 left-0 -translate-x-2 z-[100] hover:translate-x-0 transition-transform cursor-pointer py-2 rounded-e-lg">
    <Icon :icon="openAside ? 'material-symbols:arrow-left' : 'material-symbols:arrow-right'" />
  </div>
  <Model />
</template>

<script setup lang="ts">
import Aside from './Components/Aside.vue';
import Model from './Components/Model.vue';
import TabBar from './Components/TabBar.vue';
import { path } from './functions';
import { Icon } from '@iconify/vue/dist/iconify.js';
import { openAside } from './store/editor.store';
import { onMounted } from 'vue';
import { useFileStore } from './store/files.store';

onMounted(()=> {
  useFileStore().init();
})

</script>

<style scoped>
main {
  display: grid;
  grid-template-columns: 0 repeat(2, 1fr);
  grid-template-rows: 100dvh;
  transition: 250ms ease;

  &.open {
    grid-template-columns: 200px repeat(2, 1fr);
  }

  iframe {
    width: 100%;
    height: 100%;
  }
}
</style>