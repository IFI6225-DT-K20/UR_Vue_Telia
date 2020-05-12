<template>
    <div @mouseover="onOver" @mouseleave="onLeave">
        <b-dropdown append-icon="" id="dropdown-grouped" ref="dropdown" text="Mobiil" class="m-2 dropdown-era">
            <div class="dropdown-group-1">
                <p class="dropdown-header">INTERNET JA KÕNED</p>
                <router-link class="nav-link dropdown-text" to="/era/mobiil/mobiilne-elu/" onclick="location.href='#/era';">Paketid <BlackButton context="PAKKUMINE"></BlackButton></router-link>
                <router-link class="nav-link dropdown-text" to="/era/mobiil/lisateenused/" onclick="location.href='#/era';">Mobiili lisateenused</router-link>
                <router-link class="nav-link dropdown-text" to="/era/mobiil/konekaardid" onclick="location.href='#/era';">Kõnekaardid ja internetikaart</router-link>
            </div>
            <div class="dropdown-group-1">
                <p class="dropdown-header">VÄLISMAA</p>
                <router-link class="nav-link dropdown-text" to="/era/mobiil/valismaa/internet-ja-koned-valismaal/" onclick="location.href='#/era';">Internet ja kõned välismaal</router-link>
                <router-link class="nav-link dropdown-text" to="/era/mobiil/lisateenused/" onclick="location.href='#/era';">Lisateenused välismaal</router-link>
                <router-link class="nav-link dropdown-text" to="/era/mobiil/valismaa/eestist-helistamine-valismaale/" onclick="location.href='#/era';">Eestist välismaale helistamine</router-link>
            </div>
            <div class="dropdown-group-1">
                <p class="dropdown-header">MUU</p>
                <router-link class="nav-link dropdown-text" to="/nutitelefonid" onclick="location.href='#/era';">Nutitelefonid e-poes</router-link>
                <router-link class="nav-link dropdown-text" to="/era/mobiil/leviala" onclick="location.href='#/era';">Leviala</router-link>
                <router-link class="nav-link dropdown-text" to="/era/lisateenused/mobiil-id/" onclick="location.href='#/era';">Mobiil-ID</router-link>
            </div>
            <div class="dropdown-group-2">
                <p class="dropdown-header">MINU TEENUSED</p>
                <router-link class="nav-link dropdown-text" to="/era/1" onclick="location.href='#/era';">Mobiilsed teenused</router-link>
                <router-link class="nav-link dropdown-text" to="/era/1" onclick="location.href='#/era';">Teenuse seadmete haldus</router-link>
                <router-link class="nav-link dropdown-text" to="/abi/guides?q=mobiil" onclick="location.href='#/era';">Juhendid ja KKK <BlackButton context="UUS"></BlackButton></router-link>
            </div>
            <!-- ToDo 2 extra columns below -->
        </b-dropdown>
    </div>
</template>

<script>
    import BlackButton from "./status/BlackButton";
    export default {
        name: "Mobiil",
        components: {
            BlackButton
        },
        methods: {
            onOver() {
                this.$refs.dropdown.visible = true;
            },
            onLeave() {
                this.$refs.dropdown.visible = false;
            }
        }
    }
</script>

<style scoped>
    .dropdown-group-1{
        width: 250px;
        float: left;
        padding-right: 50px;
        padding-left: 20px;
    }
    .dropdown-group-2{
        float:left;
        width: 200px;
    }
    .dropdown-header{
        font-weight: bold;
        font-size: 18px;
        min-width: 150px;
        max-width: 200px;
    }
    .dropdown-text{
        color: black;
        font-weight: normal;
    }
    .nav-link{
        padding-bottom: 10px;
        height: 25px;
    }
</style>