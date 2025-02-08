<template>
  <main>
    <capsules-list></capsules-list>
  </main>
</template>

<script>

import CapsulesList from '@/components/CapsulesList.vue'
export default {
  name: 'HomeView',
  components: {CapsulesList},
  created() {
    console.info('HomeView')
  },
}
</script>
