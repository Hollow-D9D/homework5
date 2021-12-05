import { fileTypes } from "../const/imgTypes.js";

export function validFileType(file) {
    return fileTypes.includes(file.type);
  }