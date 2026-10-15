import { supabase } from "./../../lib/supabase.js";


const managerForm = document.querySelector("#managerForm");
const managerName = document.querySelector("#managerName");
const formMessage = document.querySelector("#formMessage");

const STORAGE_KEY = "indoor_manager_id";

managerForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const name = managerName.value.trim();

    if (!name) {
        formMessage.textContent = "Introduz o nome do gestor.";
        formMessage.className = "error";
        return;
    }

    try {
        formMessage.textContent = "A criar gestor...";
        formMessage.className = "";

        const { data, error } = await supabase
            .from("managers")
            .insert({ name })
            .select("id, name, created_at")
            .single();

        if (error) {
            throw error;
        }

        localStorage.setItem(STORAGE_KEY, data.id);
        localStorage.setItem("managerName", data.name);

        formMessage.textContent = `Gestor criado: ${data.name}`;
        formMessage.className = "success";

        console.log("Gestor criado:", data);
        
        window.location.href = "../../../../assets/index.html"; 

    } catch (error) {
        console.error("Erro ao criar gestor:", error);

        formMessage.textContent =
            "Não foi possível criar o gestor. Verifica as permissões do Supabase.";
        formMessage.className = "error";
    }
});