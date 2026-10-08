import {ngerehngereh} from "./ultilty/generate.js"
import {isConected} from "./display.js"


function renderCode(c) {
    if(c) return
    const digits = document.querySelectorAll('.digitId');
    const code = ngerehngereh(digits.length);

    digits.forEach((digit, index) => {
        digit.textContent = '';
        digit.classList.remove('filled');

        setTimeout(() => {
            digit.textContent = code[index];
            digit.classList.add('filled');
        }, index * 80);
    });
}
export let info = document
.addEventListener('DOMContentLoaded', () => {
    renderCode(isConected());
});