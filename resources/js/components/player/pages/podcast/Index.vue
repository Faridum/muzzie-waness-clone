<template>
    <div class="podcasts-home-wrapper content-page">
        <div class="main-contet">
            <template v-if="genres && popularPodcasts">
                <podcast-genres :genres="genres"></podcast-genres>
                <div class="section-popular mt-5" v-if="popularPodcasts && popularPodcasts.length">
                    <swiper-section
                        :section="{
                            rank: 10,
                            title: $t('Popular Podcasts'),
                        }"
                        :content="popularPodcasts"
                    />
                </div>
            </template>
            <page-loading v-else />
        </div>
    </div>
</template>
<script>
export default {
    metaInfo() {
        return {
            title: this.generateMetaInfos(
                {},
                this.$store.getters.getSettings.podcastsPageTitle
            ),
            meta: [
                {
                    name: "description",
                    content: this.generateMetaInfos(
                        {},
                        this.$store.getters.getSettings.podcastsPageDescription
                    )
                }
            ]
        };
    },
    data() {
        return {
            genres: null,
            popularPodcasts: null
        };
    },
    async created() {
        const res = await axios.get(`/api/podcast-genres`);
        const res2 = await axios.get(`/api/popular-podcasts?nb_items=10&src=*`);
        this.genres = res.data;
        this.popularPodcasts = res2.data;
    }
};
</script>
<style lang="scss" scoped>
.podcasts-home-wrapper {
    box-sizing: border-box;
    padding-inline: clamp(1rem, 3vw, 3rem);
}

.main-contet {
    width: 100%;
    max-width: 1500px;
    margin-inline: auto;
}
</style>
