
import { supabase } from "../../../../src/scripts/lib/supabase.js";
import { createScreen } from "./screens.js";
import { overviewCard } from "./pairConfirm.js";

const MANAGER_STORAGE_KEY = "indoor_manager_id";

export async function loadScreens() {
    const cardsContainer = document.querySelector(".painel-cards");

    if (!cardsContainer) return;

    const managerId = localStorage.getItem(MANAGER_STORAGE_KEY);

    if (!managerId) {
        console.warn("Não existe um gestor identificado neste navegador.");
        return;
    }

    const { data, error } = await supabase
        .from("displays")
        .select("id, name, location, linked, manager_id")
        .eq("manager_id", managerId)
        .eq("linked", true);


    if (error) {
        console.error("Erro ao carregar as TVs:", error);
        return;
    }
    if (!data || data.length === 0) {
        console.log("Nenhum display encontrado para os critérios fornecidos.");
        return;
    }
    console.log("Displays extraídos com sucesso:", data);


    cardsContainer.replaceChildren();

    for (const display of data) {
        
        createScreen(
            display.name,
            display.location,
            display.id
        );

        console.log(display.name);

    }

    overviewCard();
}
