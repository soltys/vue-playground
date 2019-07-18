import "./css/site.css";
import Vue from 'vue';
import Router from "vue-router";
Vue.use(Router);
var routes = [
    { path: "/", component: require("./components/home.vue") },
    { path: "/counter", component: require("./components/counter.vue") },
    { path: "/fetchdata", component: require("./components/fetchdata.vue") }
];
new Vue({
    el: "#app-root",
    router: new Router({ mode: "history", routes: routes }),
    render: function (h) { return h(require("./components/app.vue")); }
});
//# sourceMappingURL=boot.js.map