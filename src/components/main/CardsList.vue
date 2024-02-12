<template>
    <div id="select-input">
        <label for="archetypeList">Select archetype:</label>
        <select id="archetypeList" v-model="selectedCar">
            <option value="" v-for="(element, index) in store.arrayArchetype" :key="index">{{ element.archetype_name }}
            </option>

        </select>

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
    width: 60%;
    margin: auto;
    margin-bottom: 10px;
}

h2 {
    background-color: black;
    color: white;
    width: 60%;
    margin: auto;
    font-size: 20px;
    padding: 5px;
}

.row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;

    width: 60%;
    margin: auto;
    padding-bottom: 40px;
}
</style>