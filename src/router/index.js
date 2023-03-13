import { createWebHistory, createRouter } from "vue-router";

const route = [
    {path: "/", component: () => import("../pages/Home.vue"), name: "home"},
    {path: "/about", component: () => import("../pages/About.vue"), name: "about"},
    {path: "/detail/:id", component: () => import("../pages/Detail.vue"), name: "detail"},
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import("../pages/NotFound.vue") },
];

const router = createRouter({
    history: createWebHistory(),
    routes: route, 
    linkActiveClass: "active",
    linkExactActiveClass: "active"
});

export default router;