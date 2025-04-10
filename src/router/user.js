// const user = [
//     {
//         path: "/user",
//         component: () => import("../layouts/admin.vue"),
//         children: [
//             {
//                 path: "usersPages",
//                 name: "users",
//                 component: () => import("../pages/usersPage/index.vue")
//             },
//             {
//                 path: "roles",
//                 name: "roles",
//                 component: () => import("../pages/roles/index.vue")
//             },
//             {
//                 path: "settings",
//                 name: "settings",
//                 component: () => import("../pages/settings/index.vue")
//             }
//         ]

//     }
// ]

// export default user;

const users = [
    {
        path: "/users",
        component: () => import("../layouts/user.vue"),

        children: [
            {
                path: "logInPages",
                name: "logInPages",
                component: () => import("../pages/logInPages/index.vue")
            },
            {
                path: "mainPages",
                name: "mainPages",
                component: () => import("../pages/mainPages/index.vue")
            },
            {
                path: "tourPages",
                name: "tourPages",
                component: () => import("../pages/tourPages/index.vue")
            }

        ]
    }
]
export default users;