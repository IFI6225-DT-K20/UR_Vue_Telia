<template>
    <div class="broadcast">
        <carousel :data="data" :controls="false" :indicators="true" :interval="3000" direction="right"></carousel>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                data: [
                    {
                        id: 1,
                        message: 'Rolling broadcast message',
                        content(createElement) {
                            return createElement('a', {
                                attrs: {
                                    href: '#',
                                },

                                class: 'broadcast-content',
                            }, [
                                createElement('img', {
                                    attrs: {
                                        src: "https://www.upload.ee/image/11516192/Screenshot_2.png",
                                    }
                                }),
                            ]);
                        },
                    },
                    {
                        id: 2,
                        message: 'Rolling broadcast message',
                        content(createElement) {
                            return createElement('a', {
                                attrs: {
                                    href: '#',
                                },

                                class: 'broadcast-content',
                            }, [
                                createElement('img', {
                                    attrs: {
                                        src: "https://www.upload.ee/image/11516086/Screenshot_1.png",
                                    }
                                }),
                            ]);
                        },
                    },
                ],
            };
        },
    };
</script>

<style scoped>
    .broadcast {
        border: 1px solid #eee;
        border-radius: 0.25rem;
        display: flex;
        padding: 0.5rem 0.75rem;
        margin: auto;
        width: 100%;
    }

    .broadcast > .carousel {
        flex: 1;
    }
    .broadcast > .carousel__indicator{
        background: red;
    }
</style>