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
import { onMounted, ref } from 'vue';
import "../config";
import { Languages } from '../types';
import { createEditor } from '../config';
import { currentFile, getFileType, path, refreshFrame, uid } from '../functions';
import { useDebounceFn } from '@vueuse/core';
import { editor } from 'monaco-editor';

const props = withDefaults(defineProps<{ id: number, file: string, isActive: boolean, lang: Languages }>(), {
    isActive: false,
});

const URL = import.meta.env.VITE_API_URL;

let codeEditor: editor.IStandaloneCodeEditor;

let abortController = ref<AbortController | null>(null);

const debouncedFn = useDebounceFn(() => {
    abortController.value?.abort();
    abortController.value = new AbortController();


    fetch(`${URL}write/`, {
        signal: abortController.value.signal,
        method: "post",
        body: JSON.stringify({
            "uid": uid.value,
            "filename": currentFile.value,
            "text": codeEditor.getValue(),
        }),
        headers: {
            "Content-type": "application/json"
        }
    }).then(() => {
        console.log('writing');
        refreshFrame();
    })
}, 500)

onMounted(async () => {
    codeEditor = createEditor(document.getElementById('editor' + props.id) as HTMLElement, props.lang);

    // fetching file content from server on page load
    let file = await fetch(`${URL}read/?uid=${uid.value}&filename=${props.file}`)
    let text = await file.json();
    codeEditor.setValue(text.success);

    codeEditor.onDidFocusEditorText(() => {
        if (getFileType(currentFile.value) == 'html') {
            path.value = `${URL}code/${uid.value}/${currentFile.value}`;
        }
        refreshFrame();
    })

    codeEditor.onDidChangeModelContent(() => {
        debouncedFn();
    });
});
</script>