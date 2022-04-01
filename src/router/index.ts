import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
	{
		path: "/nightmare",
		name: "Nightmare",
		component: () => import("../views/Nightmare.vue"),
	},
	{
		path: "/auroraedit",
		name: "AuroraEdit",
		component: () => import("../views/AuroraEdit.vue"),
	},
	{
		path: "/holdmenow",
		name: "HoldMeNow",
		component: () => import("../views/HoldMeNow.vue"),
	},
	{
		path: "/mikuremix",
		name: "MikuRemix",
		component: () => import("../views/MikuRemix.vue"),
	},
	{
		path: "/partygirl",
		name: "PartyGirl",
		component: () => import("../views/PartyGirl.vue"),
	},
	{
		path: "/theuniverse",
		name: "TheUniverse",
		component: () => import("../views/TheUniverse.vue"),
	},
];
const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
