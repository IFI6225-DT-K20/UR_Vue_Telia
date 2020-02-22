<template>
    <div>
        <b-dropdown id="dropdown-grouped" text="Mobiil" class="m-2 dropdown-era">
            <div class="dropdown-group-1" header="Internet ja kõned">
                <p class="dropdown-header">Internet ja kõned</p>
                <router-link class="nav-link dropdown-text" to="/era/1">Paketid</router-link>
                <router-link class="nav-link dropdown-text" to="/era/1">Mobiili lisateenused</router-link>
                <router-link class="nav-link dropdown-text" to="/era/1">Kõnekaardid ja internetikaart</router-link>
            </div>
            <div class="dropdown-group-1" header="Välismaa">
                <p class="dropdown-header">Välismaa</p>
                <router-link class="nav-link dropdown-text" to="/era/1">Internet ja kõned välismaal</router-link>
                <router-link class="nav-link dropdown-text" to="/era/1">Lisateenused välismaal</router-link>
                <router-link class="nav-link dropdown-text" to="/era/1">Eestist välismaale helistamine</router-link>
            </div>
            <div class="dropdown-group-1" header="Muu">
                <p class="dropdown-header">Muu</p>
                <router-link class="nav-link dropdown-text" to="/era/1">Nutitelefonid e-poes</router-link>
                <router-link class="nav-link dropdown-text" to="/era/1">Leviala</router-link>
                <router-link class="nav-link dropdown-text" to="/era/1">Mobiil-ID</router-link>
            </div>
            <div class="dropdown-group-2" header="Minu teenused">
                <p class="dropdown-header">Minu teenused</p>
                <router-link class="nav-link dropdown-text" to="/era/1">Mobiilsed teenused</router-link>
                <router-link class="nav-link dropdown-text" to="/era/1">Teenuse seadmete haldus</router-link>
                <router-link class="nav-link dropdown-text" to="/era/1">Juhendid ja KKK</router-link>
            </div>
            <!-- ToDo 2 extra columns below -->
        </b-dropdown>
    </div>
</template>

<script>
    export default {
        name: "Mobiil"
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