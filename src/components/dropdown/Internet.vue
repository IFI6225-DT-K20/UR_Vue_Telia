<template>
    <div @mouseover="onOver" @mouseleave="onLeave">
        <b-dropdown append-icon="" id="dropdown-grouped" ref="dropdown" text="Internet" class="m-2 dropdown-era">
            <div class="dropdown-group-1">
                <p class="dropdown-header">KODUINTERNET</p>
                <router-link class="nav-link dropdown-text" to="/era/mobiil/mobiilne-elu/" onclick="location.href='#/era';">Paketid</router-link>
            </div>
            <div class="dropdown-group-2">
                <p class="dropdown-header">Minu teenused</p>
                <router-link class="nav-link dropdown-text" to="/era/1" onclick="location.href='#/era';">Kodused teenused</router-link>
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
        name: "Internet",
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