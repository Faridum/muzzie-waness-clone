<template>
    <div class="container">
        <div class="wrapper">
            <div class="img-container" v-if="img">
                <img
                    :src="imageSrc"
                    alt=""
                    :width="isBannerImage ? null : 200"
                    :height="isBannerImage ? null : 266"
                    :class="isBannerImage ? 'banner-image d-block' : ''"
                />
            </div>
            <div>
                <div class="headline">
                    {{ $t(headline) }}
                </div>
                <div class="sub">
                    {{ $t(sub) }}
                </div>
            </div>
            <div class="button-container">
                <slot name="button"></slot>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ["img", "headline", "sub"],
    computed: {
        isBannerImage() {
            return this.img === "/storage/defaults/images/banner.jpeg";
        },
        imageSrc() {
            return this.img.startsWith("/")
                ? this.img
                : "/storage/defaults/images/empty_page/" + this.img;
        }
    }
};
</script>

<style lang="scss" scoped>
@import "../../../sass/variables";
.container {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    .wrapper {
        padding: 3em 0;
    }
    .img-container {
        display: flex;
        justify-content: center;
        img {
            max-width: 250px;
        }
        img.banner-image {
            width: auto;
            height: auto;
            max-width: none;
        }
    }
    .headline {
        font-weight: 600;
        font-size: 1.3em;
        margin-bottom: 0.5em;
    }
    .sub {
        font-size: 0.9em;
        font-weight: 400;
        max-width: 30em;
    }
    .button-container {
        margin-top: 1em;
    }
}

</style>
