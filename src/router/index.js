import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_url),
    routes: [
        {
            path: "/",
            name: "Home",
            component: () => import('../views/Home.vue'),
        },
        {
            path: "/home",
            redirect: "/"
        },
        {
            path: "/product/:id",
            name: "Product",
            component: () => import('../views/Product.vue'),
            children: [
                {
                    path: "owner",
                    name: "owner",
                    component: () => import('../views/Owner.vue'),
                }
            ]
        },
          {
            path: "/about",
            name: "About",
            component: () => import('../views/About.vue'),
        },
        {
            path: "/:catchAll(.*)",
            name: "NotFound",
            component: () => import('../errors/404.vue'),
        }
    ]
});


export default router;