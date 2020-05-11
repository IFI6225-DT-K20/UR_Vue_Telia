<template>
    <div @mouseover="onOver" @mouseleave="onLeave">
        <b-dropdown append-icon="" id="dropdown-grouped" ref="dropdown" text="E-pood" class="m-2 dropdown-era">
            <div class="dropdown-group-1">
                <p class="dropdown-header">TELEFONID</p>
                <router-link class="nav-link dropdown-text" to="/notdoing">Nutitelefonid</router-link>
                <router-link class="nav-link dropdown-text" to="/notdoing">Nuputelefonid</router-link>
                <router-link class="nav-link dropdown-text" to="/notdoing">Lauatelefonid</router-link>
                <router-link class="nav-link dropdown-text" to="/notdoing">Kotid ja ümbrised</router-link>
                <router-link class="nav-link dropdown-text" to="/notdoing">Ekraanikaitsed</router-link>
                <router-link class="nav-link dropdown-text" to="/notdoing">Mälukaardid</router-link>
                <router-link class="nav-link dropdown-text" to="/notdoing">Akupangad</router-link>
                <router-link class="nav-link dropdown-text" to="/notdoing">Autohoidjad ja handsfreed</router-link>
                <router-link class="nav-link dropdown-text" to="/notdoing">Laadija ja adaptarid</router-link>
            </div>
            <div class="dropdown-group-1">
                <p class="dropdown-header">ARVUTID</p>
                <router-link class="nav-link dropdown-text" to="/notdoing">Sülearvutid</router-link>
                <router-link class="nav-link dropdown-text" to="/notdoing">Tahvelarvutid</router-link>
                <router-link class="nav-link dropdown-text" to="/notdoing">Lauaarvutid</router-link>
                <router-link class="nav-link dropdown-text" to="/notdoing">Monitorid</router-link>
                <router-link class="nav-link dropdown-text" to="/notdoing">Hiired ja lisad</router-link>
                <router-link class="nav-link dropdown-text" to="/notdoing">Klaviatuurid ja komplektid</router-link>
                <router-link class="nav-link dropdown-text" to="/notdoing">Tarkvara</router-link>
                <router-link class="nav-link dropdown-text" to="/notdoing">Kotid ja ümbrised</router-link>
                <router-link class="nav-link dropdown-text" to="/notdoing">Kaablid ja adapterid</router-link>
                <router-link class="nav-link dropdown-text" to="/notdoing">ID-kaardi lugejad</router-link>
                <router-link class="nav-link dropdown-text" to="/notdoing">Andmekandjad</router-link>
            </div>
            <div class="dropdown-column">
                <div class="dropdown-group-1">
                    <p class="dropdown-header">TELERID</p>
                    <router-link class="nav-link dropdown-text" to="/notdoing">Telerid</router-link>
                    <router-link class="nav-link dropdown-text" to="/notdoing">Seinakinnitused</router-link>
                    <router-link class="nav-link dropdown-text" to="/notdoing">Puldid</router-link>
                    <router-link class="nav-link dropdown-text" to="/notdoing">Apple TV</router-link>
                    <router-link class="nav-link dropdown-text" to="/notdoing">Mängukonsoolid</router-link>
                </div>
                <div class="dropdown-group-3">
                    <p class="dropdown-header">TEENUSTE SEADMED</p>
                    <router-link class="nav-link dropdown-text" to="/notdoing">Digiboksid</router-link>
                    <router-link class="nav-link dropdown-text" to="/notdoing">Puldid ja patareid</router-link>
                    <router-link class="nav-link dropdown-text" to="/notdoing">Kaablid</router-link>
                    <router-link class="nav-link dropdown-text" to="/notdoing">Ruuterid</router-link>
                    <router-link class="nav-link dropdown-text" to="/notdoing">Võrguseadmed ja lisad</router-link>
                    <router-link class="nav-link dropdown-text" to="/notdoing">Kõnekaardid ja SIM-kaardid</router-link>
                </div>
            </div>
            <div class="dropdown-group-1">
                <p class="dropdown-header">SPORT JA VABA AEG</p>
                <router-link class="nav-link dropdown-text" to="/notdoing">Kõrvaklapid</router-link>
                <router-link class="nav-link dropdown-text" to="/notdoing">Kõlarid</router-link>
                <router-link class="nav-link dropdown-text" to="/notdoing">Aktiivsusmonitorid</router-link>
                <router-link class="nav-link dropdown-text" to="/notdoing">Nutikellad</router-link>
                <router-link class="nav-link dropdown-text" to="/notdoing">Spordikellad</router-link>
                <router-link class="nav-link dropdown-text" to="/notdoing">Seikluskaamerad ja lisad</router-link>
                <router-link class="nav-link dropdown-text" to="/notdoing">Droonid ja lisad</router-link>
                <router-link class="nav-link dropdown-text" to="/notdoing">GPS seadmed</router-link>
                <router-link class="nav-link dropdown-text" to="/notdoing">Nutividinad</router-link>
                <router-link class="nav-link dropdown-text" to="/notdoing">Nutikad liiklusvahendid</router-link>
            </div>
            <div class="dropdown-group-2">
                <p class="dropdown-header">MINU E-POOD</p>
                <router-link class="nav-link dropdown-text" to="/notdoing">Järelmaksu limiit</router-link>
                <router-link class="nav-link dropdown-text" to="/notdoing">Tellimuste ajalugu</router-link>
                <router-link class="nav-link dropdown-text" to="/notdoing">Tellimine</router-link>
                <router-link class="nav-link dropdown-text" to="/notdoing">Transport</router-link>
                <router-link class="nav-link dropdown-text" to="/notdoing">Tagastamine</router-link>
                <router-link class="nav-link dropdown-text" to="/notdoing">Remont ja garantii</router-link>
                <router-link class="nav-link dropdown-text" to="/notdoing">Vana uueks</router-link>
            </div>
            <!-- ToDo 2 extra columns below -->
        </b-dropdown>
    </div>
</template>

<script>
    export default {
        name: "E-pood",
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