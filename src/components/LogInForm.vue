<template>
    <div class="px-6 py-8 lg:py-20 md:px-12 lg:px-20 text-slate-100">
      <div class="p-6 shadow rounded-border w-full mx-auto">
        <div class="text-center mb-8">
          <div class="text-3xl font-medium mb-4">Log in</div>
        </div>
        <div>
          <label for="username" class="text-surface-900 dark:text-surface-0 font-medium mb-2 block">Username</label>
          <input id="username" type="text" v-model="username" class="border-b w-full mb-4" />
          <label for="passwd" class="text-surface-900 dark:text-surface-0 font-medium mb-2 block">Password</label>
          <input id="passwd" type="password" v-model="passwd" class="border-b w-full mb-4" />
          <Button label="Log in" class="w-full" @click="logMeIn"/>
        </div>
      </div>
    </div>

</template>
<script>
import axios from "axios";
import {useUserStore} from "@/stores/user.js";
import Button from 'primevue/button';

export default {
  name: 'LogInForm',
  components: {
    Button,
  },
  data: () => {
    return {
      username: 'test@example.com',
      passwd: 'password',
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
