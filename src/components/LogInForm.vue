<template>
  <form @submit.prevent="logMeIn()">
  <label for="username">username</label>
  <input id="username" v-model="username" class="border-b">
  <label for="passwd">password</label>
  <input id="passwd" v-model="passwd" type="password" class="border-b">

  <button>Log In</button>

  </form>
</template>

<script>
import axios from "axios";

export default {
  name: 'LogInForm',

  data: function () {
    return {
      username: '',
      passwd: '',
    }
  },
  methods: {
    logMeIn: async function() {


      const url = 'http://localhost:8000/api/login';
      this.success = false;
      this.error = null;

      try {
        console.info(`user: ${this.username} pass: ${this.passwd}`)
        const res = await axios.post(url,  {
          email: this.username,
          password: this.passwd }
        ).then(res => res.data);

        console.info(res.status)
        if (res.status === 'success') {
          this.success = true;
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