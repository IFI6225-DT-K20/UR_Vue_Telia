<template>
    <div @mouseover="onOver" @mouseleave="onLeave">
        <b-dropdown append-icon="" id="dropdown-grouped" ref="dropdown" text="Abi" class="m-2 dropdown-era">
            <div class="dropdown-group-1">
                <p class="dropdown-header">ABI</p>
                <router-link class="nav-link dropdown-text" to="/notdoing" onclick="location.href='#/era';">Teenuste diagnostika</router-link>
                <router-link class="nav-link dropdown-text" to="/notdoing" onclick="location.href='#/era';">Teenuse seadmete haldus</router-link>
                <router-link class="nav-link dropdown-text" to="/notdoing" onclick="location.href='#/era';">Hooldus ja garantii</router-link>
                <router-link class="nav-link dropdown-text" to="/notdoing" onclick="location.href='#/era';">Juhendid ja KKK <BlackButton context="UUS"></BlackButton></router-link>
                <router-link class="nav-link dropdown-text" to="/notdoing" onclick="location.href='#/era';">Rikkeinfo</router-link>
                <router-link class="nav-link dropdown-text" to="/notdoing" onclick="location.href='#/era';">Tehnoloogiablogi Digitark</router-link>
            </div>
            <div class="dropdown-group-1">
                <p class="dropdown-header">KONTAKTID</p>
                <router-link class="nav-link dropdown-text" to="/notdoing" onclick="location.href='#/era';">Telia kontaktid</router-link>
                <router-link class="nav-link dropdown-text" to="/notdoing" onclick="location.href='#/era';">Esindused</router-link>
            </div>
            <!-- ToDo 2 extra columns below -->
        </b-dropdown>
    </div>
</template>

<script>
    import BlackButton from "./status/BlackButton";
    export default {
        name: "Abi",
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