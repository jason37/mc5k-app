<template>
  <h2 class="font-sans font-200 text-2xl mb-4">
    My Message Capsules
  </h2>

  <DataView :value="user.capsules">
    <template #list="slotProps">
      <div class="flex flex-col ">
        <div v-for="msg in slotProps.items" :key="msg.id">

          <capsule-message :message="msg" />
        </div>
      </div>
    </template>
  </DataView>
</template>

<script>
import CapsuleMessage from "@/components/CapsuleMessage.vue";
import DataView from 'primevue/dataview';
import { useUserStore} from "@/stores/user.js";

export default {
  name: 'CapsulesList',
  components: {
    CapsuleMessage,
    DataView,
  },
  data: () => {
    return {
      user: {}
    }
  },
  created() {
    this.user = useUserStore();
    if (this.user.loggedIn) {
      this.user.fetchCapsules();
    }
  },
}

</script>
1