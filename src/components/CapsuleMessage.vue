<template>
  <div class="mt-2 mb-4">
    <div class="flex">
      <Button :disabled="!viewable" :label="action" @click="toggleExpose()" class="mr-2" />
      <Button :disabled="!viewable" :label="editAction" @click="toggleEditor()" class="mr-2" />
      <Message v-show="!message.is_opened" severity="contrast" label="New!" class="mr-2">New!</Message>
      <Message v-show="!viewable" severity="info">Message available {{ prettyOpenDate }}</Message>
    </div>
    <div v-show="exposed" class="mt-4">
      {{message.message}}
    </div>
    <div v-show="editor" class="">
      <div class="mb-2">
        <textarea v-model="message.message" class="mt-4" rows="4" cols="40"></textarea>
      </div>
      <Button label="Save" @click="saveEdit()" />
    </div>
    <Message v-show="error" severity="error" class="mt-2">Error updating capsule</Message>
  </div>
</template>
<script>
import Button from "primevue/button";
import Message from "primevue/message";
import axios from "axios";
import { useUserStore} from "@/stores/user.js";
export default {
  name: 'CapsuleMessage',
  components:{
    Button,
    Message,
  },
  props: {
    message:{
      message: null,
    },
  },
  data: () => {
    return {
      exposed: false,
      editor: false,
      error: false,
      updatedMessage: null,
    }
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
    editAction() {
      return this.editor ? 'Cancel' : 'Edit';
    },
    viewable() {
      return new Date(this.message.open_time).getTime() < Date.now();
    },
    updatedMessage() {
      return this.message.message;
    }
  },
  methods: {
    toggleExpose() {
      if (!this.message.is_opened) {
        this.message.is_opened = true;
        this.updateCapsule();
      }
      this.exposed = !this.exposed;
    },
    toggleEditor() {
      this.editor = !this.editor;
    },
    saveEdit() {
      this.updateCapsule();
    },
    updateCapsule: async function() {
      const user = useUserStore();
      try {
        await axios.put(`http://localhost:8000/api/capsules/${this.message.id}`, {
          is_opened: this.message.is_opened,
          open_time: this.message.open_time,
          message: this.message.message,

        }, {
          headers: {Authorization: `Bearer ${user.authToken}`}
        }).then(response => {
          if (response.status !== 200) {
            this.error = true;
          }
        })
      } catch (error) {
        this.error = true;
      }
    },
  },
}
</script>
