<template>
    <div @mouseover="onOver">
        <b-dropdown append-icon="" id="dropdown-grouped" ref="dropdown" text="Lisateenused" class="m-2 dropdown-era">
            <div class="dropdown-column">
                <div class="dropdown-group-1">
                    <p class="dropdown-header">MEELELAHUTUS</p>
                    <router-link class="nav-link dropdown-text" to="/era/mobiil/mobiilne-elu/" onclick="location.href='#/era';">Spotify muusikateenus</router-link>
                    <router-link class="nav-link dropdown-text" to="/era/mobiil/mobiilne-elu/" onclick="location.href='#/era';">Ajalehed ja ajakirjad <BlackButton context="PAKKUMINE"></BlackButton></router-link>
                </div>
                <div class="dropdown-group-3">
                    <p class="dropdown-header">SEADMETE OST</p>
                    <router-link class="nav-link dropdown-text" to="/era/mobiil/mobiilne-elu/" onclick="location.href='#/era';">Järelmaks</router-link>
                    <router-link class="nav-link dropdown-text" to="/era/mobiil/mobiilne-elu/" onclick="location.href='#/era';">Vana uueks <BlackButton context="UUS"></BlackButton></router-link>
                </div>
            </div>
            <div class="dropdown-group-1">
                <p class="dropdown-header">TURVALISUS JA KINDLUSTUS</p>
                <router-link class="nav-link dropdown-text" to="/era/mobiil/mobiilne-elu/" onclick="location.href='#/era';">Viirusetõrje <BlackButton context="PAKKUMINE"></BlackButton></router-link>
                <router-link class="nav-link dropdown-text" to="/era/mobiil/mobiilne-elu/" onclick="location.href='#/era';">Seadmekindlustus <BlackButton context="PAKKUMINE"></BlackButton></router-link>
                <router-link class="nav-link dropdown-text" to="/era/mobiil/mobiilne-elu/" onclick="location.href='#/era';">Sõiduki e-kindlustus</router-link>
                <router-link class="nav-link dropdown-text" to="/era/mobiil/mobiilne-elu/" onclick="location.href='#/era';">Reisikindlustus</router-link>
            </div>
            <div class="dropdown-group-1">
                <p class="dropdown-header">MAKSED MOBIILIGA</p>
                <router-link class="nav-link dropdown-text" to="/era/mobiil/mobiilne-elu/" onclick="location.href='#/era';">mTasku rakendus</router-link>
                <router-link class="nav-link dropdown-text" to="/era/mobiil/mobiilne-elu/" onclick="location.href='#/era';">Apple App Store maksed</router-link>
                <router-link class="nav-link dropdown-text" to="/era/mobiil/mobiilne-elu/" onclick="location.href='#/era';">Google Play maksed</router-link>
                <router-link class="nav-link dropdown-text" to="/era/mobiil/mobiilne-elu/" onclick="location.href='#/era';">Mobiilne parkimine</router-link>
                <router-link class="nav-link dropdown-text" to="/era/mobiil/mobiilne-elu/" onclick="location.href='#/era';">Mobiilimaksed</router-link>
                <router-link class="nav-link dropdown-text" to="/era/mobiil/mobiilne-elu/" onclick="location.href='#/era';">Era-arve</router-link>
            </div>
            <div class="dropdown-group-1">
                <p class="dropdown-header">MUU</p>
                <router-link class="nav-link dropdown-text" to="/era/mobiil/mobiilne-elu/" onclick="location.href='#/era';">Mobiil-ID</router-link>
                <router-link class="nav-link dropdown-text" to="/era/mobiil/mobiilne-elu/" onclick="location.href='#/era';">Minu Telia rakendus</router-link>
                <router-link class="nav-link dropdown-text" to="/era/mobiil/mobiilne-elu/" onclick="location.href='#/era';">Lauatelefon</router-link>
                <router-link class="nav-link dropdown-text" to="/era/mobiil/mobiilne-elu/" onclick="location.href='#/era';">Mobiili lisateenused</router-link>
                <router-link class="nav-link dropdown-text" to="/era/mobiil/mobiilne-elu/" onclick="location.href='#/era';">TV lisateenused</router-link>
            </div>
            <div class="dropdown-group-2">
                <p class="dropdown-header">Minu teenused</p>
                <router-link class="nav-link dropdown-text" to="/era/1" onclick="location.href='#/era';">Lisateenused</router-link>
                <router-link class="nav-link dropdown-text" to="/era/1" onclick="location.href='#/era';">Mobiili lisateenused</router-link>
                <router-link class="nav-link dropdown-text" to="/era/1" onclick="location.href='#/era';">TV lisateenused</router-link>
                <router-link class="nav-link dropdown-text" to="/abi/guides?q=mobiil" onclick="location.href='#/era';">Juhendid ja KKK <BlackButton context="UUS"></BlackButton></router-link>
            </div>
            <!-- ToDo 2 extra columns below -->
        </b-dropdown>
    </div>
</template>

<script>
    import BlackButton from "./status/BlackButton";
    export default {
        name: "Lisateenused",
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
    .dropdown-group-3{
        float:left;
        width: 200px;
        padding-right: 50px;
        padding-left: 20px;
    }
    .dropdown-column{
        float: left;
        max-width: 200px;
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