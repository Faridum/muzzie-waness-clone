<template>
    <div class="quotes-page">
        <div class="quotes-icon-header">
            <div class="quotes-cover" aria-hidden="true">
                <svg
                    class="quotes-cover__icon"
                    viewBox="0 0 56 56"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    :aria-label="$t('Quotes')"
                >
                    <path
                        d="M16.586 52.2461 C 17.7579 52.2461 18.5548 51.6367 19.9610 50.3711 L 28.0704 43.1758 L 43.0938 43.1758 C 50.0783 43.1758 53.8280 39.3086 53.8280 32.4414 L 53.8280 14.4883 C 53.8280 7.6211 50.0783 3.7539 43.0938 3.7539 L 12.9064 3.7539 C 5.9454 3.7539 2.1720 7.5976 2.1720 14.4883 L 2.1720 32.4414 C 2.1720 39.3320 5.9454 43.1758 12.9064 43.1758 L 14.0313 43.1758 L 14.0313 49.2695 C 14.0313 51.0742 14.9688 52.2461 16.5860 52.2461 Z M 17.5469 47.9570 L 17.5469 41.1602 C 17.5469 39.8945 17.0782 39.4023 15.7891 39.4023 L 12.9298 39.4023 C 8.1720 39.4023 5.9454 36.9883 5.9454 32.4180 L 5.9454 14.4883 C 5.9454 9.9180 8.1720 7.5273 12.9298 7.5273 L 43.0938 7.5273 C 47.8280 7.5273 50.0548 9.9180 50.0548 14.4883 L 50.0548 32.4180 C 50.0548 36.9883 47.8280 39.4023 43.0938 39.4023 L 27.9064 39.4023 C 26.6173 39.4023 25.9376 39.5898 25.0469 40.5039 Z M 17.2423 22.3633 C 17.2423 24.9414 18.8360 26.9336 21.4142 26.9336 C 22.3516 26.9336 23.2891 26.7695 23.8751 26.0430 L 24.0626 26.0430 C 23.2188 27.8945 21.5079 29.0898 20.0313 29.4649 C 19.1876 29.6992 18.9298 30.0742 18.9298 30.6133 C 18.9298 31.1992 19.3985 31.6445 20.0548 31.6445 C 22.3516 31.6445 26.9220 28.9258 26.9220 23.2071 C 26.9220 20.1367 24.9298 17.7695 22.0001 17.7695 C 19.2813 17.7695 17.2423 19.6680 17.2423 22.3633 Z M 29.4298 22.3633 C 29.4298 24.9414 31.0235 26.9336 33.6016 26.9336 C 34.5391 26.9336 35.4766 26.7695 36.0626 26.0430 L 36.2501 26.0430 C 35.4064 27.8945 33.6954 29.0898 32.2188 29.4649 C 31.3751 29.6992 31.1173 30.0742 31.1173 30.6133 C 31.1173 31.1992 31.5860 31.6445 32.2423 31.6445 C 34.5391 31.6445 39.1329 28.9258 39.1329 23.2071 C 39.1329 20.1367 37.1173 17.7695 34.1876 17.7695 C 31.4688 17.7695 29.4298 19.6680 29.4298 22.3633 Z"
                    />
                </svg>
            </div>
            <div class="quotes-title">
                <div class="quotes-headline">{{ $t('Quotes') }}</div>
            </div>
        </div>

        <section class="quotes-slider" :aria-label="$t('Quotes')">
            <div class="quotes-slider__frame">
                <transition name="quotes-slide-fade" mode="out-in">
                    <img
                        :key="currentSlide.src"
                        class="quotes-slider__image"
                        :src="currentSlide.src"
                        :alt="$t('Quotes') + ' ' + (currentIndex + 1)"
                    />
                </transition>

                <button class="quotes-slider__arrow quotes-slider__arrow--previous" type="button" :aria-label="$t('Previous')" @click="showPrevious">
                    <span aria-hidden="true">&#10094;</span>
                </button>
                <button class="quotes-slider__arrow quotes-slider__arrow--next" type="button" :aria-label="$t('Next')" @click="showNext">
                    <span aria-hidden="true">&#10095;</span>
                </button>

                <div class="quotes-slider__timeline" :aria-label="$t('Quotes')">
                    <button
                        v-for="(slide, index) in slides"
                        :key="slide.src"
                        type="button"
                        class="quotes-slider__segment"
                        :class="{ 'quotes-slider__segment--active': index === currentIndex }"
                        :aria-label="$t('Quotes') + ' ' + (index + 1)"
                        :aria-current="index === currentIndex ? 'true' : null"
                        @click="showSlide(index)"
                    ></button>
                </div>
            </div>
        </section>

        <div v-if="quotesLoading" class="quotes-state">
            <v-progress-circular indeterminate color="primary" />
        </div>
        <div v-else-if="!quotes.length" class="quotes-state">
            {{ $t('No Content!') }}
        </div>

        <section v-else class="quotes-cards" :aria-label="$t('Quotes')">
            <article
                v-for="quote in quotes"
                :key="quote.id"
                class="quotes-card"
            >
                <div class="quotes-card__cover">
                    <img :src="quote.cover" :alt="quote.author" loading="lazy" />
                </div>
                <div class="quotes-card__content">
                    <span class="quotes-card__mark" aria-hidden="true">“</span>
                    <p class="quotes-card__text">{{ quote.text }}</p>
                    <p class="quotes-card__author">{{ quote.author }}</p>
                    <span class="quotes-card__category">{{ quote.category }}</span>
                    <button
                        class="quotes-card__play"
                        type="button"
                        @click="playQuote(quote)"
                    >
                        <v-icon left>$vuetify.icons.play</v-icon>
                        {{ $t('Play') }}
                    </button>
                </div>
            </article>
        </section>
    </div>
