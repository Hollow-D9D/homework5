import { COURSE } from "./consts/usdToAmdValue.js";
import { valueToDefault } from "./helpers/valueToDefault.js";


const inputUsdElem = document.getElementById("inputUsd");
const inputAmdElem = document.getElementById("inputAmd");

function validateAndConvert () {
    let valueUsd = Number(inputUsdElem.value);
    if (isNaN(valueUsd)){
        inputAmdElem.value = "Not a valid number!";
        inputAmdElem.style.color = "red";
    } else {
        inputAmdElem.style.color = 'black';
        inputAmdElem.value = (valueUsd * COURSE).toFixed(2);
    }
}

inputUsdElem.addEventListener("click", () => valueToDefault(inputUsdElem,inputAmdElem));
inputAmdElem.addEventListener("click", () => valueToDefault(inputAmdElem,inputUsdElem));

inputUsdElem.addEventListener("change", validateAndConvert)

document.addEventListener("keydown", (event) => {
    if (event.keyCode === 18)
        validateAndConvert();
})