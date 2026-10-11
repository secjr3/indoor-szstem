import { overviewCard } from './pairConfirm.js';

function createScreen(nameInput, locInput) {
    const name = nameInput ? nameInput.value : "Nova Tela";
    const loc = locInput ? locInput.value : "Local";

    const cardsContainer = document.querySelector(".painel-cards");
    if (cardsContainer) {
        const newCard = document.createElement("div");
        newCard.classList.add()
        newCard.innerHTML = `
        <div class="screen-card" role="button" aria-pressed="false">
            <div class="screen-card-top">
                    <div class="screen-icon">TV</div>

                    <div class="screen-info">
                        <div class="screen-name">${name}</div>
                        <div class="screen-location">${loc}</div>
                    </div>

                    <span class="screen-arrow">›</span>
                </div>

                <div class="screen-card-footer">
                    <span class="status-dot"></span>
                    <span>Conectada</span>
                </div>
            </div>
        `;
        cardsContainer.insertBefore(newCard, cardsContainer.firstChild);
    }
    closeAddCard()
}

function closeAddCard() {
    const emptyCard = document.querySelectorAll(".empty-card");
    const painelCard = document.querySelector(".screen-card");

    painelCard ? emptyCard.forEach(e =>
     {   e.style.display = "none"
    }
    )
        : "";
}

export { createScreen }