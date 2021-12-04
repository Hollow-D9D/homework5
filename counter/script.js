import { disable } from "./helpers/disable.js"
import { enable } from "./helpers/enable.js";
import { getDataFromLocaleStorage } from "./helpers/getDataFromLocalStorage.js";
import { setDataToLocaleStorage } from "./helpers/setDataToLocalStorage.js";

const btnInc = document.getElementById("increase");
const btnRes = document.getElementById("reset");
const btnDec = document.getElementById("decrease");
const divCounter = document.getElementById("counter");

btnInc.addEventListener("click", () => {
    enable(btnRes, btnDec);
    divCounter.textContent = +(divCounter.textContent) + 1;
    setDataToLocaleStorage('key', divCounter.textContent);
})
btnRes.addEventListener("click", () => {
    divCounter.textContent = "0";
    disable(btnRes,btnDec);
    setDataToLocaleStorage('key', divCounter.textContent);
})

btnDec.addEventListener("click", () => {
    let count = +divCounter.textContent - 1;
    divCounter.textContent = count;
    if (!count) {
        disable(btnRes, btnDec);
    }
    setDataToLocaleStorage('key', divCounter.textContent);
})

function load() {
    document.body.style.display = 'flex';
    let data = Number(getDataFromLocaleStorage('key'));
    divCounter.textContent = data;
    if (!data)
        disable(btnRes, btnDec);
}

load();
