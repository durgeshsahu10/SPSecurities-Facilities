globalThis.__nitro_main__ = import.meta.url;
import { i as HTTPError, n as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/favicon.png": {
		"type": "image/png",
		"etag": "\"991-CN2UnfPMVXdlKAlpFQzFxdjcT9o\"",
		"mtime": "2026-09-22T05:48:58.649Z",
		"size": 2449,
		"path": "../public/favicon.png"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"5a-wdH3rMdlkmlz1nv99mQ45am2T4U\"",
		"mtime": "2026-09-22T05:48:58.649Z",
		"size": 90,
		"path": "../public/robots.txt"
	},
	"/sitemap.xml": {
		"type": "application/xml",
		"etag": "\"64d-+5l1Xuv/uuVUGUooLFqqq17p2Yw\"",
		"mtime": "2026-09-22T05:48:58.649Z",
		"size": 1613,
		"path": "../public/sitemap.xml"
	},
	"/assets/arrow-right-qXrT-hZ2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9a-rz7u5FVXlmtm72mPnVHuR9y+Z/Q\"",
		"mtime": "2026-09-22T05:48:57.728Z",
		"size": 154,
		"path": "../public/assets/arrow-right-qXrT-hZ2.js"
	},
	"/assets/admin-D29uevYh.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1fe4-cCUkNmqzLPnNBPkO++93WMjyfOc\"",
		"mtime": "2026-09-22T05:48:57.728Z",
		"size": 8164,
		"path": "../public/assets/admin-D29uevYh.js"
	},
	"/assets/careers-DkWSe7b5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1b24-wDogG/cKHteY3TdXiOSHNIQaFqw\"",
		"mtime": "2026-09-22T05:48:57.728Z",
		"size": 6948,
		"path": "../public/assets/careers-DkWSe7b5.js"
	},
	"/assets/circle-check-nUUSy7RS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a7-drw9Hw/LgOXl2QZo8H0nkevvUqo\"",
		"mtime": "2026-09-22T05:48:57.728Z",
		"size": 167,
		"path": "../public/assets/circle-check-nUUSy7RS.js"
	},
	"/assets/contact-1VUbKY5t.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1514-ebtAk2HFkVsLfajUT8EHtzP9P/U\"",
		"mtime": "2026-09-22T05:48:57.729Z",
		"size": 5396,
		"path": "../public/assets/contact-1VUbKY5t.js"
	},
	"/assets/about-DxOAyL6M.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"11a9-Y7dRY9AG/AV2K31R0aQh4vBY6GQ\"",
		"mtime": "2026-09-22T05:48:57.727Z",
		"size": 4521,
		"path": "../public/assets/about-DxOAyL6M.js"
	},
	"/assets/cookies-DMOlXyxm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"563-+BZmoJ19nNIfYLGW1BVwfGpQQ34\"",
		"mtime": "2026-09-22T05:48:57.729Z",
		"size": 1379,
		"path": "../public/assets/cookies-DMOlXyxm.js"
	},
	"/assets/facilities-C_dtEdmC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a15-wxa0syoy5Q2wnlZT7hlF8mSgVkQ\"",
		"mtime": "2026-09-22T05:48:57.729Z",
		"size": 2581,
		"path": "../public/assets/facilities-C_dtEdmC.js"
	},
	"/assets/facility-services-QsYrneq3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3e-8O3Y1D7xC65XVhzxP5dzgPUR3cw\"",
		"mtime": "2026-09-22T05:48:57.730Z",
		"size": 62,
		"path": "../public/assets/facility-services-QsYrneq3.js"
	},
	"/assets/gallery-CZsf-HhH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"407-DvGRY+G9b1Cm2qgCfQhW8BK25BI\"",
		"mtime": "2026-09-22T05:48:57.730Z",
		"size": 1031,
		"path": "../public/assets/gallery-CZsf-HhH.js"
	},
	"/assets/hero-security-BSkxuhNE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3a-1gHjM4rGJJGubSLZv0YfWBo0RqA\"",
		"mtime": "2026-09-22T05:48:57.730Z",
		"size": 58,
		"path": "../public/assets/hero-security-BSkxuhNE.js"
	},
	"/assets/hero-security-DEO5YP7K.jpg": {
		"type": "image/jpeg",
		"etag": "\"2cf60-XAKcvcLJfbc3tmgoxJhkeXEkRHs\"",
		"mtime": "2026-09-22T05:48:57.734Z",
		"size": 184160,
		"path": "../public/assets/hero-security-DEO5YP7K.jpg"
	},
	"/assets/facility-services-DHz3AjZZ.jpg": {
		"type": "image/jpeg",
		"etag": "\"32a06-id4RyhnGh5PWfV+5yR2q0SO9Jmg\"",
		"mtime": "2026-09-22T05:48:57.734Z",
		"size": 207366,
		"path": "../public/assets/facility-services-DHz3AjZZ.jpg"
	},
	"/assets/jll-BDAcuBWM.svg": {
		"type": "image/svg+xml",
		"etag": "\"16fc-joFFylpZ6q6Q8IECE42YL1tC3iQ\"",
		"mtime": "2026-09-22T05:48:57.735Z",
		"size": 5884,
		"path": "../public/assets/jll-BDAcuBWM.svg"
	},
	"/assets/index-C3TELPyj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"70a82-81HryOySmsjl/sWgLkQq545tLrQ\"",
		"mtime": "2026-09-22T05:48:57.726Z",
		"size": 461442,
		"path": "../public/assets/index-C3TELPyj.js"
	},
	"/assets/jsx-runtime-Dk72oS4N.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2246-jdmifwUklrWzVvkkm/k29uuTwFE\"",
		"mtime": "2026-09-22T05:48:57.731Z",
		"size": 8774,
		"path": "../public/assets/jsx-runtime-Dk72oS4N.js"
	},
	"/assets/legal-page-B_Ggqh_Z.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"300-YAjVin+MfHHij/UGoUdO+muqBmg\"",
		"mtime": "2026-09-22T05:48:57.732Z",
		"size": 768,
		"path": "../public/assets/legal-page-B_Ggqh_Z.js"
	},
	"/assets/nyati-CSTIP_6f.jpg": {
		"type": "image/jpeg",
		"etag": "\"4495-pLUz9KxgQjOhNmMBRjY7ea+tZZ4\"",
		"mtime": "2026-09-22T05:48:57.735Z",
		"size": 17557,
		"path": "../public/assets/nyati-CSTIP_6f.jpg"
	},
	"/assets/page-hero-DcHse7km.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"89a-oIxM0Fl66KMCTIevX5mJvxI3xy8\"",
		"mtime": "2026-09-22T05:48:57.732Z",
		"size": 2202,
		"path": "../public/assets/page-hero-DcHse7km.js"
	},
	"/assets/panchshil-_X7UTV-a.jpg": {
		"type": "image/jpeg",
		"etag": "\"19ab-EtUdt1RLH0JNgcTMnUkpK1qTnJI\"",
		"mtime": "2026-09-22T05:48:57.736Z",
		"size": 6571,
		"path": "../public/assets/panchshil-_X7UTV-a.jpg"
	},
	"/assets/privacy-policy-DfPEfIVG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"78e-1UhNRncTKErdKF4F6M1vU1PCZ6g\"",
		"mtime": "2026-09-22T05:48:57.732Z",
		"size": 1934,
		"path": "../public/assets/privacy-policy-DfPEfIVG.js"
	},
	"/assets/jobs-BgfmKzed.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"88362-mDdj35HWOIfSO0vtvEB6l0tojf0\"",
		"mtime": "2026-09-22T05:48:57.730Z",
		"size": 557922,
		"path": "../public/assets/jobs-BgfmKzed.js"
	},
	"/assets/routes-qQvu8ZjI.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3dbb-TZXa7SUBC1rv2hmkNwxm4NbNsVw\"",
		"mtime": "2026-09-22T05:48:57.732Z",
		"size": 15803,
		"path": "../public/assets/routes-qQvu8ZjI.js"
	},
	"/assets/security-XIPJfZ75.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9bb-+vvQt1T5sx9v0YKEKGvopPDXCBY\"",
		"mtime": "2026-09-22T05:48:57.733Z",
		"size": 2491,
		"path": "../public/assets/security-XIPJfZ75.js"
	},
	"/assets/security-services-D3tF-rzf.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3e-121/nU2sM0Ud56JC8J6faNXT1vs\"",
		"mtime": "2026-09-22T05:48:57.733Z",
		"size": 62,
		"path": "../public/assets/security-services-D3tF-rzf.js"
	},
	"/assets/security-services-DdgEAXMO.jpg": {
		"type": "image/jpeg",
		"etag": "\"33937-tZjxaKi876+4wJcs2W20FgPLUD8\"",
		"mtime": "2026-09-22T05:48:57.736Z",
		"size": 211255,
		"path": "../public/assets/security-services-DdgEAXMO.jpg"
	},
	"/assets/services-CA1IQUeT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c87-luYyhJG5S9VDv29v1seWY/pptmc\"",
		"mtime": "2026-09-22T05:48:57.733Z",
		"size": 3207,
		"path": "../public/assets/services-CA1IQUeT.js"
	},
	"/assets/sp-securities-logo-2hkpU25p.png": {
		"type": "image/png",
		"etag": "\"3b223-gU1Dn63IGkDz8xCWFSfIiBMtd4A\"",
		"mtime": "2026-09-22T05:48:57.737Z",
		"size": 242211,
		"path": "../public/assets/sp-securities-logo-2hkpU25p.png"
	},
	"/assets/styles-CQm_BqCj.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"14a6d-5Vt6/7JGI1PoYiFvLKGYhLZeInA\"",
		"mtime": "2026-09-22T05:48:57.738Z",
		"size": 84589,
		"path": "../public/assets/styles-CQm_BqCj.css"
	},
	"/assets/team-briefing-B6QUUVsy.jpg": {
		"type": "image/jpeg",
		"etag": "\"3865e-gKEOk0s7fQ4FWMOUqg5f2Bxblyc\"",
		"mtime": "2026-09-22T05:48:57.738Z",
		"size": 231006,
		"path": "../public/assets/team-briefing-B6QUUVsy.jpg"
	},
	"/assets/team-briefing-BXSzn5bF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3a-i3tOVtXm665x2pFk6wF3ZBQEz3s\"",
		"mtime": "2026-09-22T05:48:57.733Z",
		"size": 58,
		"path": "../public/assets/team-briefing-BXSzn5bF.js"
	},
	"/assets/terms-and-conditions-DrQlraKB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"77b-Qne1OzUDc+Hji3lQx22BrDMFvyo\"",
		"mtime": "2026-09-22T05:48:57.734Z",
		"size": 1915,
		"path": "../public/assets/terms-and-conditions-DrQlraKB.js"
	},
	"/assets/verde-BUc-AFef.png": {
		"type": "image/png",
		"etag": "\"24e1-KuTwgaZXKIfWwicDnWXaSA1xmcE\"",
		"mtime": "2026-09-22T05:48:57.738Z",
		"size": 9441,
		"path": "../public/assets/verde-BUc-AFef.png"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_9eK3Bp = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_9eK3Bp
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
