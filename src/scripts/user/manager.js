
import { supabase } from "../lib/supabase.js";

export const STORAGE = "indoor_manager_id";
const STORAGE_KEY = "indoor_manager_id";

export async function createManager(name) {
    const normalizedName = name.trim();

    if (!normalizedName) {
        throw new Error("O nome do gestor é obrigatório.");
    }

    const { data, error } = await supabase
        .from("managers")
        .insert({ name: normalizedName })
        .select("id, name, created_at")
        .single();

    if (error) {
        console.error("Erro ao criar gestor:", error);
        throw error;
    }

    localStorage.setItem(STORAGE_KEY, data.id);

    return data;
}

export async function getCurrentManager() {
    const managerId = localStorage.getItem(STORAGE_KEY);

    if (!managerId) {
        return null;
    }

    const { data, error } = await supabase
        .from("managers")
        .select("id, name, created_at")
        .eq("id", managerId)
        .maybeSingle();

    if (error) {
        console.error("Erro ao procurar gestor:", error);
        throw error;
    }

    if (!data) {
        localStorage.removeItem(STORAGE_KEY);
        return null;
    }

    return data;
}




