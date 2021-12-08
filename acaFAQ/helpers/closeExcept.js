export function closeExcept (index, elements) {
    for (let i = 0; i < 11; i++) {
        if (i === index && elements[i].style.display !== "initial") {
            elements[i].style.display = "initial";
            continue;
        }
        elements[i].style.display = "none";
    }
}