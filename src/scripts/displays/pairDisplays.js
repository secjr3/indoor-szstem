console.log();


import { supabase } from "../lib/supabase.js";

console.log(data);

export async function pairDisplay(code) {
    const normalizedCode = code.trim().toUpperCase();

    if (!/^[A-HJ-NP-Z2-9]{6}$/.test(normalizedCode)) {
        return {
            success: false,
            message: "Introduz um código válido de 6 caracteres.",
        };
    }

    const { data, error } = await supabase.rpc("pair_display", {
        p_code: normalizedCode,
    });

    if (error) {
        console.error("Erro ao associar a TV:", error);

        return {
            success: false,
            message: "Não foi possível verificar o código.",
        };
    }

    return data;
}