import { validFileType } from "./helpers/validTypeFile.js";

const labelElem = document.getElementById("inputLabel");
const inputElem = document.getElementById("imageUpload");
const imgElem = document.querySelector("img");
inputElem.addEventListener("change", (event) => {
    let image = inputElem.files[0]
    if(validFileType(image)){    
        imgElem.src = URL.createObjectURL(image);
        imgElem.style.opacity = "100%";
        labelElem.textContent = "Choose another image";
    }
})