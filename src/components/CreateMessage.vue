<template>
  <h2>
    Create a message*
  </h2>
  <Textarea rows="12" cols="40" v-model="message"></Textarea>
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

  },
  data: () => {
    return {
      message: null,
      openDate: null,
      user: null,
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

        const url = 'http://localhost:8000/api/capsules';
        const date = new Date(this.openDate).toISOString().slice(0,10);

        console.info(`message: ${this.message} open date: ${date}`)

        try {
          const res = await axios.post(url, {
                message: this.message,
                open_time: date,
              }, {
            headers : { Authorization: `Bearer ${this.user.authToken}`}
          }
          ).then(res => res.data);

        } catch (err) {

        }
      }
    }
  }
}

</script>