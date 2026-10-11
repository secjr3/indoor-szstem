import { pairDisplay } from "../pairDisplays.js";

export async function linkDisplay(code) {
    const result = await pairDisplay(code);

    if (result.success) {
        console.log("TV associada:", result.name);
    } else {
        console.log(result.message);
    }
}
