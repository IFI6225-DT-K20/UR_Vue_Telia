<template>
    <div @mouseover="onOver" @mouseleave="onLeave">
        <b-dropdown append-icon="lock" id="dropdown-grouped" ref="dropdown" text="Iseteenindus" class="m-2 dropdown-era">
            <div class="dropdown-group-1">
                <p class="dropdown-header">MINU TEENUSED</p>
                <router-link class="nav-link dropdown-text" to="/notdoing">Avaleht</router-link>
                <router-link class="nav-link dropdown-text" to="/notdoing">Mobiilsed teenused</router-link>
                <router-link class="nav-link dropdown-text" to="/notdoing">Kodused teenused</router-link>
                <router-link class="nav-link dropdown-text" to="/notdoing">Lisateenused</router-link>
                <router-link class="nav-link dropdown-text" to="/notdoing">Teenuse seadmete haldus</router-link>
                <router-link class="nav-link dropdown-text" to="/notdoing">Teenuse diagnostika</router-link>
            </div>
            <div class="dropdown-group-1">
                <p class="dropdown-header">ARVELDUS</p>
                <router-link class="nav-link dropdown-text" to="/notdoing">Arved</router-link>
                <router-link class="nav-link dropdown-text" to="/notdoing">Arve tasumine</router-link>
                <router-link class="nav-link dropdown-text" to="/notdoing">Arve seaded</router-link>
            </div>
            <div class="dropdown-group-1">
                <p class="dropdown-header">KONTO</p>
                <router-link class="nav-link dropdown-text" to="/notdoing">Kontaktandmed</router-link>
                <router-link class="nav-link dropdown-text" to="/notdoing">Volitused</router-link>
                <router-link class="nav-link dropdown-text" to="/notdoing">Lepingud</router-link>
                <router-link class="nav-link dropdown-text" to="/notdoing">E-poe tellimuste ajalugu</router-link>
                <router-link class="nav-link dropdown-text" to="/notdoing">Järelmaksu limiit</router-link>
            </div>
            <!-- ToDo 2 extra columns below -->
        </b-dropdown>
    </div>
</template>

<script>
    export default {
        name: "Iseteenindus",
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