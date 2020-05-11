<template>
    <div @mouseover="onOver">
        <b-dropdown append-icon="" id="dropdown-grouped" ref="dropdown" text="Lisateenused" class="m-2 dropdown-era">
            <div class="dropdown-column">
                <div class="dropdown-group-1">
                    <p class="dropdown-header">MEELELAHUTUS</p>
                    <router-link class="nav-link dropdown-text" to="/era/mobiil/mobiilne-elu/">Spotify muusikateenus</router-link>
                    <router-link class="nav-link dropdown-text" to="/era/mobiil/mobiilne-elu/">Ajalehed ja ajakirjad</router-link>
                </div>
                <div class="dropdown-group-3">
                    <p class="dropdown-header">SEADMETE OST</p>
                    <router-link class="nav-link dropdown-text" to="/era/mobiil/mobiilne-elu/">Järelmaks</router-link>
                    <router-link class="nav-link dropdown-text" to="/era/mobiil/mobiilne-elu/">Vana uueks</router-link>
                </div>
            </div>
            <div class="dropdown-group-1">
                <p class="dropdown-header">TURVALISUS JA KINDLUSTUS</p>
                <router-link class="nav-link dropdown-text" to="/era/mobiil/mobiilne-elu/">Viirusetõrje</router-link>
                <router-link class="nav-link dropdown-text" to="/era/mobiil/mobiilne-elu/">Seadmekindlustus</router-link>
                <router-link class="nav-link dropdown-text" to="/era/mobiil/mobiilne-elu/">Sõiduki e-kindlustus</router-link>
                <router-link class="nav-link dropdown-text" to="/era/mobiil/mobiilne-elu/">Reisikindlustus</router-link>
            </div>
            <div class="dropdown-group-1">
                <p class="dropdown-header">MAKSED MOBIILIGA</p>
                <router-link class="nav-link dropdown-text" to="/era/mobiil/mobiilne-elu/">mTasku rakendus</router-link>
                <router-link class="nav-link dropdown-text" to="/era/mobiil/mobiilne-elu/">Apple App Store maksed</router-link>
                <router-link class="nav-link dropdown-text" to="/era/mobiil/mobiilne-elu/">Google Play maksed</router-link>
                <router-link class="nav-link dropdown-text" to="/era/mobiil/mobiilne-elu/">Mobiilne parkimine</router-link>
                <router-link class="nav-link dropdown-text" to="/era/mobiil/mobiilne-elu/">Mobiilimaksed</router-link>
                <router-link class="nav-link dropdown-text" to="/era/mobiil/mobiilne-elu/">Era-arve</router-link>
            </div>
            <div class="dropdown-group-1">
                <p class="dropdown-header">MUU</p>
                <router-link class="nav-link dropdown-text" to="/era/mobiil/mobiilne-elu/">Mobiil-ID</router-link>
                <router-link class="nav-link dropdown-text" to="/era/mobiil/mobiilne-elu/">Minu Telia rakendus</router-link>
                <router-link class="nav-link dropdown-text" to="/era/mobiil/mobiilne-elu/">Lauatelefon</router-link>
                <router-link class="nav-link dropdown-text" to="/era/mobiil/mobiilne-elu/">Mobiili lisateenused</router-link>
                <router-link class="nav-link dropdown-text" to="/era/mobiil/mobiilne-elu/">TV lisateenused</router-link>
            </div>
            <div class="dropdown-group-2">
                <p class="dropdown-header">Minu teenused</p>
                <router-link class="nav-link dropdown-text" to="/era/1" >Lisateenused</router-link>
                <router-link class="nav-link dropdown-text" to="/era/1" >Mobiili lisateenused</router-link>
                <router-link class="nav-link dropdown-text" to="/era/1" >TV lisateenused</router-link>
                <router-link class="nav-link dropdown-text" to="/abi/guides?q=mobiil">Juhendid ja KKK</router-link>
            </div>
            <!-- ToDo 2 extra columns below -->
        </b-dropdown>
    </div>
</template>

<script>
    export default {
        name: "Lisateenused",
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