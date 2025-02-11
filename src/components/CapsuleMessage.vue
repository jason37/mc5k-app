<template>
  <div class="flex mb-4">


    <Button :disabled="viewable" :label="action" @click="toggleExpose()" class="mr-2" />

    <Button :disabled="viewable" label="Edit" @click="toggleExpose()" class="mr-2" />

    <Message v-show="!message.is_opened" severity="contrast" label="New!" class="mr-2">New!</Message>

    <Message v-show="viewable" severity="info">Message available {{ prettyOpenDate }}</Message>
  </div>
  <div v-show="exposed" class="">
    {{message.message}}
  </div>

</template>
<script>
import Button from "primevue/button";
import Message from "primevue/message";
export default {
  name: 'CapsuleMessage',
  components:{
    Button,
    Message,
  },
  props: {
    message:{},
  },
  data: () => {
    return {
      exposed: false,
    }
  },
  created() {
    console.info(this.message)
    console.info(this.viewable)
  },
  computed: {
    openDate() {
      return new Date(this.message.open_time).toLocaleString('en-US');
    },
    prettyOpenDate() {
      return this.openDate.substring(0, this.openDate.indexOf(','));
    },
    action() {
      return this.exposed ? 'Hide' : 'View';
    },
    viewable() {
      console.info(new Date(this.message.open_time).getTime())
      console.info(Date.now())
      return new Date(this.message.open_time).getTime() < Date.now();
    }
  },
  methods: {
    toggleExpose() {
      this.exposed = !this.exposed;
    },
  },
}
</script>