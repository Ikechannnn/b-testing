import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.BLxZxXoh.js","_app/immutable/chunks/disclose-version.DLFa3qtk.js","_app/immutable/chunks/runtime.DgzI6-Hr.js","_app/immutable/chunks/index-client.Buzi_1Eb.js","_app/immutable/chunks/lifecycle.B5KOVnIt.js","_app/immutable/chunks/warnings.C6eb7gPK.js"];
export const stylesheets = ["_app/immutable/assets/2.CeBelXl7.css"];
export const fonts = [];
