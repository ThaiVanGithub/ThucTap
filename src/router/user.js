const users = [
    {
        path: "/",
        component: () => import("../layouts/user.vue"),
        children: [
            {
                path: "",
                name: "home",
                component: () => import("../pages/mainPages/index.vue")
            },
            {
                path: "food",
                name: "food",
                component: () => import("../pages/foodPages/index.vue")
            },
            {
                path: "travel",
                name: "travel",
                component: () => import("../pages/travelPages/index.vue")
            },
            {
                path: "history",
                name: "history",
                component: () => import("../pages/historyPages/index.vue")
            }
        ]
    }
]

export default users;