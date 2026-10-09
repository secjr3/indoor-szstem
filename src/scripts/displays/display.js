import { otherAnimation } from "../../../assets/style/wide/displayStyle.js";
import {info} from "./ngerecodiguin.js"
import { supabase } from "../lib/supabase.js";

otherAnimation()

const screen = {
    id: "3bf6cb",
    name: "tv01",
    status: {
        connection:"offline",
        linked:false,
    },
};

function isConected() {
    const conected = screen.status.linked
    console.log(conected);
    
    return conected
}


console.log(supabase);

const { data, error } = await supabase
    .from("display")
    .select("*");

console.log("Dados:", data);
console.log("Erro:", error);

export {isConected}
