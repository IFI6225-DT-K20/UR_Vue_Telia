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
            <div class="title">
                Kontaktid
            </div>
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
                <h6>Digitark</h6>
                <h6>Facebook</h6>
                <h6>Instagram</h6>
                <h6>LinkedIn</h6>
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
    #footer{
        display: flex;
        width: 1180px;
        margin: 5% auto auto;
    }
    .footerMenu{
        width: 25%;
        text-align: left;
    }
    .title{
        font-size: 22px;
        margin-bottom: 3%;
    }
    .contetText{
        line-height: 2.5;
        font-size: 11px;
    }
</style>