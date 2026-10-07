import { automatedInput, inputVerifier } from './painel.js';

automatedInput();


const menuBtn = document.querySelector("#menuBtn");
const menu = document.querySelector("#menu");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
});


/*/limitar cards criados
const addScreenBtn = document.getElementById("addScreenBtn");

addScreenBtn.onclick = () => {
    const cards = document.querySelectorAll(".painel-screen-card");
    if(cards.length >= 3)return

    painelcardsVer(cards)

    const addCard = document.querySelector(".painel-cards");
        
    const div = document.createElement("div")
    div.classList.add("painel-screen-card")
    div.classList.add("card")

    addCard.appendChild(div)
} 

//*/
function painelcardsVer(e) {
    const adsc  = document.querySelectorAll(".empty-card");
    if(e.length == 0)adsc.forEach((a)=>a.style.display = "none")
}


//overlay from bottom

const openPanel = document.querySelectorAll(".openPanelBtn");
const bottomPanel = document.querySelector("#bottomPanel");
const overlay = document.querySelector("#overlay");

openPanel.forEach(e =>{
    e.addEventListener("click", () => {
    bottomPanel.classList.add("active");
    overlay.classList.add("active");
});
})

overlay.addEventListener("click", () => {
    bottomPanel.classList.remove("active");
    overlay.classList.remove("active");
});


/*botao adicionar da dashboard deve ser diferente do botao da aba 
painel.. ou usar classes sei la

u-ui-id.. 

as maquinas devem ter id e codigo de conexao*/