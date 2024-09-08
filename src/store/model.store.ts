import { ref, watch } from "vue";
import { deleteFile } from "../functions";

export const showModel = ref(false);
export const modelAction = ref<boolean | null>(null);
export const file = ref("");

export function openModel(filename: string) {
  showModel.value = true;
  file.value = filename;
}

watch(modelAction, () => {
  if (modelAction.value == true && file.value != "") {
    deleteFile(file.value);
  } else if (modelAction.value == false) {
    file.value = "";
  }
  modelAction.value = null;
  showModel.value = false;
});
