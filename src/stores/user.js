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
				localStorage.setItem('token', this.authToken);
			},
			logout()
			{
				this.loggedIn = false;
				this.authToken = null;
				this.capsules = [];
				localStorage.clear();
			},
			isLoggedIn() {
				this.authToken = localStorage.getItem('token');
				if (this.authToken) {
					this.loggedIn = true;
					return true;
				}
				return false;
			},
			fetchCapsules() {
				axios.post('http://localhost:8000/api/capsules', null, {
					headers : { Authorization: `Bearer ${this.authToken}`}
				}).then(response => {
					this.capsules = response.data.data
				})
			}
		}
})