</template>

<script>
export default {
    name: "Quotes",
    data() {
        return {
            currentIndex: 0,
            autoplayTimer: null,
            slides: [
                "1012428248waness-quotes-4-02.jpg",
                "1148303686waness-quotes-5-02.jpg",
                "1486679655w10.jpg",
                "2031855359waness-quotes-3-02.jpg",
                "55064247waness-quotes-6-02.jpg",
                "744894262w24.jpg",
                "83410540waness-quotes-7-02.jpg"
            ].map(filename => ({
                src: "/images/quotes/" + filename
            })),
            quotes: [],
            quotesLoading: true
        };
    },
    computed: {
        currentSlide() {
            return this.slides[this.currentIndex];
        }
    },
    mounted() {
        this.startAutoplay();
    },
    created() {
        this.fetchQuotes();
    },
    beforeDestroy() {
        window.clearInterval(this.autoplayTimer);
    },
    methods: {
        async fetchQuotes() {
            this.quotesLoading = true;
            try {
                const pageResponse = await axios.get(
                    "/api/page?path=" + encodeURIComponent("/quotes")
                );
                const sections = pageResponse.data.sections || [];
                const sectionResponses = await Promise.all(
                    sections.map(section =>
                        axios.get("/api/section/content/" + section.id)
                    )
                );
                const seen = {};
                this.quotes = sectionResponses
                    .reduce((songs, response) => {
                        const sectionSongs = Array.isArray(response.data)
                            ? response.data
                            : [];
                        return songs.concat(sectionSongs);
                    }, [])
                    .filter(song => {
                        if (
                            song.type !== "song" ||
                            !song.quote ||
                            seen[song.id]
                        ) {
                            return false;
                        }
                        seen[song.id] = true;
                        return true;
                    })
                    .map(song => {
                        const artists = Array.isArray(song.artists)
                            ? song.artists
                                  .map(artist => artist.displayname)
                                  .filter(Boolean)
                            : [];
                        const genres = Array.isArray(song.genres)
                            ? song.genres
                                  .map(genre => genre.name || genre.title)
                                  .filter(Boolean)
                            : [];
                        return {
                            id: song.id,
                            song: song,
                            text: song.quote,
                            cover: song.cover,
                            author:
                                artists.join("، ") ||
                                (song.artist && song.artist.displayname) ||
                                song.title,
                            category: genres.join("، ") || song.title
                        };
                    });
            } catch (error) {
                this.quotes = [];
            } finally {
                this.quotesLoading = false;
            }
        },
        playQuote(quote) {
            this.$store.dispatch("playSong", {
                song: quote.song,
                reset: true
            });
        },
        showSlide(index) {
            this.currentIndex = index;
        },
        startAutoplay() {
            window.clearInterval(this.autoplayTimer);
            this.autoplayTimer = window.setInterval(this.showNext, 5000);
        },
        showPrevious() {
            this.currentIndex =
                (this.currentIndex - 1 + this.slides.length) % this.slides.length;
        },
        showNext() {
            this.currentIndex = (this.currentIndex + 1) % this.slides.length;
        }
    }
};
</script>

