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
		"mtime": "2026-09-22T06:41:20.770Z",
		"size": 2449,
		"path": "../public/favicon.png"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"5a-wdH3rMdlkmlz1nv99mQ45am2T4U\"",
		"mtime": "2026-09-22T06:41:20.770Z",
		"size": 90,
		"path": "../public/robots.txt"
	},
	"/sitemap.xml": {
		"type": "application/xml",
		"etag": "\"64d-+5l1Xuv/uuVUGUooLFqqq17p2Yw\"",
		"mtime": "2026-09-22T06:41:20.770Z",
		"size": 1613,
		"path": "../public/sitemap.xml"
	},
	"/assets/about-CtHcpD1c.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"11a9-BAr3rnFNXcoaZeNkFIgAdw1SI6U\"",
		"mtime": "2026-09-22T06:41:19.610Z",
		"size": 4521,
		"path": "../public/assets/about-CtHcpD1c.js"
	},
	"/assets/admin-BMfeNS2y.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1fe4-PLQPvYnq1OvDuh2TjbPsPqFJh1s\"",
		"mtime": "2026-09-22T06:41:19.611Z",
		"size": 8164,
		"path": "../public/assets/admin-BMfeNS2y.js"
	},
	"/assets/arrow-right-WXrFH6E9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9a-qpfZxwvLUV7LmPWVqsEmXWUEu9M\"",
		"mtime": "2026-09-22T06:41:19.611Z",
		"size": 154,
		"path": "../public/assets/arrow-right-WXrFH6E9.js"
	},
	"/assets/circle-check-Bb2-dSMN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a7-IjYtw5NZP2jeN8YLflsBnlDS3ac\"",
		"mtime": "2026-09-22T06:41:19.611Z",
		"size": 167,
		"path": "../public/assets/circle-check-Bb2-dSMN.js"
	},
	"/assets/careers-ryX5J9e4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1b24-lxbYRUKCymarQrB7a+rc2sEsUJk\"",
		"mtime": "2026-09-22T06:41:19.611Z",
		"size": 6948,
		"path": "../public/assets/careers-ryX5J9e4.js"
	},
	"/assets/contact-DLZ7wX1W.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1514-piO8MdVGGSNnMNur6nhClbd6kLE\"",
		"mtime": "2026-09-22T06:41:19.612Z",
		"size": 5396,
		"path": "../public/assets/contact-DLZ7wX1W.js"
	},
	"/assets/cookies-DoYA-wqy.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"563-VDrJjLyatseZs2p60umV3skU/+Q\"",
		"mtime": "2026-09-22T06:41:19.612Z",
		"size": 1379,
		"path": "../public/assets/cookies-DoYA-wqy.js"
	},
	"/assets/facilities-DlwokB2z.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a15-UQPgXfxi9CicHnLBDdhJcbjjns8\"",
		"mtime": "2026-09-22T06:41:19.612Z",
		"size": 2581,
		"path": "../public/assets/facilities-DlwokB2z.js"
	},
	"/assets/facility-services-QsYrneq3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3e-8O3Y1D7xC65XVhzxP5dzgPUR3cw\"",
		"mtime": "2026-09-22T06:41:19.612Z",
		"size": 62,
		"path": "../public/assets/facility-services-QsYrneq3.js"
	},
	"/assets/gallery-CgKB5HkJ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"407-YjeIx2hBJStE0ILT2e7F5Kyujdw\"",
		"mtime": "2026-09-22T06:41:19.612Z",
		"size": 1031,
		"path": "../public/assets/gallery-CgKB5HkJ.js"
	},
	"/assets/facility-services-DHz3AjZZ.jpg": {
		"type": "image/jpeg",
		"etag": "\"32a06-id4RyhnGh5PWfV+5yR2q0SO9Jmg\"",
		"mtime": "2026-09-22T06:41:19.619Z",
		"size": 207366,
		"path": "../public/assets/facility-services-DHz3AjZZ.jpg"
	},
	"/assets/hero-security-DEO5YP7K.jpg": {
		"type": "image/jpeg",
		"etag": "\"2cf60-XAKcvcLJfbc3tmgoxJhkeXEkRHs\"",
		"mtime": "2026-09-22T06:41:19.619Z",
		"size": 184160,
		"path": "../public/assets/hero-security-DEO5YP7K.jpg"
	},
	"/assets/hero-security-BSkxuhNE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3a-1gHjM4rGJJGubSLZv0YfWBo0RqA\"",
		"mtime": "2026-09-22T06:41:19.612Z",
		"size": 58,
		"path": "../public/assets/hero-security-BSkxuhNE.js"
	},
	"/assets/hero-security-mobile-QIt2eJjf.jpg": {
		"type": "image/jpeg",
		"etag": "\"117da-3tDWAxHw9ynfWfA8Fw4U6mtpNV4\"",
		"mtime": "2026-09-22T06:41:19.620Z",
		"size": 71642,
		"path": "../public/assets/hero-security-mobile-QIt2eJjf.jpg"
	},
	"/assets/jll-BDAcuBWM.svg": {
		"type": "image/svg+xml",
		"etag": "\"16fc-joFFylpZ6q6Q8IECE42YL1tC3iQ\"",
		"mtime": "2026-09-22T06:41:19.620Z",
		"size": 5884,
		"path": "../public/assets/jll-BDAcuBWM.svg"
	},
	"/assets/index-I51Di3PR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"711c3-rD2NzuqNMraFz0wwZtva+9ECQXw\"",
		"mtime": "2026-09-22T06:41:19.609Z",
		"size": 463299,
		"path": "../public/assets/index-I51Di3PR.js"
	},
	"/assets/jsx-runtime-Dk72oS4N.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2246-jdmifwUklrWzVvkkm/k29uuTwFE\"",
		"mtime": "2026-09-22T06:41:19.614Z",
		"size": 8774,
		"path": "../public/assets/jsx-runtime-Dk72oS4N.js"
	},
	"/assets/legal-page-B_Ggqh_Z.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"300-YAjVin+MfHHij/UGoUdO+muqBmg\"",
		"mtime": "2026-09-22T06:41:19.614Z",
		"size": 768,
		"path": "../public/assets/legal-page-B_Ggqh_Z.js"
	},
	"/assets/nyati-CSTIP_6f.jpg": {
		"type": "image/jpeg",
		"etag": "\"4495-pLUz9KxgQjOhNmMBRjY7ea+tZZ4\"",
		"mtime": "2026-09-22T06:41:19.621Z",
		"size": 17557,
		"path": "../public/assets/nyati-CSTIP_6f.jpg"
	},
	"/assets/page-hero-C0_rectc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"89a-lSrQIQmRyaX3/wpzg906mJId5Sk\"",
		"mtime": "2026-09-22T06:41:19.615Z",
		"size": 2202,
		"path": "../public/assets/page-hero-C0_rectc.js"
	},
	"/assets/panchshil-_X7UTV-a.jpg": {
		"type": "image/jpeg",
		"etag": "\"19ab-EtUdt1RLH0JNgcTMnUkpK1qTnJI\"",
		"mtime": "2026-09-22T06:41:19.621Z",
		"size": 6571,
		"path": "../public/assets/panchshil-_X7UTV-a.jpg"
	},
	"/assets/jobs-W7sP5LyK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"88362-hRHhX6Ov7MvAqDJJtVCU4NcZQy4\"",
		"mtime": "2026-09-22T06:41:19.613Z",
		"size": 557922,
		"path": "../public/assets/jobs-W7sP5LyK.js"
	},
	"/assets/privacy-policy-l_n4hpfB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"78e-TGk3gU5n9IpM14vWuagfgRcHq5c\"",
		"mtime": "2026-09-22T06:41:19.616Z",
		"size": 1934,
		"path": "../public/assets/privacy-policy-l_n4hpfB.js"
	},
	"/assets/routes-Dcl8tLf1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3f0c-bJc+aKSsDiYh8+nX/mmZsRqqeXo\"",
		"mtime": "2026-09-22T06:41:19.616Z",
		"size": 16140,
		"path": "../public/assets/routes-Dcl8tLf1.js"
	},
	"/assets/security-B23AtvGR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9bb-+5Crh4XwohsCF9euDLPwkG8rpg0\"",
		"mtime": "2026-09-22T06:41:19.617Z",
		"size": 2491,
		"path": "../public/assets/security-B23AtvGR.js"
	},
	"/assets/security-services-D3tF-rzf.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3e-121/nU2sM0Ud56JC8J6faNXT1vs\"",
		"mtime": "2026-09-22T06:41:19.617Z",
		"size": 62,
		"path": "../public/assets/security-services-D3tF-rzf.js"
	},
	"/assets/security-services-DdgEAXMO.jpg": {
		"type": "image/jpeg",
		"etag": "\"33937-tZjxaKi876+4wJcs2W20FgPLUD8\"",
		"mtime": "2026-09-22T06:41:19.621Z",
		"size": 211255,
		"path": "../public/assets/security-services-DdgEAXMO.jpg"
	},
	"/assets/sp-securities-logo-2hkpU25p.png": {
		"type": "image/png",
		"etag": "\"3b223-gU1Dn63IGkDz8xCWFSfIiBMtd4A\"",
		"mtime": "2026-09-22T06:41:19.622Z",
		"size": 242211,
		"path": "../public/assets/sp-securities-logo-2hkpU25p.png"
	},
	"/assets/styles-DscBvahr.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"14eb4-uNcTE2zmtc+hxHitYPapDxmTOZo\"",
		"mtime": "2026-09-22T06:41:19.622Z",
		"size": 85684,
		"path": "../public/assets/styles-DscBvahr.css"
	},
	"/assets/team-briefing-B6QUUVsy.jpg": {
		"type": "image/jpeg",
		"etag": "\"3865e-gKEOk0s7fQ4FWMOUqg5f2Bxblyc\"",
		"mtime": "2026-09-22T06:41:19.622Z",
		"size": 231006,
		"path": "../public/assets/team-briefing-B6QUUVsy.jpg"
	},
	"/assets/team-briefing-BXSzn5bF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3a-i3tOVtXm665x2pFk6wF3ZBQEz3s\"",
		"mtime": "2026-09-22T06:41:19.618Z",
		"size": 58,
		"path": "../public/assets/team-briefing-BXSzn5bF.js"
	},
	"/assets/terms-and-conditions-CBXGK0fW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"77b-OOWjpHbdK39o41817Oq3WlUkkqU\"",
		"mtime": "2026-09-22T06:41:19.618Z",
		"size": 1915,
		"path": "../public/assets/terms-and-conditions-CBXGK0fW.js"
	},
	"/assets/verde-BUc-AFef.png": {
		"type": "image/png",
		"etag": "\"24e1-KuTwgaZXKIfWwicDnWXaSA1xmcE\"",
		"mtime": "2026-09-22T06:41:19.623Z",
		"size": 9441,
		"path": "../public/assets/verde-BUc-AFef.png"
	},
	"/assets/services-Bo-b8Snm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c87-NLwJnLMtLzhGTASqmro0GvzP4NM\"",
		"mtime": "2026-09-22T06:41:19.617Z",
		"size": 3207,
		"path": "../public/assets/services-Bo-b8Snm.js"
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
