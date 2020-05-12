<template>
    <div id="bottom_header">
        <div class="middle_bottom_header">
            <div id="logo">
                <img src="../assets/1200px-Telia_logo.svg.png" height="30">
            </div>
            <div class="dropdowns">
                <Mobiil></Mobiil>
            </div>
            <div class="dropdowns">
                <TV></TV>
            </div>
            <div class="dropdowns">
                <Internet></Internet>
            </div>
            <div class="dropdowns">
                <Lisateenused></Lisateenused>
            </div>
            <div class="dropdowns">
                <E_pood></E_pood>
            </div>
            <div class="dropdowns" id="offers">Pakkumised</div>
            <div class="dropdowns">
                <Abi></Abi>
            </div>
            <div class="dropdowns border_left">
                <Iseteenindus></Iseteenindus>
            </div>
        </div>
    </div>
</template>

<script>
    import Mobiil from "./dropdown/Mobiil";
    import TV from "./dropdown/TV";
    import Internet from "./dropdown/Internet";
    import Lisateenused from "./dropdown/Lisateenused";
    import E_pood from "./dropdown/E_pood";
    import Abi from "./dropdown/Abi";
    import Iseteenindus from "./dropdown/Iseteenindus";
    export default {
        name: "BottomHeader",
        components: {
            Mobiil,
            TV,
            Internet,
            Lisateenused,
            E_pood,
            Abi,
            Iseteenindus
        },
        data () {
            return {
                canBeShown: false
            }
        },
        methods: {
            show () {
                this.$modal.show('hello-world');
            },
            hide () {
                this.$modal.hide('hello-world');
            },
            beforeOpen (event) {
                console.log(event.params.foo);
            }
        }
    }
</script>

<style scoped>
    @media only screen and (max-width: 600px){
        #bottom_header{
            padding-top: 10px;
            width: 100%;
            text-align: left;
            z-index: 100;
        }
        .dropdowns{
            visibility: hidden;
            width: 0;
        }
    }
    @media only screen and (min-width: 600px){
        .middle_bottom_header{
            margin: auto;
            width: 100%;
            max-width: 1180px;
            height: 40px;
            display: flex;
        }
        #bottom_header{
            padding-top: 10px;
            width: 100%;
            text-align: left;
            z-index: 100;
        }
    }
    .border_left{
        border-left: 1px solid black;
    }
    #offers:hover{
        color: #990ae3;
        cursor: pointer;
    }
    #logo{
        float: left;
        padding-right: 40px;
        padding-top: 10px;
    }
    .dropdowns{
        display: inline-block;
        padding-bottom: 4%;
    }
</style>
