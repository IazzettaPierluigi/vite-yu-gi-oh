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
    //questo è il method per fare la chiamata api delle carte 
    requestCard() {
      store.apiUrl = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=400&offset=0'
      if (store.selectValue != '') {
        store.apiUrl = `https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=${store.selectValue}`
      }
      axios
        .get(store.apiUrl)
        .then(result => {
          console.log(result.data)

          //inserisco i dati del data nel mio array che è in storejs
          store.allCards = result.data.data
        });
    },
    requestArchetype() {

      axios.get(store.apiUrlArchetypes).then((res) => {
        store.arrayArchetype = res.data
      })
    },
  },

  mounted() {
    this.requestCard();
    this.requestArchetype();
  },
}


</script>

<template>
  <AppHeader />

  <main>
    <AppSearch />
    <CardsList @performSearch="requestCard" />
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
