import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.CIRVtSGg.js","_app/immutable/chunks/disclose-version.DLFa3qtk.js","_app/immutable/chunks/runtime.DgzI6-Hr.js"];
export const stylesheets = ["_app/immutable/assets/0.D5v0o28t.css"];
export const fonts = ["_app/immutable/assets/source-serif-4-cyrillic-ext-wght-normal.DTL7OBif.woff2","_app/immutable/assets/source-serif-4-cyrillic-wght-normal.B0I9LQ6x.woff2","_app/immutable/assets/source-serif-4-greek-wght-normal.DHaWWy59.woff2","_app/immutable/assets/source-serif-4-vietnamese-wght-normal.DfR2amJ4.woff2","_app/immutable/assets/source-serif-4-latin-ext-wght-normal.qNyixauT.woff2","_app/immutable/assets/source-serif-4-latin-wght-normal.C2vkL0Ox.woff2","_app/immutable/assets/source-serif-4-cyrillic-ext-opsz-italic.BDcD8Q33.woff2","_app/immutable/assets/source-serif-4-cyrillic-opsz-italic.Do1p1BfK.woff2","_app/immutable/assets/source-serif-4-greek-opsz-italic.ChcFQpRZ.woff2","_app/immutable/assets/source-serif-4-vietnamese-opsz-italic.Dg17ZJwK.woff2","_app/immutable/assets/source-serif-4-latin-ext-opsz-italic.CJap84X8.woff2","_app/immutable/assets/source-serif-4-latin-opsz-italic.xDWnEzgP.woff2","_app/immutable/assets/GeistVariableVF.p2GUc8qZ.woff2"];
