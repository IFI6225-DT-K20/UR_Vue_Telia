<template>
    <div class="broadcast">
        <carousel :data="data" :controls="false" :indicators="false" :interval="3000" direction="right"></carousel>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                data: [
                    {
                        id: 1,
                        message: '',
                        content(createElement) {
                            return createElement('div', {
                                attrs: {
                                    href: '#',
                                },

                                class: 'broadcast-content',
                            }, [
                                    createElement('img', {
                                        attrs: {
                                            src: "https://www.upload.ee/image/11596953/tvOffer.png",
                                            id: "offerImage"
                                        }
                                    })
                                ])
                        },
                    },
                    {
                        id: 2,
                        message: '',
                        content(createElement) {
                            return createElement('div', {
                                attrs: {
                                    href: '#',
                                },

                                class: 'broadcast-content',
                            }, [
                                createElement('img', {
                                    attrs: {
                                        src: "https://www.upload.ee/image/11596950/phoneOffer.png",
                                        id: "offerImage"
                                    }
                                })
                            ])
                        },
                    },
                ],
            };
        },
    };
</script>

<style scoped>
    @media only screen and (max-width: 600px){
        .broadcast {
            border: 1px solid #eee;
            border-radius: 0.25rem;
            display: flex;
            padding: 0.5rem 0.75rem;
            margin: auto;
            width: 100%;
            float: right;
        }
        .broadcast > .carousel {
            flex: 1;
        }
        .broadcast > .carousel__indicator{
            background: red;
        }
    }
    @media only screen and (min-width: 600px){
        .broadcast {
            border: 1px solid #eee;
            border-radius: 0.25rem;
            display: flex;
            padding: 0.5rem 0.75rem;
            margin: auto;
            max-width: 100%;
            float: right;
        }
        .broadcast > .carousel {
            flex: 1;
        }
        .broadcast > .carousel__indicator{
            background: red;
        }
    }
</style>