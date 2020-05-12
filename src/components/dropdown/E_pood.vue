<template>
    <div @mouseover="onOver" @mouseleave="onLeave">
        <b-dropdown append-icon="" id="dropdown-grouped" ref="dropdown" text="E-pood" class="m-2 dropdown-era">
            <div class="dropdown-group-1">
                <p class="dropdown-header">TELEFONID</p>
                <router-link class="nav-link dropdown-text" to="/notdoing" onclick="location.href='#/era';">Nutitelefonid</router-link>
                <router-link class="nav-link dropdown-text" to="/notdoing" onclick="location.href='#/era';">Nuputelefonid</router-link>
                <router-link class="nav-link dropdown-text" to="/notdoing" onclick="location.href='#/era';">Lauatelefonid</router-link>
                <router-link class="nav-link dropdown-text" to="/notdoing" onclick="location.href='#/era';">Kotid ja ümbrised</router-link>
                <router-link class="nav-link dropdown-text" to="/notdoing" onclick="location.href='#/era';">Ekraanikaitsed</router-link>
                <router-link class="nav-link dropdown-text" to="/notdoing" onclick="location.href='#/era';">Mälukaardid</router-link>
                <router-link class="nav-link dropdown-text" to="/notdoing" onclick="location.href='#/era';">Akupangad</router-link>
                <router-link class="nav-link dropdown-text" to="/notdoing" onclick="location.href='#/era';">Autohoidjad ja handsfreed</router-link>
                <router-link class="nav-link dropdown-text" to="/notdoing" onclick="location.href='#/era';">Laadija ja adaptarid</router-link>
            </div>
            <div class="dropdown-group-1">
                <p class="dropdown-header">ARVUTID</p>
                <router-link class="nav-link dropdown-text" to="/notdoing" onclick="location.href='#/era';">Sülearvutid</router-link>
                <router-link class="nav-link dropdown-text" to="/notdoing" onclick="location.href='#/era';">Tahvelarvutid</router-link>
                <router-link class="nav-link dropdown-text" to="/notdoing" onclick="location.href='#/era';">Lauaarvutid</router-link>
                <router-link class="nav-link dropdown-text" to="/notdoing" onclick="location.href='#/era';">Monitorid</router-link>
                <router-link class="nav-link dropdown-text" to="/notdoing" onclick="location.href='#/era';">Hiired ja lisad</router-link>
                <router-link class="nav-link dropdown-text" to="/notdoing" onclick="location.href='#/era';">Klaviatuurid ja komplektid</router-link>
                <router-link class="nav-link dropdown-text" to="/notdoing" onclick="location.href='#/era';">Tarkvara</router-link>
                <router-link class="nav-link dropdown-text" to="/notdoing" onclick="location.href='#/era';">Kotid ja ümbrised</router-link>
                <router-link class="nav-link dropdown-text" to="/notdoing" onclick="location.href='#/era';">Kaablid ja adapterid</router-link>
                <router-link class="nav-link dropdown-text" to="/notdoing" onclick="location.href='#/era';">ID-kaardi lugejad</router-link>
                <router-link class="nav-link dropdown-text" to="/notdoing" onclick="location.href='#/era';">Andmekandjad</router-link>
            </div>
            <div class="dropdown-column">
                <div class="dropdown-group-1">
                    <p class="dropdown-header">TELERID</p>
                    <router-link class="nav-link dropdown-text" to="/notdoing" onclick="location.href='#/era';">Telerid</router-link>
                    <router-link class="nav-link dropdown-text" to="/notdoing" onclick="location.href='#/era';">Seinakinnitused</router-link>
                    <router-link class="nav-link dropdown-text" to="/notdoing" onclick="location.href='#/era';">Puldid</router-link>
                    <router-link class="nav-link dropdown-text" to="/notdoing" onclick="location.href='#/era';">Apple TV</router-link>
                    <router-link class="nav-link dropdown-text" to="/notdoing" onclick="location.href='#/era';">Mängukonsoolid</router-link>
                </div>
                <div class="dropdown-group-3">
                    <p class="dropdown-header">TEENUSTE SEADMED</p>
                    <router-link class="nav-link dropdown-text" to="/notdoing" onclick="location.href='#/era';">Digiboksid</router-link>
                    <router-link class="nav-link dropdown-text" to="/notdoing" onclick="location.href='#/era';">Puldid ja patareid</router-link>
                    <router-link class="nav-link dropdown-text" to="/notdoing" onclick="location.href='#/era';">Kaablid</router-link>
                    <router-link class="nav-link dropdown-text" to="/notdoing" onclick="location.href='#/era';">Ruuterid</router-link>
                    <router-link class="nav-link dropdown-text" to="/notdoing" onclick="location.href='#/era';">Võrguseadmed ja lisad</router-link>
                    <router-link class="nav-link dropdown-text" to="/notdoing" onclick="location.href='#/era';">Kõnekaardid ja SIM-kaardid</router-link>
                </div>
            </div>
            <div class="dropdown-group-1">
                <p class="dropdown-header">SPORT JA VABA AEG</p>
                <router-link class="nav-link dropdown-text" to="/notdoing" onclick="location.href='#/era';">Kõrvaklapid</router-link>
                <router-link class="nav-link dropdown-text" to="/notdoing" onclick="location.href='#/era';">Kõlarid</router-link>
                <router-link class="nav-link dropdown-text" to="/notdoing" onclick="location.href='#/era';">Aktiivsusmonitorid</router-link>
                <router-link class="nav-link dropdown-text" to="/notdoing" onclick="location.href='#/era';">Nutikellad</router-link>
                <router-link class="nav-link dropdown-text" to="/notdoing" onclick="location.href='#/era';">Spordikellad</router-link>
                <router-link class="nav-link dropdown-text" to="/notdoing" onclick="location.href='#/era';">Seikluskaamerad ja lisad</router-link>
                <router-link class="nav-link dropdown-text" to="/notdoing" onclick="location.href='#/era';">Droonid ja lisad</router-link>
                <router-link class="nav-link dropdown-text" to="/notdoing" onclick="location.href='#/era';">GPS seadmed</router-link>
                <router-link class="nav-link dropdown-text" to="/notdoing" onclick="location.href='#/era';">Nutividinad</router-link>
                <router-link class="nav-link dropdown-text" to="/notdoing" onclick="location.href='#/era';">Nutikad liiklusvahendid</router-link>
            </div>
            <div class="dropdown-group-2">
                <p class="dropdown-header">MINU E-POOD</p>
                <router-link class="nav-link dropdown-text" to="/notdoing" onclick="location.href='#/era';">Järelmaksu limiit</router-link>
                <router-link class="nav-link dropdown-text" to="/notdoing" onclick="location.href='#/era';">Tellimuste ajalugu</router-link>
                <router-link class="nav-link dropdown-text" to="/notdoing" onclick="location.href='#/era';">Tellimine</router-link>
                <router-link class="nav-link dropdown-text" to="/notdoing" onclick="location.href='#/era';">Transport</router-link>
                <router-link class="nav-link dropdown-text" to="/notdoing" onclick="location.href='#/era';">Tagastamine</router-link>
                <router-link class="nav-link dropdown-text" to="/notdoing" onclick="location.href='#/era';">Remont ja garantii</router-link>
                <router-link class="nav-link dropdown-text" to="/notdoing" onclick="location.href='#/era';">Vana uueks <BlackButton context="UUS"></BlackButton></router-link>
            </div>
            <!-- ToDo 2 extra columns below -->
        </b-dropdown>
    </div>
</template>

<script>
    import BlackButton from "./status/BlackButton";
    export default {
        name: "E-pood",
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