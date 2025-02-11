<template>

  <h2 class="font-sans font-200 text-2xl mb-4">
    My Message Capsules
  </h2>

  <DataView :value="user.capsules">
    <template #list="slotProps">
      <div class="flex flex-col">
        <div v-for="msg in slotProps.items" :key="msg.id">
          {{msg.message}} {{msg.open_time}} opened:{{msg.is_opened}} user:{{ msg.user_id }}
        </div>
      </div>
    </template>
  </DataView>
</template>

<script>

import DataView from 'primevue/dataview';

import { useUserStore} from "@/stores/user.js";

export default {
  name: 'CapsulesList',
  components: {
    DataView,
  },
  data: () => {
    return {
      user: {}
    }
  },
  created() {
    console.info('CapsulesList')
    this.user = useUserStore();
    if (this.user.loggedIn) {
      this.user.fetchCapsules();
      console.info(this.user.capsules)
    }

  },
}

</script>
