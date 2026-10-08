<template>
    <main
        @click="hideWindows"
        id="player-container"
        :class="[
            this.$vuetify.theme.dark ? 'player--dark' : 'player--light',
            { 'home-layout': $route.path === '/home' }
        ]"
    >
        <Sidebar :installButton="installButton"></Sidebar>
        <Navbar />
        <div class="player-container__content">
            <div id="player-container__content__main">
                <add-to-playlist
                    v-if="$store.getters.getAddSongToPlaylist"
                    @end="$store.commit('setAddSongToPlaylist', null)"
                ></add-to-playlist>
                <v-container fluid class="player-main-container full-heigth">
                    <router-view
                        :key="$store.getters.getCurrentPageId"
                    ></router-view>
                </v-container>
            </div>
        </div>
        <!--  Global dialogs -->
        <v-dialog v-model="$store.state.showSharingDialog" max-width="700px">
            <ShareDialog @close="$store.commit('hideSharingDialog')" />
        </v-dialog>
        <v-dialog
            v-model="$store.getters['purchase/getCheckoutDialog']"
            persistent
            max-width="800"
        >
            <checkout v-if="$store.getters['purchase/getCheckoutDialog']"></checkout>
        </v-dialog>
        <v-dialog max-width="700" v-model="PDialog" v-if="$store.getters['purchase/getSellingAsset']">
            <purchase-dialog
                :asset="$store.getters['purchase/getSellingAsset']"
            >
            </purchase-dialog>
        </v-dialog>
        <v-dialog max-width="350" max-height="300" v-model="$store.state.chooseLangDialog">
            <v-list class="panel-color">
                <v-list-item v-for="lang in $store.getters.getAvailableLanguages" :key="lang.id" @click="$store.dispatch('updateLang', lang)">
                    <div class="align-center">
                        <div class="img px-2 py-1">
                            <v-img
                                width="20"
                                height="100%"
                                :src="
                                    '/storage/defaults/icons/flags/' +
                                        lang.flag +
                                        '.svg'
                                "
                            ></v-img>
                        </div>
                        {{ lang.name }}
                    </div>
                </v-list-item>
            </v-list>
        </v-dialog>
    </main>
</template>
<script>
import Navbar from "./Navbar.vue";
import Sidebar from "./Sidebar.vue";
import addToPlaylist from "../../dialogs/Playlists";
import ShareDialog from "../../dialogs/Share";
export default {
    components: {
        Navbar,
        Sidebar,
        addToPlaylist,
        ShareDialog,
        Checkout: () => import("../../dialogs/selling/Checkout.vue"),
        PurchaseDialog: () => import("../../dialogs/selling/Purchase.vue")
    },
    created() {
        window.addEventListener(
            "resize",
            function() {
                this.$store.commit("setScreenWidth", window.innerWidth);
            }.bind(this)
        );
        if( this.$store.getters.getSettings.saas &&  this.$store.getters.getSettings.enable_subscription) {
            this.$store.dispatch("fetchPlans");
        }
        window.addEventListener('beforeinstallprompt', (e) => {
            // Stash the event so it can be triggered later.
            localStorage.setItem(deferredPrompt, e);
            // Update UI notify the user they can install the PWA
            this.installButton = true
        });

        window.addEventListener('appinstalled', () => {
            // Hide the app-provided install promotion
            this.installButton = false
            // Clear the deferredPrompt so it can be garbage collected
            localStorage.setItem(deferredPrompt, null);
        });



    },
    computed: {
        windowWidth() {
            return this.$store.getters.getScreenWidth;
        },
        PDialog: {
            get () {
                return this.$store.getters['purchase/getSellingAsset']
            },
            set (value) {
               this.$store.commit('purchase/setSellingAsset', value)
            }
        }
    },
    data() {
        return {
            installButton: false
        };
    },
    methods: {
        hideWindows() {
            this.$store.commit("setSongMenu", null);
            this.$store.commit("setSongContextMenu", null);
            this.$store.commit("setSearchResultsPanel", false);
        }
    }
};
</script>
<style lang="scss">
@import "../../../../sass/player/main.scss";
</style>
