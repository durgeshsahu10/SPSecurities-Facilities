import { a as getApp, o as getApps, s as initializeApp } from "../_libs/@firebase/app+[...].mjs";
import { t as getAuth } from "../_libs/firebase__auth.mjs";
import "../_libs/firebase.mjs";
import { a as query, c as getFirestore, i as orderBy, l as serverTimestamp, n as deleteDoc, o as collection, r as getDocs, s as doc, t as addDoc } from "../_libs/@firebase/firestore+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/jobs-BEpafPlA.js
var firebaseConfig = {
	apiKey: {
		"BASE_URL": "/",
		"DEV": false,
		"MODE": "production",
		"PROD": true,
		"SSR": true,
		"TSS_DEV_SERVER": "false",
		"TSS_DEV_SSR_STYLES_BASEPATH": "/",
		"TSS_DEV_SSR_STYLES_ENABLED": "true",
		"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
		"TSS_INLINE_CSS_ENABLED": "false",
		"TSS_ROUTER_BASEPATH": "",
		"TSS_SERVER_FN_BASE": "/_serverFn/",
		"VITE_FIREBASE_API_KEY": "",
		"VITE_FIREBASE_APP_ID": "",
		"VITE_FIREBASE_AUTH_DOMAIN": "",
		"VITE_FIREBASE_MESSAGING_SENDER_ID": "",
		"VITE_FIREBASE_PROJECT_ID": "",
		"VITE_FIREBASE_STORAGE_BUCKET": ""
	}["VITE_FIREBASE_API_KEY"],
	authDomain: {
		"BASE_URL": "/",
		"DEV": false,
		"MODE": "production",
		"PROD": true,
		"SSR": true,
		"TSS_DEV_SERVER": "false",
		"TSS_DEV_SSR_STYLES_BASEPATH": "/",
		"TSS_DEV_SSR_STYLES_ENABLED": "true",
		"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
		"TSS_INLINE_CSS_ENABLED": "false",
		"TSS_ROUTER_BASEPATH": "",
		"TSS_SERVER_FN_BASE": "/_serverFn/",
		"VITE_FIREBASE_API_KEY": "",
		"VITE_FIREBASE_APP_ID": "",
		"VITE_FIREBASE_AUTH_DOMAIN": "",
		"VITE_FIREBASE_MESSAGING_SENDER_ID": "",
		"VITE_FIREBASE_PROJECT_ID": "",
		"VITE_FIREBASE_STORAGE_BUCKET": ""
	}["VITE_FIREBASE_AUTH_DOMAIN"],
	projectId: {
		"BASE_URL": "/",
		"DEV": false,
		"MODE": "production",
		"PROD": true,
		"SSR": true,
		"TSS_DEV_SERVER": "false",
		"TSS_DEV_SSR_STYLES_BASEPATH": "/",
		"TSS_DEV_SSR_STYLES_ENABLED": "true",
		"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
		"TSS_INLINE_CSS_ENABLED": "false",
		"TSS_ROUTER_BASEPATH": "",
		"TSS_SERVER_FN_BASE": "/_serverFn/",
		"VITE_FIREBASE_API_KEY": "",
		"VITE_FIREBASE_APP_ID": "",
		"VITE_FIREBASE_AUTH_DOMAIN": "",
		"VITE_FIREBASE_MESSAGING_SENDER_ID": "",
		"VITE_FIREBASE_PROJECT_ID": "",
		"VITE_FIREBASE_STORAGE_BUCKET": ""
	}["VITE_FIREBASE_PROJECT_ID"],
	storageBucket: {
		"BASE_URL": "/",
		"DEV": false,
		"MODE": "production",
		"PROD": true,
		"SSR": true,
		"TSS_DEV_SERVER": "false",
		"TSS_DEV_SSR_STYLES_BASEPATH": "/",
		"TSS_DEV_SSR_STYLES_ENABLED": "true",
		"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
		"TSS_INLINE_CSS_ENABLED": "false",
		"TSS_ROUTER_BASEPATH": "",
		"TSS_SERVER_FN_BASE": "/_serverFn/",
		"VITE_FIREBASE_API_KEY": "",
		"VITE_FIREBASE_APP_ID": "",
		"VITE_FIREBASE_AUTH_DOMAIN": "",
		"VITE_FIREBASE_MESSAGING_SENDER_ID": "",
		"VITE_FIREBASE_PROJECT_ID": "",
		"VITE_FIREBASE_STORAGE_BUCKET": ""
	}["VITE_FIREBASE_STORAGE_BUCKET"],
	messagingSenderId: {
		"BASE_URL": "/",
		"DEV": false,
		"MODE": "production",
		"PROD": true,
		"SSR": true,
		"TSS_DEV_SERVER": "false",
		"TSS_DEV_SSR_STYLES_BASEPATH": "/",
		"TSS_DEV_SSR_STYLES_ENABLED": "true",
		"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
		"TSS_INLINE_CSS_ENABLED": "false",
		"TSS_ROUTER_BASEPATH": "",
		"TSS_SERVER_FN_BASE": "/_serverFn/",
		"VITE_FIREBASE_API_KEY": "",
		"VITE_FIREBASE_APP_ID": "",
		"VITE_FIREBASE_AUTH_DOMAIN": "",
		"VITE_FIREBASE_MESSAGING_SENDER_ID": "",
		"VITE_FIREBASE_PROJECT_ID": "",
		"VITE_FIREBASE_STORAGE_BUCKET": ""
	}["VITE_FIREBASE_MESSAGING_SENDER_ID"],
	appId: {
		"BASE_URL": "/",
		"DEV": false,
		"MODE": "production",
		"PROD": true,
		"SSR": true,
		"TSS_DEV_SERVER": "false",
		"TSS_DEV_SSR_STYLES_BASEPATH": "/",
		"TSS_DEV_SSR_STYLES_ENABLED": "true",
		"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
		"TSS_INLINE_CSS_ENABLED": "false",
		"TSS_ROUTER_BASEPATH": "",
		"TSS_SERVER_FN_BASE": "/_serverFn/",
		"VITE_FIREBASE_API_KEY": "",
		"VITE_FIREBASE_APP_ID": "",
		"VITE_FIREBASE_AUTH_DOMAIN": "",
		"VITE_FIREBASE_MESSAGING_SENDER_ID": "",
		"VITE_FIREBASE_PROJECT_ID": "",
		"VITE_FIREBASE_STORAGE_BUCKET": ""
	}["VITE_FIREBASE_APP_ID"]
};
/**
* Firebase is optional at build time. Until the keys in .env are filled in
* (see README.md), the site falls back to local demo data so nothing breaks.
*/
var isFirebaseConfigured = Boolean(firebaseConfig.apiKey && firebaseConfig.projectId && firebaseConfig.appId);
var app = null;
function getFirebaseApp() {
	if (!isFirebaseConfigured) return null;
	if (!app) app = getApps().length ? getApp() : initializeApp(firebaseConfig);
	return app;
}
function getDb() {
	const a = getFirebaseApp();
	return a ? getFirestore(a) : null;
}
function getFirebaseAuth() {
	const a = getFirebaseApp();
	return a ? getAuth(a) : null;
}
var LOCAL_KEY = "sp-jobs";
var seedJobs = [
	{
		id: "seed-1",
		title: "Security Guard (Male)",
		department: "Security",
		location: "Hinjewadi, Pune",
		type: "Full-time",
		experience: "0–3 years",
		salary: "₹16,000 – ₹20,000 / month",
		description: "Gate and lobby duty at an IT park. PSARA training provided. Must be 10th pass, physically fit and willing to work rotational shifts."
	},
	{
		id: "seed-2",
		title: "Lady Security Guard",
		department: "Security",
		location: "Kharadi, Pune",
		type: "Full-time",
		experience: "0–2 years",
		salary: "₹16,500 – ₹21,000 / month",
		description: "Frisking, reception support and visitor management at a corporate campus. Day shifts with weekly off and ESIC/PF benefits."
	},
	{
		id: "seed-3",
		title: "Housekeeping Supervisor",
		department: "Facilities",
		location: "Andheri East, Mumbai",
		type: "Full-time",
		experience: "2–5 years",
		salary: "₹22,000 – ₹28,000 / month",
		description: "Lead a housekeeping team of 12 at a commercial tower. Roster planning, consumable stock control and client reporting."
	},
	{
		id: "seed-4",
		title: "Operations Executive",
		department: "Operations",
		location: "Baner, Pune",
		type: "Full-time",
		experience: "3–6 years",
		salary: "₹30,000 – ₹40,000 / month",
		description: "Own site audits, deployment and client escalations across 15+ sites in west Pune. Two-wheeler and smartphone required."
	}
];
function readLocal() {
	if (typeof window === "undefined") return seedJobs;
	try {
		const raw = window.localStorage.getItem(LOCAL_KEY);
		return raw ? JSON.parse(raw) : seedJobs;
	} catch {
		return seedJobs;
	}
}
function writeLocal(jobs) {
	if (typeof window === "undefined") return;
	window.localStorage.setItem(LOCAL_KEY, JSON.stringify(jobs));
}
async function listJobs() {
	const db = getDb();
	if (!isFirebaseConfigured || !db) return readLocal();
	return (await getDocs(query(collection(db, "jobs"), orderBy("createdAt", "desc")))).docs.map((d) => ({
		id: d.id,
		...d.data()
	}));
}
async function createJob(input) {
	const db = getDb();
	if (!isFirebaseConfigured || !db) {
		writeLocal([{
			...input,
			id: `local-${Date.now()}`
		}, ...readLocal()]);
		return;
	}
	await addDoc(collection(db, "jobs"), {
		...input,
		createdAt: serverTimestamp()
	});
}
async function removeJob(id) {
	const db = getDb();
	if (!isFirebaseConfigured || !db) {
		writeLocal(readLocal().filter((j) => j.id !== id));
		return;
	}
	await deleteDoc(doc(db, "jobs", id));
}
/** Contact enquiries and job applications share this helper. */
async function submitDocument(collectionName, payload) {
	const db = getDb();
	if (!isFirebaseConfigured || !db) {
		console.info(`[demo mode] ${collectionName} submission`, payload);
		return;
	}
	await addDoc(collection(db, collectionName), {
		...payload,
		createdAt: serverTimestamp()
	});
}
//#endregion
export { removeJob as a, listJobs as i, getFirebaseAuth as n, submitDocument as o, isFirebaseConfigured as r, createJob as t };
