import { otherAnimation } from "../../../assets/style/wide/displayStyle.js";
import {info} from "./ngerecodiguin.js"
import { supabase } from "../lib/supabase.js";

otherAnimation()

const screen = {
    id: "3bf6cb",
    name: "tv01",
    status: {
        connection:"offline",
        linked:true,
    },
};

function isConected() {
    const conected = screen.status.linked
    console.log(conected);
    
    return conected
}

export {isConected}

console.log(supabase);

const { data, error } = await supabase
    .from("screens")
    .select("*");

console.log("Dados:", data);
console.log("Erro:", error);