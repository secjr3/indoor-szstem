import { automatedInput } from './painel.js';

automatedInput();

const menuBtn = document.querySelector("#menuBtn");
const menu = document.querySelector("#menu");
const overlay = document.querySelector("#overlay");

if (menuBtn && menu) {
    menuBtn.addEventListener("click", () => {
        menu.classList.toggle("active");
        const isActive = menu.classList.contains('active')
        console.log(menu);

        if (isActive) {
            overlay.classList.add("active")
            overlay.classList.add("indexMin")


            menuBtn.classList.add("indexMax")
            menu.classList.add("indexLess")

        }
        if (!isActive) overlay.classList.remove("active")
    });
}

// overlay from bottom
const openPanel = document.querySelectorAll(".openPanelBtn");
const bottomPanel = document.querySelector("#bottomPanel");

openPanel.forEach(e => {
    e.addEventListener("click", () => {
        if (bottomPanel) bottomPanel.classList.add("active");
        if (overlay) applyOverlay()
        if (overlay) menuBtn.classList.add("indexMin");
    });
});

if (overlay) {
    overlay.addEventListener("click", () => {
        if (bottomPanel) bottomPanel.classList.remove("active");
        removeOverlay()

    });
}

export function applyOverlay(item) {
    const overlay = document.querySelector(".overlay");
    overlay.classList.add("active");
    
    if(item)item.classList.add("indexMax");
    
}

export function removeOverlay(item) {
    const overlay = document.querySelector(".overlay");

    overlay.classList.remove("active");
    overlay.classList.remove("indexMax");

    menu.classList.remove("active")
    menuBtn.classList.remove("indexMin")
    
    
    if(item){
        item.classList.remove("active")
        item.classList.remove("selected")
    }

    return overlay
}