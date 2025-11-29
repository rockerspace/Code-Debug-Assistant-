import { parse } from "acorn";


export function checkJSSyntax(code) {
try {
parse(code, { ecmaVersion: "latest", sourceType: "module" });
return { ok: true, errors: [] };
} catch (err) {
// acorn error messages contain location info
return { ok: false, errors: [{ message: err.message }] };
}
}