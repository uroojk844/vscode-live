<template>
  <main>
    <Aside></Aside>
    <TabBar />
    <iframe :src="path" frameborder="0"></iframe>
  </main>
</template>

<script setup lang="ts">
import Aside from './Components/Aside.vue';
import TabBar from './Components/TabBar.vue';
import { path } from './functions';
</script>

<style scoped>
main {
  display: grid;
  grid-template-columns: 200px repeat(2, 1fr);
  grid-template-rows: 100dvh;

  iframe {
    width: 100%;
    height: 100%;
  }
}
</style>