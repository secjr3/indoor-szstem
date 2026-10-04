const menuBtn = document.querySelector("#menuBtn");
const menu = document.querySelector("#menu");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
});


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

function painelcardsVer(e) {
    const adsc  = document.querySelectorAll(".adsc");
    if(e.length == 0)adsc.forEach((a)=>a.style.display = "none")
}