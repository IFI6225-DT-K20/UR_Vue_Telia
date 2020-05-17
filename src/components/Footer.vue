<template>
    <div id="footer">
        <div class="footerMenu">
            <div class="title">
                Ettevõttest
            </div>
            <div class="content">
                <h6 class="contetText">Ettevõttest</h6>
                <h6 class="contetText">Telia Ühiskonnas</h6>
                <h6 class="contetText">Karjäär Telias</h6>
                <h6 class="contetText">Hinnakiri</h6>
                <h6 class="contetText">Lepingud ja tingimused</h6>
                <h6 class="contetText">Privaatsusteade</h6>
            </div>
        </div>
        <div class="footerMenu">
            <div class="title">Kontaktid</div>
            <div class="content">
                <h6 class="contetText">Kontaktid</h6>
                <h6 class="contetText">Esindused</h6>
            </div>
        </div>
        <div class="footerMenu">
            <div class="title">
                Partnerile
            </div>
            <div class="content">
                <h6 class="contetText">Sideettevõtjale</h6>
                <h6 class="contetText">Ehitajale, arendajale</h6>
                <h6 class="contetText">Tarnijale</h6>
                <h6 class="contetText">Reklaam</h6>
            </div>
        </div>
        <div class="footerMenu">
            <div class="title">
                Sotsiaalmeedia
            </div>
            <div class="content">
                <div id="leftContent">
                    <img class="socialImage" src="../assets/d.png" alt="Digitark"/><h6 class="socialText">Digitark</h6>
                    <img class="socialImage" src="../assets/f.png" alt="Facebook"/><h6 class="socialText">Facebook</h6>
                </div>
                <div id="rightContent">
                    <img class="socialImage" src="../assets/ins.png" alt="Instagram"/><h6 class="socialText">Instagram</h6>
                    <img class="socialImage" src="../assets/in.png" alt="LinkedIn"/><h6 class="socialText">LinkedIn</h6>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>
    @media only screen and (max-width: 600px){
        #footer{
            display: flex;
            width: 100%;
            margin: 5% auto auto;
        }
    }
    @media only screen and (max-width: 1200px) and (min-width: 600px){
        #footer{
            display: flex;
            width: 100%;
            margin: 5% auto auto;
        }
    }
    @media only screen and (min-width: 1200px){
        #footer{
            display: flex;
            width: 1180px;
            margin: 5% auto auto;
        }
    }
    .footerMenu{
        width: 25%;
        text-align: left;
    }
    .title{
        font-size: 20px;
        margin-bottom: 3%;
        color: black;
    }
    .contetText{
        line-height: 1.0;
        font-size: 11px;
        color: black;
    }
    .socialImage{
        float: left;
        margin-right: 5%;
    }
    #leftContent{
        width: 50%;
        float: left;
    }
    #rightContent{
        width: 50%;
        float: right;
    }
    .socialText{
        font-size: 11px;

    }
</style>