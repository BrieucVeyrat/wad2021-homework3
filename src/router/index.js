import Vue from "vue";
import VueRouter from "vue-router";
import ContactUs from "../views/ContactUs.vue";
import About from "../views/About.vue";
import Posts from "../views/Posts.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/contactus",
        name: "Contact Us",
        component: ContactUs,
    },
    {
        path: "/",
        name: "Posts",
        component: Posts,
    },
    {
        path: "/about",
        name: "About",
        component: About,
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;