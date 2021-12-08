import { closeExcept } from "./helpers/closeExcept.js";

const questionDivArray = document.getElementsByClassName("question");
const answerDivArray = document.getElementsByClassName("answer");
let selected = 'none';

for(let i = 0; i < 11; i++) {
    questionDivArray[i].addEventListener("mouseover", () => {
        questionDivArray[i].style.color = "darkGrey";
    })
    questionDivArray[i].addEventListener("mouseout", () => {
        questionDivArray[i].style.color = "black";
    })
    questionDivArray[i].addEventListener("click", () => {
        closeExcept(i, selected, answerDivArray);
        selected = i;
    })
}