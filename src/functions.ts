import { ref } from "vue";
import { Languages } from "./types";
import { v4 as uuidv4 } from "uuid";
import { useLocalStorage } from "@vueuse/core";

export const uid = useLocalStorage("uuid", uuidv4());

export const path = ref("");

export function refreshFrame() {
  try {
    (
      document.querySelector("iframe") as HTMLIFrameElement
    ).contentWindow?.location.reload();
  } catch (e) {
    (document.querySelector("iframe") as HTMLIFrameElement).src =
      (document.querySelector("iframe") as HTMLIFrameElement).src.split(
        "?"
      )[0] +
      "?" +
      Math.floor(Math.random() * 1000000000);
  }
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
