<template>
    <div class="card">
        <figure>
            <img :src="propsElement.card_images[0].image_url_small" alt="">
        </figure>
    </div>
</template>

<script>
export default {
    name: "Card",
    props: [
        "propsElement",
    ],
    data() {


        return {}
    }
}
</script>

<style lang="scss" scoped></style>