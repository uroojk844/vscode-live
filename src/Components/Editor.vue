<template>
    <div :id="'editor' + id" :class="{ 'z-[99]': isActive }"></div>
</template>

<style scoped>
div {
    display: grid;
    position: absolute;
    inset: 0;
}
</style>

<script setup lang="ts">
import { onMounted } from 'vue';
import "../config";
import { Languages } from '../types';
import { createEditor } from '../config';
import { currentFile, getFileType, path, refreshFrame } from '../functions';

const props = withDefaults(defineProps<{ id: number, file: string, isActive: boolean, lang: Languages }>(), {
    isActive: false,
});

const URL = import.meta.env.VITE_API_URL;

onMounted(async () => {
    let editor = createEditor(document.getElementById('editor' + props.id) as HTMLElement, props.lang);

    // fetching file content from server on page load
    let file = await fetch(URL + 'read/?filename=' + props.file)
    let text = await file.json();
    editor.setValue(text.success);

    editor.onDidFocusEditorText(() => {
        if (getFileType(currentFile.value) == 'html') {
            path.value = URL + 'code/' + currentFile.value;
        }
        refreshFrame();
    })

    editor.onDidChangeModelContent(() => {
        fetch(URL + 'write/', {
            method: "post",
            body: JSON.stringify({
                "filename": currentFile.value,
                "text": editor.getValue(),
            }),
            headers: {
                "Content-type": "application/json"
            }
        })

        refreshFrame();
    });
});
</script>