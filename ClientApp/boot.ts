import "./css/normalize.css";
import "./css/site.css";
import Vue from 'vue';
import Router from "vue-router";

Vue.use(Router);

const routes = [
    { path: "/", component: require("./components/home.vue") },
    { path: "/counter", component: require("./components/counter.vue") },
    { path: "/fetchdata", component: require("./components/fetchdata.vue") },
    { name: "card", path: "/card/:id", component: require("./components/card-details.vue") }
];

new Vue({
    el: "#app-root",
    router: new Router({ mode: "history", routes: routes }),
    render: h => h(require("./components/app.vue"))
});
