<template>
  <h2 class="font-bold text-2xl mb-2">
    Create a message*
  </h2>

  <Message v-if="saved" severity="success" closable>Capsule saved 😎</Message>
  <Message v-if="error" severity="error" closable>Error saving capsule </Message>

  <Textarea class="mt-4" rows="12" cols="40" v-model="message" @keydown="clearMessage()"></Textarea>
  <div class="mt-4 flex">
    <IftaLabel>
      <DatePicker id="openDate" v-model="openDate" show-icon></DatePicker>
      <label for="openDate">Open date*</label>
    </IftaLabel>

    <Button label="Save" icon="pi pi-check" iconPos="right" class="ml-8" :disabled="!messageOk()" @click="save" />


  </div>

</template>

<script>

import Button from "primevue/button";
import DatePicker from 'primevue/datepicker';
import IftaLabel from 'primevue/iftalabel';
import Message from 'primevue/message';
import Textarea from 'primevue/textarea';
import axios from "axios";
import { useUserStore} from "@/stores/user.js";

export default {
  name: 'CreateMessage',
  components: {
    Button,
    DatePicker,
    IftaLabel,
    Textarea,
    Message,

  },
  data: () => {
    return {
      message: null,
      openDate: null,
      user: null,
      saved: false,
      error: false,
    }
  },
  created() {
    this.user = useUserStore();
  },
  methods: {
    messageOk() {
      let ok = false;


      return this.message && this.openDate;
    },
    save: async function() {
      if (this.messageOk()) {

        const url = 'http://localhost:8000/api/capsules/create';
        const date = new Date(this.openDate).toISOString().slice(0,10);

        console.info(`message: ${this.message} open date: ${date}`)

        try {
          const res = await axios.post(url, {
                message: this.message,
                open_time: date,
              }, {
            headers : { Authorization: `Bearer ${this.user.authToken}`}
          }
          ).then(res => {
            console.info(res.data)
            this.message = this.openDate = null;
            this.saved = true;
            this.error = false;
          });

        } catch (err) {
          this.saved = false;
          this.error = true;
        }
      }
    },
    clearMessage() {
      this.saved = this.error = false;
    }
  }
}

</script>