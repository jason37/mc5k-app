import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import CreateMessage from "@/components/CreateMessage.vue";
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
		{
			path: '/new',
			name: 'create message',
			component: CreateMessage
		},
	],
})

export default router
