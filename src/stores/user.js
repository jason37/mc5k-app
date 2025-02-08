import { defineStore } from 'pinia'
import axios from "axios";

export const useUserStore = defineStore('user', {
		state: () => {
			return {
				loggedIn: false,
				authToken: null,
				capsules: [
					// {
					// 	id: 1,
					// 	message: 'Yo de yo yo word'
					// }
				],
			}
		},
		getters: {

		},
		actions: {

			login() {
				this.loggedIn = true
			},
			logout()
			{
				this.loggedIn = false
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