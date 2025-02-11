import { defineStore } from 'pinia'
import axios from "axios";

export const useUserStore = defineStore('user', {
		state: () => {
			return {
				loggedIn: false,
				authToken: null,
				capsules: [],
			}
		},
		getters: {

		},
		actions: {

			login(auth) {
				this.loggedIn = true;
				this.authToken = auth.token;
			},
			logout()
			{
				this.loggedIn = false;
				this.authToken = null;
				this.capsules = [];

			},
			fetchCapsules() {
				console.info(`fetchCapsules() token is ${this.authToken}`)
				axios.get('http://localhost:8000/api/capsules', null, {
					headers : { Authorization: `Bearer ${this.authToken}`}
				}).then(response => {
					console.info(response)
					this.capsules = response.data.data
				})
			}
		}
})