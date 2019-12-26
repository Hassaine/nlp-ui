<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <file-uploader @sendResult="getResult"></file-uploader>
      </div>
      <div class="col">
        <text-input @sendResult="getResult"></text-input>
      </div>
    </div>
    <hr />
    <div class="row">
      <div class="col">
        <h1 id="Resultheader" class="left">Resaults</h1>
        <resault-display :result="result"></resault-display>
      </div>
    </div>
  </div>
</template>

<script>
import FileUploader from "./MainAppComponents/FileUploader.vue";
import ResaultDisplay from "./MainAppComponents/ResaultDisplay.vue";
import TextInput from "./MainAppComponents/TextInput.vue";
export default {
  components: {
    FileUploader,
    TextInput,
    ResaultDisplay
  },
  data: function() {
    return {
      userText: "",
      file: "",
      result: {}
    };
  },

  methods: {
    getResult(result) {
      console.log(result);
      this.result = result;
    }
  }
};
</script>


<style scoped>
#Resultheader {
  align-content: flex-start;
}

.left {
  text-align: left;
}
.right {
  text-align: right;
}
</style>