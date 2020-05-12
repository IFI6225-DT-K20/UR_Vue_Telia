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
                                createElement('h6', {
                                    attrs: {
                                        id: "offerText",
                                        class: "offerText"
                                    }
                                },"Teliast saad kodused õppe- ja töövahendid 0% intressiga"),
                                createElement('h6', {
                                    attrs: {
                                        id: "offerName",
                                        class: "offerName"
                                    }
                                },'55" LED-teler Samsung RU7172'),
                                createElement('a', {
                                    attrs: {
                                        id: "offerPriceMonth",
                                        class: "offerPriceMonth"
                                    }
                                },'9,15'),
                                createElement('a', {
                                    attrs: {
                                        id: "offerPriceMonthText",
                                        class: "offerPriceMonthText"
                                    }
                                },'€/kuu'),
                                createElement('h6', {
                                    attrs: {
                                        id: "offerPrice",
                                        class: "offerPrice"
                                    }
                                },'Soodushind 439€'),
                            ]);
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
                                createElement('h6', {
                                    attrs: {
                                        id: "offerText",
                                        class: "offerText"
                                    }
                                },"Teliast saad kodused õppe- ja töövahendid 0% intressiga"),
                                createElement('h6', {
                                    attrs: {
                                        id: "offerName",
                                        class: "offerName"
                                    }
                                },'Samsung Galaxy A51'),
                                createElement('a', {
                                    attrs: {
                                        id: "offerPriceMonth",
                                        class: "offerPriceMonth"
                                    }
                                },'7,06'),
                                createElement('a', {
                                    attrs: {
                                        id: "offerPriceMonthText",
                                        class: "offerPriceMonthText"
                                    }
                                },'€/kuu'),
                                createElement('h6', {
                                    attrs: {
                                        id: "offerPrice",
                                        class: "offerPrice"
                                    }
                                },'Soodushind 339€'),
                            ]);
                        },
                    },
                ],
            };
        },
    };
</script>

<style scoped>
    @media only screen and (max-width: 600px){

    }
    @media only screen and (min-width: 600px){
        .broadcast {
            border: 1px solid #eee;
            border-radius: 0.25rem;
            display: flex;
            margin: auto;
            float: left;
            width: 100%;
        }
    }
</style>