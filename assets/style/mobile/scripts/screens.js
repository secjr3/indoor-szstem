import { overviewCard } from './pairConfirm.js';

function createScreenCard(name,loc){
const topContent = document.createElement("div")
topContent.innerHTML =`<div class="screen-icon">TV</div>

                <div class="screen-info">
                    <div class="screen-name">${name}</div>
                    <div class="screen-location">${loc}</div>
                </div>

                <span class="screen-arrow">›</span>`  


    const playbackLabel = document.createElement("div")
    playbackLabel.innerHTML = `
                        <span class="playback-label">REPRODUÇÃO ATUAL</span>

                        <div class="playback-info">
                            <div class="playback-icon">
                                <i class="fa-solid fa-file-video"></i>
                            </div>

                            <div class="playback-details">
                                <strong id="currentFile">Nenhum conteúdo</strong>
                                <span id="currentPlaylist">Sem reprodução ativa</span>
                            </div>
                        </div>`


    const footerContent = document.createElement("div")
    footerContent.innerHTML=`<span class="status-dot"></span>
                        <span>Conectada</span>`

    return {topContent,playbackLabel,footerContent}
}

function createScreen(nameInput, locInput) {
    const name = nameInput;
    const loc = locInput;

    console.log(name,nameInput);


    const cardsContainer = document.querySelector(".painel-cards");
    if (cardsContainer) {

        const {topContent,playbackLabel,footerContent} = createScreenCard(name,loc)
        const newCard = document.createElement("div");

        newCard.classList.add()
        newCard.innerHTML = `
        <div class="screen-card" role="button" aria-pressed="false">
            <div class="screen-card-top">
                ${topContent.innerHTML}
            </div>
            <div class="screen-card-footer">
                ${footerContent.innerHTML}
            </div>
            <div class="screen-playback">
                ${playbackLabel.innerHTML}
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