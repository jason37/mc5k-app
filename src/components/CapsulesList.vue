<template>

  <h2>My Message Capsules</h2>

<ul>
  <li v-for="(capsule, index) in user.capsules">
    Message #{{ capsule.id}}
    <p>
      {{capsule.message}}
    </p>
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
