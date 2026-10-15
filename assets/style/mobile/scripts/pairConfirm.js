import { applyOverlay,removeOverlay } from "./style";



export function overviewCard() {
    document.querySelectorAll(".screen-card").forEach(card => {
    card.addEventListener("click", () => {
        document.querySelectorAll(".screen-card").forEach(item => {
            item.classList.remove("selected");
            item.setAttribute("aria-pressed", "false");

            
        });
        const x = removeOverlay()
        
        applyOverlay(card)
        card.classList.toggle("selected");
        card.setAttribute("aria-pressed", "true");
        
        x.onclick = () =>removeOverlay(card)
    });
});

   
}