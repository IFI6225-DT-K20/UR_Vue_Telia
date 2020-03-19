<template>
    <div @mouseover="onOver" @mouseleave="onLeave">
        <b-dropdown append-icon="" id="dropdown-grouped" ref="dropdown" text="Mobiil" class="m-2 dropdown-era">
            <div class="dropdown-group-1">
                <p class="dropdown-header">Internet ja kõned</p>
                <router-link class="nav-link dropdown-text" to="/era/mobiil/mobiilne-elu/">Paketid</router-link>
                <router-link class="nav-link dropdown-text" to="/era/mobiil/lisateenused/">Mobiili lisateenused</router-link>
                <router-link class="nav-link dropdown-text" to="/era/mobiil/konekaardid">Kõnekaardid ja internetikaart</router-link>
            </div>
            <div class="dropdown-group-1">
                <p class="dropdown-header">Välismaa</p>
                <router-link class="nav-link dropdown-text" to="/era/mobiil/valismaa/internet-ja-koned-valismaal/">Internet ja kõned välismaal</router-link>
                <router-link class="nav-link dropdown-text" to="/era/mobiil/lisateenused/">Lisateenused välismaal</router-link>
                <router-link class="nav-link dropdown-text" to="/era/mobiil/valismaa/eestist-helistamine-valismaale/">Eestist välismaale helistamine</router-link>
            </div>
            <div class="dropdown-group-1">
                <p class="dropdown-header">Muu</p>
                <router-link class="nav-link dropdown-text" to="/nutitelefonid">Nutitelefonid e-poes</router-link>
                <router-link class="nav-link dropdown-text" to="/era/mobiil/leviala">Leviala</router-link>
                <router-link class="nav-link dropdown-text" to="/era/lisateenused/mobiil-id/">Mobiil-ID</router-link>
            </div>
            <div class="dropdown-group-2">
                <p class="dropdown-header">Minu teenused</p>
                <router-link class="nav-link dropdown-text" to="/era/1" >Mobiilsed teenused</router-link>
                <router-link class="nav-link dropdown-text" to="/era/1">Teenuse seadmete haldus</router-link>
                <router-link class="nav-link dropdown-text" to="/abi/guides?q=mobiil">Juhendid ja KKK</router-link>
            </div>
            <!-- ToDo 2 extra columns below -->
        </b-dropdown>
    </div>
</template>

<script>
    export default {
        name: "Mobiil",
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
        width: 150px;
        float: left;
        padding-right: 50px;
        padding-left: 20px;
    }
    .dropdown-group-2{
        float:left;
        width: 150px;
    }
    .dropdown-header{
        font-weight: bold;
        font-size: 16px;
    }
    .dropdown-text{
        color: black;
        font-weight: normal;
    }
</style>