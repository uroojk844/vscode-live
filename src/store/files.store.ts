import { defineStore } from "pinia";
import { FileType } from "../types";
import { getFileType, uid } from "../functions";
import { newFileName, showInput } from "./editor.store";
import { computed, ref } from "vue";

let editorId = 1;
const URL = import.meta.env.VITE_API_URL;

export const useFileStore = defineStore("files", () => {
  const activeTab = ref("");
  const userFiles = ref<FileType[]>([]);

  const getAllFiles = computed(() => userFiles.value);

  const getActiveTab = computed(() => activeTab.value);

  const getTabs = computed(() => userFiles.value.filter((file) => file.isOpen));

  function setActiveTab(filename: string) {
    activeTab.value = filename;
  }

  function closeTab(file: FileType) {
    // let idx = userFiles.value.findIndex((tab) => tab.editorId == file.editorId);
    file.isOpen = false;

    if (file.filename == activeTab.value) {
      activeTab.value = "";
    }
  }

  // loading file
  function init() {
    fetch(URL + "files/?uid=" + uid.value)
      .then((res) => res.json())
      .then((files) => {
        files.success.forEach((file: string, index: number) => {
          userFiles.value.push({
            editorId: index + 1,
            filename: file,
            lang: getFileType(file),
            isOpen: false,
          });
          editorId++;
        });
      });
  }
  // create file on server
  function createFile(filename: string) {
    fetch(`${URL}/create/?uid=${uid.value}&filename=${filename}`)
      .then((res) => res.json())
      .then((res) => {
        if (res?.success)
          userFiles.value.push({
            editorId: editorId,
            filename,
            lang: getFileType(filename),
            isOpen: false,
          });
      })
      .finally(() => {
        editorId++;
        newFileName.value = "";
        showInput.value = false;
      });
  }
  // delete file from server
  function deleteFile(filename: string) {
    fetch(`${URL}/delete/?uid=${uid.value}&filename=${filename}`)
      .then((res) => res.json())
      .then((res) => {
        if (res?.success)
          userFiles.value = userFiles.value.filter(
            (file) => file.filename != filename
          );
      });
  }

  return {
    getAllFiles,
    getActiveTab,
    getTabs,
    init,
    setActiveTab,
    closeTab,
    createFile,
    deleteFile,
  };
});
