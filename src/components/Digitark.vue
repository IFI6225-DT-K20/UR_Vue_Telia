<template>
    <div id="digitark">
        <div id="digitarkTop">
            <div id="leftDigitark">
                <img id="image1" alt="" src="https://res.cloudinary.com/telia/image/upload/tweb/digitark/digitark-logo.svg">
                <div id="leftText">
                    Digitark on Eesti populaarseim tehnoloogiablogi, mis kirjutab uutest seadmetest ja põnevatest lahendustest ning jagab digimaailmaga seotud nõuandeid ja soovitusi.
                </div>
                <div class="digitarkBot">
                    <Post url="left1" date="5. mai 2020" title="Telia liikuvusanalüüs: mai algus tõi inimesed linnast maale"/>
                    <Post url="left2" date="4. mai 2020" title="Spotify kasutajad kuulavad koroonapandeemia ajal rahulikumat muusikat"/>
                </div>
            </div>
            <div id="rightDigitark">
                <img id="image2" alt="" src="https://res.cloudinary.com/telia/image/upload/era/avaleht/digitarga-saade.svg">
                <img id="image3" alt="" src="https://res.cloudinary.com/telia/image/upload//f_auto,fl_lossy,q_auto:best,w_200/era/avaleht/separator-img-digitark.png">
                <div id="rightText">
                    Digitargal saates käsitlevad valdkonna eksperdid erinevaid tehnoloogiaga seotud teemasid.
                </div>
                <div class="digitarkBot">
                    <Post url="right1" date="21. aprill 2020" title="Digitarga SAADE: Samsung S20, Z Flip ning andmete kopeerimine vanast telefonist uude"/>
                    <Post url="right2" date="17. aprill 2020" title="Digitarga SAADE: Magnus Heinmets jagab kogemusi loodusfotograafia vallas"/>
                </div>
            </div>
        </div>
        <div id="checkButton">
            <a class="newsButton">VAATAN DIGITARKA ></a>
        </div>
    </div>
</template>

<script>
    import Post from "./Post";
    export default {
        name: "Digitark",
        components: {Post}
    }
</script>

<style scoped>
    @media only screen and (max-width: 600px){
        #image1{
            width: 240px;
        }
        #digitark{
            width: 100%;
            margin: 7% auto auto;
            display: inline-grid;
        }
        #digitarkTop{
            text-align: left;
        }
        .digitarkBot{
            margin-top: 3%;
            text-align: left;
        }
        #leftText{
            margin-top: 3%;
            font-size: 16px;
        }
    }
    @media only screen and (min-width: 600px){
        #leftText{
            margin-top: 3%;
            font-size: 16px;
        }
        #rightText{
            margin-top: 3%;
            font-size: 16px;
        }
        #digitark{
            width: 1180px;
            margin: 7% auto auto;
            display: inline-grid;
        }
        #digitarkTop{
            text-align: left;
        }
        .digitarkBot{
            margin-top: 3%;
            text-align: left;
        }
        #leftDigitark{
            width: 49%;
            float: left;
        }
        #rightDigitark{
            width: 49%;
            float: right;
        }
        #image1{
            width: 220px;
        }
        #image2{
            width: 200px;
        }
        #image3{
            width: 180px;
            margin-top: -10%;
            float: right;
        }
    }
</style>