<template>

  <h2>My Message Capsules</h2>



</template>

<script>
import axios from "axios";
import { useUserStore} from "@/stores/user.js";

export default {
  name: 'CapsulesList',

  created() {
    console.info('CapsulesList')
    const user = useUserStore()
  },
}

</script>
