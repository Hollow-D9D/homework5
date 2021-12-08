export function closeExcept (show, hide, elements) {
    // for (let i = 0; i < 11; i++) {
    //     if (i === index && elements[i].style.display !== "initial") {
    //         elements[i].style.display = "initial";
    //         continue;
    //     }
    //     elements[i].style.display = "none";
    // }
    console.log(show, hide);
    elements[show].style.display = elements[show].style.display === 'initial' ? 'none' : 'initial';
    if (hide !== 'none' && hide !== show)
        elements[hide].style.display = 'none';
}