<template>
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

<style lang="scss" scoped></style>