function createScreen(nameInput,locInput) {
    const name = nameInput ? nameInput.value : "Nova Tela";
    const loc = locInput ? locInput.value : "Local";

    const cardsContainer = document.querySelector(".painel-cards");
    if (cardsContainer) {
        const newCard = document.createElement("div");
        newCard.classList.add("painel-screen-card", "card");
        newCard.innerHTML = `
                     <div style="font-weight: bold; font-size: 16px; color: #111;">${name}</div>
                     <div style="font-size: 13px; color: #234;"> ${loc}</div>
                     <div style="font-size: 11px; background: rgba(0,0,0,0.1); padding: 4px 8px; border-radius: 4px; display: inline-block; width: fit-content;">● Conectada</div>
                 `;
        cardsContainer.insertBefore(newCard, cardsContainer.firstChild);
    }

    closeAddCard()
}

function closeAddCard() {
    const emptyCard = document.querySelectorAll(".empty-card");
    const painelCard = document.querySelector(".painel-screen-card");

    painelCard?emptyCard.forEach(e =>
        e.style.display = "none" 
    )
    :"";
}

export {createScreen}