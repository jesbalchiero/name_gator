import { createApp } from "vue"; 
import { createRouter, createWebHistory } from "vue-router"; 
import App from "./App.vue";
import DomainList from "./components/DomainList.vue";
import DomainView from "./components/DomainView.vue";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: "/domains",
			component: DomainList
		},
		{
			path: "/domains/:domain",
			component: DomainView,
			props: true
		},
		{
			path: "/",
			redirect: "/domains"
		}
	],
});

createApp(App).use(router).mount("#app");