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
                        message: '',
                        content(createElement) {
                            return createElement('div', {
                                attrs: {
                                    href: '#',
                                },

                                class: 'broadcast-content',
                            }, [
                                createElement('div', {
                                    attrs: {
                                        id: "rightSlider"
                                    }
                                },[
                                    createElement('img', {
                                        attrs: {
                                            src: "https://www.upload.ee/image/11568284/Screenshot_1.png",
                                            id: "sliderImage"
                                        }
                                    })
                                ]),
                                createElement('div', {
                                    attrs: {
                                        id: "leftSlider",
                                        class: "leftSlider"
                                    }
                                },[
                                    createElement('div', {
                                        attrs: {
                                            class: "sliderTitle"
                                        }
                                    },[
                                        createElement('a', {
                                            attrs: {
                                                id: "sliderTitle"
                                            }
                                        }, "KUU AEGA SPORTI VÕI KINO HINNAGA ALATES 1€-ST"),
                                    ]),
                                    createElement('div', {
                                        attrs: {
                                            class: "sliderText"
                                        }
                                    },[
                                        createElement('a', {
                                            attrs: {
                                                id: "sliderText"
                                            }
                                        }, "Aprillis saad TV3 filmi- ja spordikanaleid proovida kuu aega soodushinnaga.")
                                    ]),
                                    createElement('div', {
                                        attrs: {
                                            class: "sliderButton"
                                        }
                                    },[
                                        createElement('a', {
                                            attrs: {
                                                id: "sliderButton"
                                            }
                                        }, "VAATAN LÄHEMALT >")
                                    ])
                                ]),
                            ]);
                        },
                    },
                    {
                        id: 2,
                        message: 'Rolling broadcast message',
                        content(createElement) {
                            return createElement('div', {
                                attrs: {
                                    href: '#',
                                    id: "slider"
                                },

                                class: 'broadcast-content',
                            }, [
                                createElement('div', {
                                    attrs: {
                                        id: "rightSlider"
                                    }
                                },[
                                    createElement('img', {
                                        attrs: {
                                            src: "https://www.upload.ee/image/11568288/Screenshot_2.png",
                                            id: "sliderImage"
                                        }
                                    })
                                ]),
                                createElement('div', {
                                    attrs: {
                                        id: "leftSlider",
                                        class: "leftSlider"
                                    }
                                },[
                                    createElement('div', {
                                        attrs: {
                                            class: "sliderTitle"
                                        }
                                    },[
                                        createElement('a', {
                                            attrs: {
                                                id: "sliderTitle"
                                            }
                                        }, "HOIAME ÜHENDUST KA KEERULISTEL AEGADEL"),
                                    ]),
                                    createElement('div', {
                                        attrs: {
                                            class: "sliderText"
                                        }
                                    },[
                                        createElement('a', {
                                            attrs: {
                                                id: "sliderText"
                                            }
                                        }, "Jälgi pidevalt uuenevat infot ja planeeri muutunud olukorras oma tegemisi mõistlikud!")
                                    ]),
                                    createElement('div', {
                                        attrs: {
                                            class: "sliderButton"
                                        }
                                    },[
                                        createElement('a', {
                                            attrs: {
                                                id: "sliderButton"
                                            }
                                        }, "VAATAN LÄHEMALT >")
                                    ])
                                ]),
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
        .broadcast {
            border: 1px solid #eee;
            border-radius: 0.25rem;
            display: flex;
            margin: auto auto 5%;
            max-width: 100%;
            float: right;
            min-height: 500px;
        }
        .broadcast > .carousel {
            flex: 1;
        }
    }
    @media only screen and (min-width: 1200px){
        .broadcast {
            border: 1px solid #eee;
            border-radius: 0.25rem;
            display: flex;
            padding: 0.5rem 0.75rem;
            margin: auto;
            max-width: 80%;
            float: right;
            min-height: 1000px;
        }
        .broadcast > .carousel {
            flex: 1;
        }
    }
    @media only screen and (max-width: 1200px) and (min-width: 600px){
        .broadcast {
            border: 1px solid #eee;
            border-radius: 0.25rem;
            display: flex;
            margin: auto auto 5%;
            max-width: 100%;
            float: right;
            min-height: 850px;
        }
    }
</style>