<style scoped>
.quotes-page {
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 64px);
    padding-bottom: 7.5em;
}

.quotes-icon-header {
    display: flex;
    align-items: center;
    width: calc(100% - 2rem);
    max-width: 1296px;
    margin: 0 auto 2rem;
    padding-top: 2.5rem;
    color: #2b3467;
}

.quotes-cover {
    display: flex;
    flex: 0 0 4em;
    align-items: center;
    justify-content: center;
    width: 4em;
    height: 4em;
    margin-inline-end: 1em;
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 15px;
    background: rgba(234, 71, 95, 0.38);
    box-shadow: 0 8px 24px rgba(234, 71, 95, 0.2),
        inset 0 1px 0 rgba(255, 255, 255, 0.45);
    -webkit-backdrop-filter: blur(12px) saturate(150%);
    backdrop-filter: blur(12px) saturate(150%);
}

.quotes-cover__icon {
    width: 3em;
    height: 3em;
    fill: #2b3467;
    stroke: #fcffe7;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 0.7;
}

.quotes-headline {
    margin-bottom: 0.15em;
    font-size: 2em;
    line-height: 1.1;
}

.quotes-slider {
    width: calc(100% - 2rem);
    max-width: 1024px;
    margin: 0 auto 3rem;
}

.quotes-slider__frame {
    position: relative;
    max-width: 1024px;
    width: 100%;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background: transparent;
    
}

.quotes-slider__image {
    display: flex;
    width: 100%;
    height: 500px;
    max-width: 100%;
    object-fit: fill;
}

.quotes-slider__arrow {
    position: absolute;
    top: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 62px;
    border: 0;
    color: rgba(255, 255, 255, 0.55);
    background: rgba(255, 255, 255, 0.08);
    cursor: pointer;
    transform: translateY(-50%);
    transition: color 160ms ease, background-color 160ms ease;
    font-size: 2.25rem;
}

.quotes-slider__arrow:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.16);
}

.quotes-slider__arrow:focus-visible,
.quotes-slider__segment:focus-visible {
    outline: 2px solid #fcffe7;
    outline-offset: 3px;
}

.quotes-slider__arrow--previous {
    inset-inline-start: 5.5%;
}

.quotes-slider__arrow--next {
    inset-inline-end: 5.5%;
}

.quotes-slider__timeline {
    position: absolute;
    left: 50%;
    bottom: 3.5%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: min(320px, 60%);
    height: 15px;
    transform: translateX(-50%);
}

.quotes-slider__segment {
    position: relative;
    flex: 1 1 0;
    height: 3px;
    padding: 0;
    border: 0;
    border-radius: 0;
    background: rgba(255, 255, 255, 0.38);
    cursor: pointer;
}

.quotes-slider__segment + .quotes-slider__segment {
    margin-inline-start: 3px;
}

.quotes-slider__segment--active {
    background: #fff;
}

