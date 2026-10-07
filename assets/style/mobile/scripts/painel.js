import { createScreen } from "./screens.js"


export function automatedInput() {

    const inputs = document.querySelectorAll(".screenDigit");
    inputs.forEach((input, index) => {
        input.addEventListener("input", (e) => {
            if (input.value === "") {
                input.classList.remove("valid");
                input.classList.remove("shake");
                return;
            }
            const hasSimbol = /[^a-zA-Z0-9]/.test(input.value);
            if (hasSimbol) {
                input.value = "";
                input.classList.remove("valid");
                input.classList.add("shake");
                input.focus();
                setTimeout(() => {
                    input.classList.remove("shake");
                }, 400);
                return;
            }
            if (input.value !== "") {
                input.classList.remove("shake");
                input.classList.add("valid");
                input.value = input.value.toUpperCase();
                if (inputs[index + 1]) {
                    inputs[index + 1].focus();
                }
            }
        });

        input.addEventListener("keydown", (e) => {
            if (e.key === "Backspace" && input.value === "" && inputs[index - 1]) {
                inputs[index - 1].focus();
                input.value = "";
            }
            if (e.key === "ArrowLeft" && inputs[index - 1]) {
                inputs[index - 1].focus();
                e.preventDefault();
            }
            if (e.key === "ArrowRight" && inputs[index + 1]) {
                inputs[index + 1].focus();
                e.preventDefault();
            }
        });
    });
}

const addScreenBtn = document.getElementById("add-new-screen");
if (addScreenBtn) {
    addScreenBtn.onclick = () => {
        inputVerifier();
    };
}

export function inputVerifier() {
    const screenAtribute = document.querySelectorAll(".scrnAtributesInput");
    const screenDigit = document.querySelectorAll(".screenDigit");
    let hasError = false;

    screenAtribute.forEach((i) => {
        if (i.value.length < 3) i.placeholder = "3 letras ou mais";
        if (i.value === "") i.placeholder = "campo vazio";

        const hasSimbol = /[^a-zA-Z0-9]/.test(i.value);
        if (hasSimbol) {
            i.value = "";
            i.placeholder = "apenas letras e nº";
        }

        const ver = (i.value === "" || i.value.length < 3 || hasSimbol);
        if (ver) {
            inputError(i);
            hasError = true;
        }
    });

    screenDigit.forEach((i) => {
        const ver = i.value === "";
        if (ver) {
            hasError = true;
            screenDigit.forEach(e => {
                inputError(e)
            })
            return
        }
    });

    if (!hasError) {
        // Criar card de tela com sucesso
        const nameInput = document.getElementById("screenName");
        const locInput = document.getElementById("screenLocation");

        createScreen(nameInput,locInput)

     
        // Fechar modal
        const bottomPanel = document.querySelector("#bottomPanel");
        const overlay = document.querySelector("#overlay");
        if (bottomPanel) bottomPanel.classList.remove("active");
        if (overlay) overlay.classList.remove("active");

        // Limpar campos
        screenAtribute.forEach(i => i.value = "");
        screenDigit.forEach(i => {
            i.value = "";
            i.classList.remove("valid");
        });
    }
}

function inputError(i) {
    i.classList.add("error");
    i.classList.add("shake");
    setTimeout(() => {
        i.classList.remove("valid");
        i.classList.remove("error");
        i.classList.remove("shake");
        i.value = "";
    }, 500);
}
