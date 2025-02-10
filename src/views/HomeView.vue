<template>
  <main>

    <Tabs value="0">
      <TabList>
        <Tab value="0">View capsules</Tab>
        <Tab value="1">Create a capsule</Tab>
        <Tab value="2">Logout</Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="0">
          <capsules-list></capsules-list>
        </TabPanel>
        <TabPanel value="1">
          <create-message></create-message>
        </TabPanel>
        <TabPanel value="2">
          Logout
        </TabPanel>

      </TabPanels>
    </Tabs>



  </main>
</template>

<script>

import CapsulesList from '@/components/CapsulesList.vue'
import CreateMessage from "@/components/CreateMessage.vue";

import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';

export default {
  name: 'HomeView',
  components: {
    CapsulesList,
    CreateMessage,
    Tab,
    Tabs,
    TabList,
    TabPanel,
    TabPanels,
  },
  created() {
    console.info('HomeView')
  },
}
</script>
