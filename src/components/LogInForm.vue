<template>
  <form @submit.prevent="logMeIn()">
    <div class="px-6 py-20 md:px-12 lg:px-20 text-slate-100">
      <div class="bg-slate-700 p-6 shadow rounded-border w-full lg:w-6/12 mx-auto">
        <div class="text-center mb-8">
          <div class="text-3xl font-medium mb-4">Log in</div>
        </div>

        <div>
          <label for="username" class="text-surface-900 dark:text-surface-0 font-medium mb-2 block">Username</label>
          <input id="username" type="text" v-model="username" class="border-b w-full mb-4" />

          <label for="passwd" class="text-surface-900 dark:text-surface-0 font-medium mb-2 block">Password</label>
          <input id="passwd" type="password" v-model="passwd" class="border-b w-full mb-4" />


          <button class="w-full bg-green-500 rounded-md">Log in</button>
        </div>
      </div>
    </div>
  </form>


</template>






<script>
import axios from "axios";
import {useUserStore} from "@/stores/user.js";

import Button from 'primevue/button';
import Checkbox from 'primevue/checkbox';
import InputText from 'primevue/inputtext';


export default {
  name: 'LogInForm',
  components: {
    Button,
    Checkbox,
    InputText,
  },

  data: () => {
    return {
      username: '',
      passwd: '',
      user: {},
    }
  },
  created() {
    this.user = useUserStore();
  },
  methods: {
    logMeIn: async function() {

      const url = 'http://localhost:8000/api/login';

      this.error = null;

      try {
        console.info(`user: ${this.username} pass: ${this.passwd}`)
        const res = await axios.post(url,  {
          email: this.username,
          password: this.passwd }
        ).then(res => res.data);

        console.info(res.status)
        if (res.status === 'success') {
          this.user.login(res.data);
          return this.$router.push({name:'home'});
        }
        console.info(res.data)
      } catch (err) {
        this.error = err.message;
      }
    }

  }
}
</script>

<style>
</style>