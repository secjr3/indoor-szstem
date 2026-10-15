import { pairDisplay } from "../pairDisplays.js";

export async function linkDisplay(code, name, location) {
    const result = await pairDisplay(code, name, location);

    if (!result.success) {
        console.error(result.message);
        return result;
    }

    console.log("TV associada:", result.name);

    return result;
}
