import {isConected} from "./display.js"



export function renderCode(code) {
    const digits = document.querySelectorAll(".digitId");

    if (!code || code.length !== 6) {
        digits.forEach(digit => {
            digit.textContent = "";
            digit.classList.remove("filled");
        });

        return;
    }

    digits.forEach((digit, index) => {
        digit.textContent = "";
        digit.classList.remove("filled");

        setTimeout(() => {
            digit.textContent = code[index];
            digit.classList.add("filled");
        }, index * 80);
    });
}
export let info = document
.addEventListener('DOMContentLoaded', () => {
    renderCode();
});