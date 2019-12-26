<template>
  <div class="md-form">
    <div class="form-group green-border-focus text-right">
      <label for="exampleFormControlTextarea5">: إدخال النص</label>
      <textarea v-model="text" class="form-control" id="textAreaInput" rows="7"></textarea>
      <br />
      <button v-on:click="submitText()" class="btn btn-primary">إرسال</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      text: "",
      result: {}
    };
  },
  methods: {
    submitText() {
      axios
        .post("http://127.0.0.1:4200/textprocessing", {
          data: this.text
        })
        .then(response => {
          this.result = { data: response.data };
        })
        .catch(error => {
          this.result = { error: error };
        })
        .finally(() => {
          this.$emit("sendResult", this.result);
        });
    }
  }
};
</script>

<style>
</style>