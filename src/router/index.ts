import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
	{
		path:      "/forbiddenNights",
		name:      "ForbiddenNights",
		component: () => import("../views/ForbiddenNights.vue"),
	},
	{
		path:      "/killauraedit",
		name:      "KillAuraEdit",
		component: () => import("../views/KillAuraEdit.vue"),
	},
	{
		path:      "/nightmare",
		name:      "Nightmare",
		component: () => import("../views/Nightmare.vue"),
	},
	{
		path:      "/auroraedit",
		name:      "AuroraEdit",
		component: () => import("../views/AuroraEdit.vue"),
	},
	{
		path:      "/holdmenow",
		name:      "HoldMeNow",
		component: () => import("../views/HoldMeNow.vue"),
	},
	{
		path:      "/mikuremix",
		name:      "MikuRemix",
		component: () => import("../views/MikuRemix.vue"),
	},
	{
		path:      "/afterlife",
		name:      "Afterlife",
		component: () => import("../views/Afterlife.vue"),
	},
	{
		path:      "/partygirl",
		name:      "PartyGirl",
		component: () => import("../views/PartyGirl.vue"),
	},
	{
		path:      "/theuniverse",
		name:      "TheUniverse",
		component: () => import("../views/TheUniverse.vue"),
	},
	{
		path:      "/",
		name:      "Home",
		component: () => import("../views/Home.vue"),
	},
];
const router                   = createRouter({
	history: createWebHistory(),
	routes,
});

router.beforeEach((to, from, next) => {
	if (!to.matched.length) {
		next("/");
	}
	else {
		next();
	}
});

export default router;
