<template>

  <h2 class="font-sans font-200 text-2xl">
    My Message Capsules</h2>

<ul class="font-mono">
  <li v-for="(capsule, index) in user.capsules">
      #{{ capsule.id}}

      {{capsule.message}}

  </li>
</ul>

</template>

<script>
import axios from "axios";
import { useUserStore} from "@/stores/user.js";

export default {
  name: 'CapsulesList',
  data: () => {
    return {
      user: {}
    }
  },
  created() {
    console.info('CapsulesList')
    this.user = useUserStore()
    this.user.fetchCapsules()
  },
}

</script>
