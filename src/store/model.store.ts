import { ref, watch } from "vue";

export const showModel = ref(false);
export const modelAction = ref<boolean | null>(null);
export const file = ref("");

export function openModel(filename: string) {
  showModel.value = true;
  file.value = filename;
}

watch(modelAction, () => {
  if (modelAction.value == true && file.value != "") {
    import("./files.store").then((f) => {
      f.useFileStore().deleteFile(file.value);
    });
  } else if (modelAction.value == false) {
    file.value = "";
  }
  modelAction.value = null;
  showModel.value = false;
});
