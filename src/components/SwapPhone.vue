<template>
    <div id="swapPhone">
        <div id="rightSwap">
            <img id="swapPhoneImage" alt="swapPhone" src="../assets/swapPhone.png"/>
        </div>
        <div id="leftSwap">
            <div id="titleLeft">VAHETA VANA SEADE UUE VASTU</div>
            <a class="text">Ostame sinu vana nutitelefoni tagasi kontaktivabalt ning anname koheselt soodustuse uue seadme ostuks.</a>
            <a class="text">Hoolime keskkonnast!</a>
            <div id="swapButton">
                <a class="sliderButton">VAATAN LÄHEMALT ></a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SwapPhone"
    }
</script>

<style scoped>
    @media only screen and (max-width: 600px){
        #swapPhoneImage{
            width: 100%;
            vertical-align: middle;
        }
        #rightSwap{
            margin: auto;
            width: 50%;
        }
        #swapButton{
            margin-top: 5%;
        }
        #swapPhone{
            padding-top: 10%;
        }
    }
    @media only screen and (min-width: 600px){
        .sliderButton{
            margin-top: 15%;
            padding: 15px 22px;
        }
        .sliderButton:hover{
            padding: 15px 22px;
        }
        #titleLeft{
            margin-top: 10%;
            font-size: 32px;
            text-align: left;
            line-height: normal;
        }
        .text{
            text-align: left;
            margin-top: 5%;
            float: left;
            font-size: 13px;
        }
        #leftSwap{
            width: 46%;
            float: left;
        }
        #rightSwap{
            width: 55%;
            float: right;
        }
        #swapPhoneImage{
            width: 100%;
        }
        #swapPhone{
            width: 55%;
            float: right;
            display: flex;
            padding-left: 10%;
        }
    }
</style>