<template>
  <div class="container">
    <br />
    <div class="dropbox" v-if="isInitial || isSaving">
      <input
        type="file"
        name="file"
        @change="fileChange"
        :disabled="isSaving"
        id="file"
        ref="file"
        class="input-file"
      />
      <p v-if="isInitial">
        إسحب ملفك هنا للبدء
        <br />أو إضغط للتصفح
      </p>
      <p v-if="isSaving">Uploading the files...</p>
    </div>
    <div v-if="isSuccess">
      <h2>تم رفع الملف بنجاح</h2>
      <p>
        <a href="javascript:void(0)" @click="reset">تحميل مرة أخرى</a>
      </p>
    </div>
  </div>
</template>

<script>
const STATUS_INITIAL = 0,
  STATUS_SAVING = 1,
  STATUS_SUCCESS = 2,
  STATUS_FAILED = 3;
import axios from "axios";
export default {
  data: function() {
    return {
      currentStatus: null,
      file: "",
      result: {}
    };
  },
  methods: {
    reset() {
      this.currentStatus = STATUS_INITIAL;
    },
    fileChange() {
      this.currentStatus = STATUS_SAVING;

      this.file = this.$refs.file.files[0];
      let formData = new FormData();
      formData.append("file", this.file);
      axios
        .post("http://127.0.0.1:4200/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(response => {
          console.log(response);
          this.result = { data: response.data };

          this.currentStatus = STATUS_SUCCESS;
        })
        .catch(error => {
          console.log(error);
          this.result = { error: error };
          this.currentStatus = STATUS_FAILED;
        })
        .finally(() => {
          this.$emit("sendResult", this.result);
        });
    }
  },
  computed: {
    isInitial() {
      return this.currentStatus === STATUS_INITIAL;
    },
    isSaving() {
      return this.currentStatus === STATUS_SAVING;
    },
    isSuccess() {
      return this.currentStatus === STATUS_SUCCESS;
    },
    isFailed() {
      return this.currentStatus === STATUS_FAILED;
    }
  },
  mounted() {
    this.reset();
  }
};
</script>


<style lang="scss">
.dropbox {
  outline: 2px dashed grey; /* the dash box */
  outline-offset: -10px;
  background: lightcyan;
  color: dimgray;
  padding: 10px 10px;
  min-height: 200px; /* minimum height */
  position: relative;
  cursor: pointer;
}

.input-file {
  opacity: 0; /* invisible but it's there! */
  width: 100%;
  height: 200px;
  position: absolute;
  cursor: pointer;
}

.dropbox:hover {
  background: lightblue; /* when mouse over to the drop zone, change color */
}

.dropbox p {
  font-size: 1.2em;
  text-align: center;
  padding: 50px 0;
}
</style>