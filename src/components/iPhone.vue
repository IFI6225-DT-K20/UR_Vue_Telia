<template>
    <div id="iPhone">
        <div id="leftiPhone">
            <img id="logo" alt="iphone" src="https://res.cloudinary.com/telia/image/upload/pood/iphone/iphone-se.svg"/>
            <div id="textiPhone">iPhone'i kauaoodatud uus mudel - võimas, kompaktne ning taskukohase hinnaga!</div>
            <a id="preOrder">EELTELLIN ></a>
        </div>
        <div id="rightiPhone">
            <img style="width: 100%" alt="iphone" src="https://res.cloudinary.com/telia/image/upload/c_crop,w_600,h_780,x_550,q_auto:best,f_auto,fl_lossy/pood/iphone/telia-product-small-desktop-et_2x.png"/>

        </div>
    </div>
</template>

<script>
    export default {
        name: "iPhone"
    }
</script>

<style scoped>
    #leftiPhone{
        width: 45%;
        float: left;
    }
    #rightiPhone{
        width: 55%;
        float: right;
    }
    #iPhone{
        float: left;
        width: 45%;
    }
    #logo{
        width: 90%;
        margin-top: 35%;
        margin-bottom: 10%;
    }
    #textiPhone{
        font-size: 16px;
        margin-bottom: 20%;
        font-weight: 400;
    }
    #preOrder{
        color: gray;
        border: 1px solid gray;
        font-weight: 600;
        padding: 12px 35px;
        font-size: 12px;
        border-radius: 30px;
    }
</style>