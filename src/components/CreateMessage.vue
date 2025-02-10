<template>
  <h2>
    Create a message
  </h2>
  <Textarea rows="12" cols="40"></Textarea>
  <div class="mt-4">
    <IftaLabel>
      <DatePicker id="openDate" v-model="openDate" show-icon></DatePicker>
      <label for="openDate">Open date</label>
    </IftaLabel>

    <Button label="Save" icon="pi pi-check" iconPos="right" />
  </div>

</template>

<script>

import Button from "primevue/button";
import DatePicker from 'primevue/datepicker';
import IftaLabel from 'primevue/iftalabel';
import Textarea from 'primevue/textarea';

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
      openDate: null
    }
  }
}

</script>