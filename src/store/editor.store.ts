import { ref } from "vue";
import { createFile } from "../functions";

export const showInput = ref(false);
export const filename = ref("");

export const openAside = ref(true);

export function createNewFile() {
  createFile(filename.value);
  filename.value = "";
  showInput.value = false;
}

export const LanguagesIcon = {
  html: "vscode-icons:file-type-html",
  css: "vscode-icons:file-type-css",
  javascript: "vscode-icons:file-type-js-official",
};
