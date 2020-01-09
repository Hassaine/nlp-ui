<template>
  <div>
    <div class="row">
      <div class="col">
        <select class="form-control form-control-lg" v-model="selectedCorpus">
          <option v-for="corpus in dataSetNames" v-bind:key="corpus">{{corpus}}</option>
        </select>
      </div>
      <div class="col text-right">
        <button class="btn btn-primary" @click="loadCorpus(event)">load corpus</button>
      </div>
    </div>
    <br />
    <hr />
    <div class="row">
      <div class="col">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">word</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              v-model="wordNow"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">tags</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="tags"
              v-model="tagsNow"
            />
            <small id="emailHelp" class="form-text text-muted">write the tags separated with space.</small>
          </div>
          <button class="btn btn-primary" v-if="insert" @click="insertButton(event)">insert</button>
          <button class="btn btn-warning" v-if="!insert" @click="updateButton(event)">update</button>
        </form>
      </div>
    </div>
    <br />
    <hr />
    <div class="row">
      <div class="col">
        <label for="searchBar">search bar</label>

        <input type="text" class="form-control" id="searchBar" placeholder="word" v-model="search" />
        <br />

        <button class="btn btn-primary" @click="findword(event)">find</button>
        <button id="reset" class="btn btn-outline-secondary" @click="reset(event)">reset</button>
      </div>
    </div>
    <br />
    <hr />

    <ul id="example-1">
      <div class="row">
        <div v-for="word in words" v-bind:key="word">
          <div class="col">
            <div class="card border-dark mb-3" style="max-width: 18rem;">
              <div class="card-header">{{word.word}}</div>
              <div class="card-body text-dark">
                <h5 class="card-title">tags :</h5>
                <p class="card-text">{{listToString(word.tags)}}</p>
                <button @click="updateWord(word)">
                  <i class="fas fa-pencil-alt" />
                </button>
                <button class="red" @click="deleteWord(word.word)">
                  <i class="fas fa-times" />
                </button>
              </div>
            </div>

            <!-- <div class="card">
            
            <label for="staticEmail" class="col-sm-2 col-form-label">word</label>
            <div class="col-sm-10">
              <input
                type="text"
                readonly
                class="form-control-plaintext"
                id="staticEmail"
                :value="word.word"
              />
            </div>
            <label for="staticEmail" class="col-sm-2 col-form-label">tags</label>
            <div class="col-sm-10">
              <input
                type="text"
                readonly
                class="form-control-plaintext"
                id="staticEmail"
                :value="listToString(word.tags)"
              />
            </div>
            </div>-->
          </div>
        </div>
      </div>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      search: "",
      selectedCorpus: "",
      wordNow: "",
      tagsNow: "",
      insert: true,
      dataSetNames: ["Test.txt", "Test2.txt"],
      myHidenWords: [],
      words: []
    };
  },
  mounted: function() {
    this.getcorpusNames();
  },

  methods: {
    reset() {
      this.words = [];
      for (
        let index = this.myHidenWords.length - 1;
        index > this.myHidenWords.length - 100;
        index--
      ) {
        this.words.push(this.myHidenWords[index]);
      }
    },
    findword() {
      const tempwords = this.myHidenWords.filter(element =>
        element.word.startsWith(this.search)
      );
      if (tempwords.length >= 100) {
        this.words = [];
        for (
          let index = tempwords.length - 1;
          index > tempwords.length - 100;
          index--
        ) {
          this.words.push(tempwords[index]);
        }
      } else {
        this.words = tempwords;
      }
      event.preventDefault();
    },
    getcorpusNames() {
      axios
        .get("http://127.0.0.1:3000/corpuslist", {
          "Content-Type": "application/json"
        })
        .then(response => {
          // console.log(response);
          this.dataSetNames = JSON.parse(response.data.Result);
        })
        .catch(error => {
          console.log(error);
        });
    },
    loadCorpus() {
      //alert(this.selectedCorpus);
      axios
        .get("http://127.0.0.1:3000/corpus?corpusName=" + this.selectedCorpus, {
          "Content-Type": "application/json"
        })
        .then(response => {
          this.myHidenWords = JSON.parse(response.data.Result);
          this.words = [];

          for (
            let index = this.myHidenWords.length - 1;
            index > this.myHidenWords.length - 100;
            index--
          ) {
            this.words.push(this.myHidenWords[index]);
          }
        })
        .catch(error => {
          console.log(error);
        });
    },

    listToString(list) {
      let s = "";
      list.forEach(element => {
        s += " " + element;
      });
      return s;
    },
    insertButton() {
      const wordObject = {
        word: this.wordNow,
        tags: this.tagsNow.split(/(\s+)/).filter(e => e.trim().length > 0)
      };
      console.log(wordObject);
      axios
        .post(
          "http://127.0.0.1:3000/addword?corpusName=" + this.selectedCorpus,
          wordObject,
          { "Content-Type": "application/json" }
        )
        .then(response => {
          alert(response.data.Result);
          this.myHidenWords.push(wordObject);
          this.reset();
        })
        .catch(error => {
          console.log(error);
        });

      event.preventDefault();
    },
    updateButton() {
      const wordObject = {
        word: this.wordNow,
        tags: this.tagsNow.split(/(\s+)/).filter(e => e.trim().length > 0)
      };
      console.log(wordObject);
      axios
        .post(
          "http://127.0.0.1:3000/updateword?corpusName=" + this.selectedCorpus,
          wordObject,
          { "Content-Type": "application/json" }
        )
        .then(response => {
          alert(response.data.Result);
          this.myHidenWords = this.myHidenWords.filter(
            element => element.word != wordObject.word
          );
          this.myHidenWords.push(wordObject);
          this.reset();
        })
        .catch(error => {
          console.log(error);
        });
      this.insert = true;
      this.wordNow = "";
      this.tagsNow = "";
      event.preventDefault();
    },
    updateWord(word) {
      this.wordNow = word.word;
      this.tagsNow = this.listToString(word.tags);
      this.insert = false;
    },
    deleteWord(word) {
      if (
        confirm(
          "Do you really want to delete " +
            word +
            " from " +
            this.selectedCorpus +
            "?"
        )
      ) {
        axios
          .delete(
            "http://127.0.0.1:3000/words?corpusName=" +
              this.selectedCorpus +
              "&word=" +
              word,
            {
              "Content-Type": "application/json"
            }
          )
          .then(response => {
            alert(response.data.Result);
            this.myHidenWords = this.myHidenWords.filter(
              element => element.word != word
            );

            this.reset();
          })
          .catch(error => {
            console.log(error);
          });
      }
    },
    getData() {
      axios
        .get("http://127.0.0.1:4200/rouate-statistics", {
          "Content-Type": "application/json"
        })
        .then(response => {
          // console.log(response);
          this.result = { data: JSON.parse(response.data.Result) };
          this.getData = true;
          console.log(this.result.data);
        })
        .catch(error => {
          this.result = { error: error };
        });
    }
  }
};
</script>

<style scoped>
.red {
  color: brown;
  text-shadow: 1px 1px 1px #ccc;
  text-align: right;
}
#reset {
  margin-left: 10px;
}
</style>