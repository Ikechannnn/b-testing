export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "b-testing/_app",
	assets: new Set([".DS_Store","favicon.png","images/ams_logo_dark.svg","images/mit-scl_logo_dark.svg","images/mit_logo.svg","images/scl_logo.svg","videos/bg-video_fallback.gif","videos/bg-video_rc_10s.mp4"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".gif":"image/gif",".mp4":"video/mp4"},
	_: {
		client: {"start":"_app/immutable/entry/start.Btas1aa6.js","app":"_app/immutable/entry/app.DBdvFX2u.js","imports":["_app/immutable/entry/start.Btas1aa6.js","_app/immutable/chunks/entry.BQPkYTOb.js","_app/immutable/chunks/runtime.DgzI6-Hr.js","_app/immutable/entry/app.DBdvFX2u.js","_app/immutable/chunks/runtime.DgzI6-Hr.js","_app/immutable/chunks/render.CpjihZD2.js","_app/immutable/chunks/disclose-version.DLFa3qtk.js","_app/immutable/chunks/warnings.C6eb7gPK.js","_app/immutable/chunks/index-client.Buzi_1Eb.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
