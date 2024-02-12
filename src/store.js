import { reactive } from "vue";

export const store = reactive({

  allCards: [],
  apiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=400&offset=0',
  apiUrlArchetypes: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
  arrayArchetype: [],

});
