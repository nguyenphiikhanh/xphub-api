import {default as PageLogin} from "@/views/pages/auth/login/Main";
import {default as PageRegister} from "@/views/pages/auth/register/Main";
import {default as PageResetPassword} from "@/views/pages/auth/reset-password/Main";
import {default as PageForgotPassword} from "@/views/pages/auth/forgot-password/Main";
import {default as PageNotFound} from "@/views/pages/shared/404/Main";

import {default as PageDashboard} from "@/views/pages/private/dashboard/Main";
import {default as PageProfile} from "@/views/pages/private/profile/Main";

import {default as PageUsers} from "@/views/pages/private/users/Index";
import {default as PageUsersCreate} from "@/views/pages/private/users/Create";
import {default as PageUsersEdit} from "@/views/pages/private/users/Edit";

//categories
import {default as PageCategories} from "@/views/pages/private/categories/Index";
import {default as PageCategoriesCreate} from "@/views/pages/private/categories/Create";
import {default as PageCategoriesEdit} from "@/views/pages/private/categories/Edit";
//tags
import {default as PageTags} from "@/views/pages/private/tags/Index";
import {default as PageTagsCreate} from "@/views/pages/private/tags/Create";
import {default as PageTagsEdit} from "@/views/pages/private/tags/Edit";
//posts
import {default as PagePosts} from "@/views/pages/private/posts/Index";
import {default as PagePostsCreate} from "@/views/pages/private/posts/Create";
import {default as PagePostsEdit} from "@/views/pages/private/posts/Edit";

import abilities from "@/stub/abilities";

const routes = [
    {
        name: "home",
        path: "/",
        meta: {requiresAuth: false, isPublicAuthPage: true},
        component: PageLogin,
    },
    {
        name: "panel",
        path: "/panel",
        children: [
            {
                name: "dashboard",
                path: "dashboard",
                meta: {requiresAuth: true},
                component: PageDashboard,
            },
            {
                name: "profile",
                path: "profile",
                meta: {requiresAuth: true, isOwner: true},
                component: PageProfile,
            },
            {
                path: "users",
                children: [
                    {
                        name: "users.list",
                        path: "list",
                        meta: {requiresAuth: true, requiresAbility: abilities.LIST_USER},
                        component: PageUsers,
                    },
                    {
                        name: "users.create",
                        path: "create",
                        meta: {requiresAuth: true, requiresAbility: abilities.CREATE_USER},
                        component: PageUsersCreate,
                    },
                    {
                        name: "users.edit",
                        path: ":id/edit",
                        meta: {requiresAuth: true, requiresAbility: abilities.EDIT_USER},
                        component: PageUsersEdit,
                    },
                ]
            },
            {
                path: "category",
                children: [
                    {
                        name: "category.list",
                        path: "list",
                        meta: {requiresAuth: true},
                        component: PageCategories,
                    },
                    {
                        name: "category.create",
                        path: "create",
                        meta: {requiresAuth: true},
                        component: PageCategoriesCreate,
                    },
                    {
                        name: "category.edit",
                        path: ":id/edit",
                        meta: {requiresAuth: true},
                        component: PageCategoriesEdit,
                    },
                ]
            },
            {
                path: "tag",
                children: [
                    {
                        name: "tag.list",
                        path: "list",
                        meta: {requiresAuth: true},
                        component: PageTags,
                    },
                    {
                        name: "tag.create",
                        path: "create",
                        meta: {requiresAuth: true},
                        component: PageTagsCreate,
                    },
                    {
                        name: "tag.edit",
                        path: ":id/edit",
                        meta: {requiresAuth: true},
                        component: PageTagsEdit,
                    },
                ]
            },
            {
                path: "post",
                children: [
                    {
                        name: "post.list",
                        path: "list",
                        meta: {requiresAuth: true},
                        component: PagePosts,
                    },
                    {
                        name: "post.create",
                        path: "create",
                        meta: {requiresAuth: true},
                        component: PagePostsCreate,
                    },
                    {
                        name: "post.edit",
                        path: ":id/edit",
                        meta: {requiresAuth: true},
                        component: PagePostsEdit,
                    },
                ]
            },
        ]
    },
    {
        path: "/login",
        name: "login",
        meta: {requiresAuth: false, isPublicAuthPage: true},
        component: PageLogin,
    },
    {
        path: "/register",
        name: "register",
        meta: {requiresAuth: false, isPublicAuthPage: true},
        component: PageRegister,
    },
    {
        path: "/reset-password",
        name: "resetPassword",
        meta: {requiresAuth: false, isPublicAuthPage: true},
        component: PageResetPassword,
    },
    {
        path: "/forgot-password",
        name: "forgotPassword",
        meta: {requiresAuth: false, isPublicAuthPage: true},
        component: PageForgotPassword,
    },
    {
        path: "/:catchAll(.*)",
        name: "notFound",
        meta: {requiresAuth: false},
        component: PageNotFound,
    },
]

export default routes;
