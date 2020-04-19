<template>
    <div @mouseover="onOver" @mouseleave="onLeave">
        <b-dropdown append-icon="" id="dropdown-grouped" ref="dropdown" text="Abi" class="m-2 dropdown-era">
            <div class="dropdown-group-1">
                <p class="dropdown-header">ABI</p>
                <router-link class="nav-link dropdown-text" to="/notdoing">Teenuste diagnostika</router-link>
                <router-link class="nav-link dropdown-text" to="/notdoing">Teenuse seadmete haldus</router-link>
                <router-link class="nav-link dropdown-text" to="/notdoing">Hooldus ja garantii</router-link>
                <router-link class="nav-link dropdown-text" to="/notdoing">Juhendid ja KKK</router-link>
                <router-link class="nav-link dropdown-text" to="/notdoing">Rikkeinfo</router-link>
                <router-link class="nav-link dropdown-text" to="/notdoing">Tehnoloogiablogi Digitark</router-link>
            </div>
            <div class="dropdown-group-1">
                <p class="dropdown-header">KONTAKTID</p>
                <router-link class="nav-link dropdown-text" to="/notdoing">Telia kontaktid</router-link>
                <router-link class="nav-link dropdown-text" to="/notdoing">Esindused</router-link>
            </div>
            <!-- ToDo 2 extra columns below -->
        </b-dropdown>
    </div>
</template>

<script>
    export default {
        name: "Abi",
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