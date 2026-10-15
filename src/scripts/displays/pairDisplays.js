
import { supabase } from "../lib/supabase.js";

const MANAGER_STORAGE_KEY = "indoor_manager_id";

export async function pairDisplay(code, name, location) {
    const normalizedCode = code.trim().toUpperCase();
    const normalizedName = name.trim();
    const normalizedLocation = location.trim();

    if (!/^[A-HJ-NP-Z2-9]{6}$/.test(normalizedCode)) {
        return {
            success: false,
            message: "Introduz um código válido de 6 caracteres.",
        };
    }

    if (normalizedName.length < 3 || normalizedLocation.length < 3) {
        return {
            success: false,
            message: "O nome e a localização devem ter pelo menos 3 caracteres.",
        };
    }

    const managerId = localStorage.getItem(MANAGER_STORAGE_KEY);

    if (!managerId) {
        return {
            success: false,
            message: "Nenhum gestor identificado neste navegador.",
        };
    }

    const { data, error } = await supabase.rpc("pair_display", {
        p_code: normalizedCode,
        p_manager_id: managerId,
        p_name: normalizedName,
        p_location: normalizedLocation,
    });

    if (error) {
        console.error("Erro ao associar a TV:", error);

        return {
            success: false,
            message: "Não foi possível associar a TV.",
        };
    }

    return data;
}
