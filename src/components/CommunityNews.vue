<template>
    <div id="communityNews">
        <div id="topNews">
            <div id="description">
                <h4 id="title">PANUSTAME ÜHISKONDA LÄBI TEHNOLOOGIA</h4>
                <a class="text">Toetame digitaalset arengut innovatsiooni, hariduse, mitmekesisuse, kaasatuse, keskkonna ning kultuurisündmuste kaudu ning maandame riske, et sinu internetikogemused oleksid alati turvalised.</a>
            </div>
        </div>
        <div id="news">
            <div id="leftNews">
                <div class="image">
                    <img alt="vesi" src="https://res.cloudinary.com/telia/image/upload/f_auto,fl_lossy,q_auto:best,w_180/era/csr-daring.png"/>
                </div>
                <div class="newsText">
                    <h3 class="newsTitle">Daring Goals</h3>
                    <a>Meie keskkonnaeesmärgid aastaks 2030. Vähendame CO2 emissiooni ja jäätmeid nullini, kaasates selleks kõiki töötajaid</a>
                </div>
            </div>
            <div id="rightNews">
                <div class="image">
                    <img alt="suurim julgus" src="https://res.cloudinary.com/telia/image/upload/f_auto,fl_lossy,q_auto:best,w_180/era/csr-suurimjulgus.png"/>
                </div>
                <div class="newsText">
                    <h3 class="newsTitle">Suurim julgus</h3>
                    <a>Julge võidelda küberkiusamise vastu!</a><br/>
                    <a id="boldText">#suurimjulgus</a>
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
    @media only screen and (max-width: 600px){
        #title{
            font-size: 22px;
            font-weight: 700;
        }
        #topNews{
            display: flex;
            padding-bottom: 7%;
            padding-top: 4%;
        }
        #description{
            width: 90%;
            float: left;
            color: white;
            text-align: left;
            font-size: 14px;
            margin-top: 20%;
            margin-left: 3%;
        }
        #leftNews{
            float: left;
            width: 100%;
            background: white;
            margin-right: 10px;
            display: flex;
            margin-bottom: 3%;
            border-radius: 1%;
        }
        #rightNews{
            float: right;
            width: 100%;
            background: white;
            margin-left: 10px;
            display: flex;
            border-radius: 1%;
        }
        #news{
            margin-left: 3%;
            margin-right: 3%;
        }
        .image{
            float: left;
        }
        .newsText{
            text-align: left;
            padding-left: 4%;
            padding-top: 4%
        }
        .newsTitle{
            font-size: 20px;
            color: black;
        }
        #boldText{
            font-weight: bolder;
        }
    }
    @media only screen and (min-width: 600px){
        #communityNews{
            z-index: 100;
        }
        #communityNews{
            margin: auto;
            width: 1180px;
        }
        #description{
            width: 50%;
            float: left;
            color: white;
            text-align: left;
            font-size: 16px;
        }
        #title{
            font-size: 32px;
            font-weight: 700;
        }
        #topNews{
            display: flex;
            padding-bottom: 7%;
            padding-top: 4%;
        }
        #leftNews{
            float: left;
            width: 49%;
            background: white;
            margin-right: 10px;
            display: flex;
        }
        #rightNews{
            float: right;
            width: 49%;
            background: white;
            margin-left: 10px;
            display: flex;
        }
        .image{
            float: left;
        }
        .newsText{
            text-align: left;
            padding-left: 4%;
            padding-top: 4%
        }
        #news{
            display: flex;
        }
        .newsTitle{
            font-size: 20px;
            color: black;
        }
        #boldText{
            font-weight: bolder;
        }
    }
</style>