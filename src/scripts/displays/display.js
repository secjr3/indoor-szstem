
import { otherAnimation } from "../../../assets/style/wide/displayStyle.js";
import { renderCode } from "./ngerecodiguin.js";
import { supabase } from "../lib/supabase.js";

otherAnimation();

let currentScreen = null;

const STORAGE_KEY = "indoor_display_id";

async function registerDisplay() {
    const savedId = localStorage.getItem(STORAGE_KEY);

    const { data, error } = await supabase.rpc(
        "register_or_issue_display",
        {
            p_display_id: savedId || null,
        }
    );

    if (error) {
        console.error("Erro ao registar a TV:", error);
        throw error;
    }

    currentScreen = data;

    if (!currentScreen?.id) {
        throw new Error("O Supabase não devolveu o UUID da TV.");
    }

    localStorage.setItem(STORAGE_KEY, currentScreen.id);

    if (currentScreen.linked) {
        renderCode(null);
        console.log("Esta TV já está associada ao gestor.");
        return currentScreen;
    }

    renderCode(currentScreen.connection_code);

    console.log("UUID:", currentScreen.id);
    console.log("Código:", currentScreen.connection_code);
    console.log("Expira em:", currentScreen.code_expires_at);

    return currentScreen;
}

function isConected() {
    return currentScreen?.linked ?? false;
}

registerDisplay().catch(error => {
    console.error("Falha na inicialização da TV:", error);
});

export { isConected };