<script>
import AppHeader from "./components/AppHeader.vue";
import AppSearch from "./components/main/AppSearch.vue";
import CardsList from "./components/main/CardsList.vue";



import { store } from "./store";
import axios from "axios";

export default {
  components: {
    AppHeader,
    AppSearch,
    CardsList,

  },
  data() {
    return {
      store,
    };
  },
  created() {
    this.requestCard();
  },
  methods: {
    requestCard() {
      axios
        .get("https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0")
        .then((result) => {
          store.randomMail = result.data.response;
        });
    },
  },
};
</script>

<template>
  <h1>Hello World</h1>

  <AppHeader />
</template>

<style lang="scss">
@use "./styles/general.scss";

h2 {
  font-size: 120px;
  color: aquamarine;
}

h3 {
  font-size: 80px;
  color: blueviolet;
}
</style>
