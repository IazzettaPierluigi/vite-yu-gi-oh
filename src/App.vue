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

  methods: {
    //questo è il method per fare la chiamata api
    requestCard() {
      axios
        .get(store.apiUrl)
        .then(res => {
          console.log(res.data)
        });
    },
  },

  mounted() {
    this.requestCard()
  }
};
</script>

<template>
  <AppHeader />

  <main>
    <AppSearch />
    <CardsList />
  </main>
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
