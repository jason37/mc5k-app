import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LogIn from "@/components/LogIn.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},

		{
			path: '/login',
      name: 'login',
      component: LogIn,
		},
	],
})

export default router
