<template>
    <div
        class="content-page"
        :class="{ 'home-page': $route.path === '/home' }"
        v-if="page && page !== '404'"
    >
        <template v-if="page.blank">
            <div class="content-container">
                <div class="page-content" v-html="page.content"></div>
            </div>
        </template>
        <template v-else>
            <div class="icon-header">
                <div class="cover">
                    <v-icon dark>$vuetify.icons.{{ page.icon }}</v-icon>
                </div>
                <div class="title">
                    <div class="headline">
                        {{ $t(page.title) }}
                    </div>
                    <div class="sub">
                        {{ $t(page.description) }}
                    </div>
                </div>
            </div>
            <div class="home-page__banner" v-if="$route.path === '/home'">
                <img
                    src="/storage/defaults/images/banner.jpeg"
                    alt=""
                />
            </div>
            <template v-if="$store.getters.getSettings.enableAds">
                <div
                    class="ad-slot"
                    v-if="
                        parseAd($store.getters.getSettings.rect_ad).position ===
                            'tcp'
                    "
                >
                    <ad
                        v-if="!hasPermission('No ads')"
                        :ad_code="
                            parseAd($store.getters.getSettings.rect_ad).code
                        "
                        @click="
                            $store.getters.getSettings.ga4 &&
                            $store.getters.getSettings.analytics_adClick_event
                                ? emitAnalyticsEvent({
                                      action: 'ad_click',
                                      category: 'leaderboard_ad',
                                      label: 'top of content page'
                                  })
                                : ''
                        "
                    ></ad>
                </div>
            </template>
            <div id="main-content" v-if="page.sections">
                <template v-if="page.sections.length && contentLength">
                    <template v-for="section in page.sections">
                        <swiper-section
                            v-if="section.layout === 'section'"
                            :key="section.rank"
                            :section="section"
                            @contentLength="contentLength += $event"
                            @content="loading = false"
                        ></swiper-section>
                        <List
                            @contentLength="contentLength += $event"
                            v-else-if="section.layout === 'list'"
                            :section="section"
                            :key="section.rank"
                        />
                        <Featured
                            @contentLength="contentLength += $event"
                            v-else-if="section.layout === 'cards'"
                            :section="section"
                            :key="section.rank"
                        />
                    </template>
                </template>
                <template v-else>
                    <empty-page
                        :img="
                            $route.path === '/home'
                                ? null
                                : 'peep-68.png'
                        "
                        :natural-size="true"
                        :headline="$t('No Content!')"
                        :sub="$t('There is no content to be displayed.')"
                    ></empty-page>
                </template>
                <template v-if="$store.getters.getSettings.enableAds">
                    <div
                        class="ad-slot"
                        v-if="
                            parseAd($store.getters.getSettings.rect_ad)
                                .position === 'bcp'
                        "
                    >
                        <ad
                            v-if="!hasPermission('No ads')"
                            :ad_code="
                                parseAd($store.getters.getSettings.rect_ad).code
                            "
                            @click="
                                $store.getters.getSettings.ga4 &&
                                $store.getters.getSettings
                                    .analytics_adClick_event
                                    ? emitAnalyticsEvent({
                                          action: 'ad_click',
                                          category: 'leaderboard_ad',
                                          label: 'bottom of content page'
                                      })
                                    : ''
                            "
                        ></ad>
                    </div>
                </template>
            </div>
        </template>
    </div>
    <div id="page-404-container" v-else-if="page === '404'">
        <div class="content">
            <empty-page
                :headline="$t('Page Not Found')"
                img="peep-68.png"
            ></empty-page>
        </div>
    </div>
    <page-loading v-else />
</template>
<script>
import Featured from "../../elements/sections/layouts/Featured.vue";
export default {
    components: {
        Featured
    },
    metaInfo() {
        return {
            title: this.page ? this.page.title : document.title,
            meta: [
                {
                    name: "description",
                    content: this.page ? this.page.description : ""
                }
                // {
                //     property: 'og:url',
                //     content: 'https://www.youtube.com/watch?v=qKsRCu4cYsI'
                // },
                // {
                //     property: 'og:site_name',
                //     content: 'http://muzzie.com'
                // },
                // {
                //     property: 'og:description',
                //     content: 'some description here'
                // },
                // {
                //     property: 'og:image',
                //     content: 'https://mediadesknm.com/wp-content/uploads/2018/09/photographer-698908_960_720-864x576.jpg'
                // },
                // {
                //     property: 'og:image:width',
                //     content: '300'
                // },
                // {
                //     property: 'og:image:height',
                //     content: '300'
                // }
            ]
        };
    },
    data() {
        return {
            page: null,
            loading: true,
            contentLength: 0
        };
    },
    created() {
        if (this.$route.path === "/charts") {
            this.$router.push({ path: "/not-found" });
        } else {
            axios
                .get("/api/page?path=" + this.$route.path)
                .then(res => {
                    this.page = res.data;
                    if (this.page.sections) {
                        this.contentLength = this.page.sections.length;
                    }
                })
                .catch(() => (this.page = "404"));
        }
    },
    methods: {
        showShare() {
            window.open(
                "https://www.facebook.com/sharer/sharer.php?u=" +
                    window.location.href,
                "facebook-share-dialog",
                "width=800,height=600"
            );
            return false;
        }
    }
};
</script>
<style lang="scss" scoped>
@import "../../../../sass/player/pages/404-page";
@import "../../../../sass/variables";
.icon-header {
    transform: translateX(-10.5rem);

    .cover {
        background: rgb(234, 71, 95);
        border: 1px solid rgba(255, 255, 255, 0.5);
        box-shadow: 0 8px 24px rgba(234, 71, 95, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.45);
        -webkit-backdrop-filter: blur(12px) saturate(150%);
        backdrop-filter: blur(12px) saturate(150%);
    }
}

.home-page {
    .icon-header {
        width: calc(100% - 2rem);
        max-width: 1296px;
        margin: 0rem auto 2.8rem;
        padding-top: 2.5rem;
        transform: none;
    }

    .home-page__banner {
        width: calc(100% - 2rem);
        max-width: 1296px;
        aspect-ratio: 2.13 / 1;
        margin: 0 auto 2.5rem;
        border-radius: 20px;
        overflow: hidden;
        box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.45);

        img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    #main-content {
        width: calc(100% - 2rem);
        max-width: 1296px;
        margin: 0 auto;
    }
}

// .gradient {
//     height: 40vh;
//     background: linear-gradient(180deg, rgba(13,0,36,0.2805497198879552) 0%, rgba(179,122,218,0.5018382352941176) 47%, rgba(232,215,244,1) 92%, rgba(255,255,255,1) 100%);
//     position: absolute;
//     top: 0;
//     left: 0;
//     right: 0;
// }
</style>
