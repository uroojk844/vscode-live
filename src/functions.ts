import { computed, ref } from "vue";
import { Languages } from "./types";
import { v4 as uuidv4 } from "uuid";
import { useLocalStorage } from "@vueuse/core";

export const uid = useLocalStorage("uuid", uuidv4());

let editorId = 1;

const URL = import.meta.env.VITE_API_URL;

export const tabs = ref<
  {
    editorId: number;
    filename: string;
    lang: Languages;
  }[]
>([]);

export const activeTab = ref(0);

export const currentFile = computed(
  () => tabs.value[activeTab.value]?.filename
);

export const path = ref("");

export function refreshFrame() {
  (document.querySelector("iframe") as HTMLIFrameElement).src = (
    document.querySelector("iframe") as HTMLIFrameElement
  ).src;
}

export function getFileType(filename: string) {
  let lang: Languages;
  let f = filename.split(".");
  switch (f[f.length - 1]) {
    case "htm":
    case "html":
      lang = "html";
      break;
    case "js":
      lang = "javascript";
      break;
    case "css":
      lang = "css";
      break;
    default:
      lang = "html";
      break;
  }
  return lang;
}

window.onload = async () => {
  let res = await fetch(URL + "files/?uid=" + uid.value);
  let files = await res.json();
  if (!files?.success) return;

  files.success.forEach((file: string, index: number) => {
    tabs.value.push({
      editorId: index + 1,
      filename: file,
      lang: getFileType(file),
    });
  });

  editorId = files.length + 1;
};

export async function createFile(filename: string) {
  let res = await fetch(`${URL}/create/?uid=${uid.value}&filename=${filename}`);
  let file = await res.json();
  if (!file?.success) return;
  tabs.value.push({
    editorId,
    filename,
    lang: getFileType(filename),
  });
  editorId++;
}

export async function deleteFile(filename: string) {
  fetch(`${URL}/delete/?uid=${uid.value}&filename=${filename}`)
    .then((res) => res.json())
    .then(() => {
      tabs.value = tabs.value.filter((f) => f.filename != filename);
    });
}
