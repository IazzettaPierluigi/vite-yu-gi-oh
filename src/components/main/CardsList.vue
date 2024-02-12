<template>
    <div id="select-input">

        <select id="archetypeList" v-model="store.selectValue">
            <option :value="element.archetype_name" v-for="(element, index) in store.arrayArchetype" :key="index">{{
                element.archetype_name }}
            </option>

        </select>
        <button @click.prevent="$emit('performSearch')">cerca</button>

    </div>
    <div>
        <h2>found {{ store.allCards.length }} cards</h2>
    </div>
    <div class="row">

        <Card v-for="(element, index) in store.allCards" :key="index" :propsElement="element" />
    </div>
</template>

<script>
import Card from "./Card.vue"
import { store } from "../../store"

export default {
    name: "CardsList",
    components: {
        Card,
    },
    data() {
        return {
            store
        }
    }
}
</script>

<style lang="scss" scoped>
#select-input {

    width: 80%;
    margin: auto;
    margin-bottom: 10px;
}

h2 {
    background-color: black;
    color: white;
    width: 80%;
    margin: auto;
    font-size: 20px;
    padding: 5px;
}

.row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    gap: 20px;
    background-color: white;

    width: 80%;
    margin: auto;
    padding: 20px
}
</style>