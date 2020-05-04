<template>
    <div id="communityNews">
        <div id="topNews">
            <div id="description">
                <h4 id="title">PANUSTAME ÜHISKONDA KÄBI TEHNOLOOGIA</h4>
                <a class="text">Toetame digitaalset arengut innovatsiooni, hariduse, mitmekesisuse, kaasatuse, keskkonna ning kultuurisündmuste kaudu ning maandame riske, et sinu internetikogemused oleksid alati turvalised.</a>
            </div>
        </div>
        <div id="news">
            <div id="leftNews">
                <div class="image">
                    <img alt="vesi" src="https://res.cloudinary.com/telia/image/upload/f_auto,fl_lossy,q_auto:best,w_180/era/csr-daring.png"/>
                </div>
                <div class="newsText">
                    <h3>Daring Goals</h3>
                    <a>Meie keskkonnaeesmärgid aastaks 2030. Vähendame CO2 emissiooni ja jäätmeid nullini, kaasates selleks kõiki töötajaid</a>
                </div>
            </div>
            <div id="rightNews">
                <div class="image">
                    <img alt="suurim julgus" src="https://res.cloudinary.com/telia/image/upload/f_auto,fl_lossy,q_auto:best,w_180/era/csr-suurimjulgus.png"/>
                </div>
                <div class="newsText">
                    <h3>Suurim julgus</h3>
                    <p>Julge võidelda küberkiusamise vastu!</p>
                    <a>#suurimjulgus</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CommunityNews"
    }
</script>

<style scoped>
    #communityNews{
        z-index: 100;
    }
    #communityNews{
        margin: auto;
        width: 1100px;
    }
    #description{
        width: 50%;
        float: left;
        color: white;
        text-align: left;
    }
    #title{
    }
    #topNews{
        display: flex;
        padding-bottom: 10%;
    }
    #leftNews{
        float: left;
        width: 48%;
        background: white;
    }
    #rightNews{
        float: right;
        width: 48%;
        background: white;
    }
    .image{
        float: left;
    }
    .newsText{
        text-align: left;
        left: 25%;
    }
</style>