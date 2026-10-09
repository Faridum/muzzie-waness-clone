<template>
    <div class="podcast-genres-wrapper">
        <div
            @click="
                $router.push({
                    name: 'podcasts.genre',
                    params: { genre_slug: genre.slug, genre_id: genre.id }
                })
            "
            class="podcast-genre"
            v-for="genre in genres"
            :key="genre.id"
        >
            <div class="cover"></div>
            <div class="name">
                {{ $t(genre.name) }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["genres"]
};
</script>
<style lang="scss" scoped>
.podcast-genres-wrapper {
    display: flex;
    direction: rtl;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 100%;
    max-width: 1210px;
    margin-inline: auto;
    margin-top: 4rem;
    column-gap: 9px;
    row-gap: 56px;

    .podcast-genre {
        cursor: pointer;
        flex: 0 0 calc((100% - 36px) / 5);
        padding: 0;
        position: relative;

        .name {
            position: absolute;
            color: white;
            font-size: clamp(1.1rem, 1.55vw, 1.8rem);
            font-weight: 700;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            white-space: nowrap;
        }

        .cover {
            width: 100%;
            aspect-ratio: 2.5 / 1;
            border-radius: 12px;
            background: linear-gradient(110deg, #ff9418, #ffef4b);
        }

        &:nth-child(8n + 2) .cover {
            background: linear-gradient(110deg, #ff9418, #10d9e6);
        }

        &:nth-child(8n + 3) .cover {
            background: linear-gradient(110deg, #f0d8a7, #53e8ec);
        }

        &:nth-child(8n + 4) .cover {
            background: linear-gradient(110deg, #f3dda6, #f33778);
        }

        &:nth-child(8n + 5) .cover {
            background: linear-gradient(110deg, #00ed9a, #51e7f0);
        }

        &:nth-child(8n + 6) .cover {
            background: linear-gradient(110deg, #e48bd8, #5367f7);
        }

        &:nth-child(8n + 7) .cover {
            background: linear-gradient(110deg, #f03378, #00ed9a);
        }

        &:nth-child(8n + 8) .cover {
            background: linear-gradient(110deg, #ed3580, #09d9e9);
        }
    }

    @media screen and (max-width: 900px) {
        margin-top: 3rem;
        column-gap: 12px;
        row-gap: 24px;

        .podcast-genre {
            flex-basis: calc((100% - 24px) / 3);
        }
    }

    @media screen and (max-width: 600px) {
        margin-top: 2rem;

        .podcast-genre {
            flex-basis: calc((100% - 12px) / 2);

            .name {
                font-size: clamp(1rem, 4vw, 1.4rem);
            }
        }
    }
}
</style>
