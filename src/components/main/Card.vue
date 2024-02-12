<template>
    <div class="card">
        <figure>
            <img :src="propsElement.card_images[0].image_url_small" alt="">
        </figure>
        <div class="text">
            <h4>{{ propsElement.name }}</h4>
            <span>{{ propsElement.type }}</span>
        </div>
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

<style lang="scss" scoped>
.card {
    width: calc(100% / 6 - (20px));
    background-color: #d48f38;

    figure {
        width: 100%;

        img {
            width: 100%;
        }
    }

    .text {
        text-align: center;
        padding-block: 20px;
        display: flex;
        flex-direction: column;
        gap: 20px;

        h4 {
            text-transform: uppercase;
            color: white;
            font-size: 20px;
        }

        span {
            font-size: 18px;
        }
    }
}
</style>