.quotes-slider__segment--active::after {
    position: absolute;
    top: -5px;
    left: 50%;
    width: 3px;
    height: 13px;
    background: #fff;
    content: "";
    transform: translateX(-50%);
}

.quotes-cards {
    display: flex;
    flex-direction: column;
    width: calc(100% - 2rem);
    max-width: 1296px;
    margin: 0 auto 4rem;
}

.quotes-state {
    display: flex;
    justify-content: center;
    width: calc(100% - 2rem);
    max-width: 1296px;
    margin: 2rem auto;
    color: #2b3467;
}

.quotes-card {
    display: flex;
    min-height: 200px;
    position: relative;
    border: 1px solid rgba(43, 52, 103, 0.06);
    border-radius: 12px;
    box-shadow: 0 4px 18px rgba(43, 52, 103, 0.035);
    margin-bottom: 0.5rem;
}

.quotes-card__cover {
    flex: 0 0 104px;
    width: 104px;
    height: 104px;
    align-self: flex-start;
    margin: 32px 24px;
    overflow: hidden;
    border: 3px solid #fff;
    border-radius: 50%;
    background: #f4f0df;
    box-shadow: 0 2px 10px rgba(43, 52, 103, 0.12);
}

.quotes-card__cover img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.quotes-card__content {
    position: relative;
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    align-items: flex-start;
    padding: 1.75rem 0.5rem 1.5rem;
    color: #2b3467;
    text-align: start;
}

.quotes-card__mark {
    position: absolute;
    top: -0.9rem;
    left: 1.5rem;
    color: #eb455f;
    font-family: Georgia, serif;
    font-size: 2.8rem;
    line-height: 1;
    pointer-events: none;
    
}

.quotes-card__text {
    z-index: 1;
    width: 100%;
    margin: 0 0 0.75rem;
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.8;
}

.quotes-card__author {
    margin: 0 0 0.2rem;
    color: #111;
    font-size: 1rem;
    font-weight: 700;
}

.quotes-card__category {
    margin-bottom: 0.55rem;
    color: #eb455f;
    font-size: 0.85rem;
}

.quotes-card__play {
    display: inline-flex;
    align-items: center;
    min-width: 120px;
    justify-content: center;
    border: 0;
    border-radius: 999px;
    padding: 0.5rem 1rem;
    color: #202020;
    background: #eb455f;
    font: inherit;
    box-shadow: 0 3px 8px rgba(43, 52, 103, 0.2);
}

.quotes-slide-fade-enter-active,
.quotes-slide-fade-leave-active {
    transition: opacity 220ms ease;
}

.quotes-slide-fade-enter,
.quotes-slide-fade-leave-to {
    opacity: 0;
}

@media (max-width: 600px) {
    .quotes-page {
        min-height: calc(100vh - 56px);
        padding-bottom: 5rem;
    }

    .quotes-icon-header {
        padding-top: 1.5rem;
    }

    .quotes-slider {
        max-width: 100%;
    }

    .quotes-slider__frame {
        height: min(500px, 65vh);
    }

    .quotes-slider__image {
        height: min(500px, 65vh);
    }

    .quotes-slider__arrow {
        width: 36px;
        height: 48px;
        font-size: 1.8rem;
    }

    .quotes-slider__timeline {
        bottom: 4%;
        width: min(250px, 60%);
    }

    .quotes-card {
        min-height: 190px;
    }

    .quotes-card__cover {
        flex: 0 0 72px;
        width: 72px;
        height: 72px;
        margin: 24px 12px;
    }

    .quotes-card__content {
        padding: 1.25rem 0.35rem;
    }

    .quotes-card__text {
        font-size: 0.92rem;
    }

    .quotes-card__mark {
        top: -0.7rem;
        left: 0.8rem;
        font-size: 2.3rem;
    }

    .quotes-card__play {
        min-width: 105px;
        padding: 0.4rem 0.75rem;
    }
}
</style>
