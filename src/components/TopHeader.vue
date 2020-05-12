<template>
    <div id="top_header">
        <div id="top_left">
            <router-link class="nav-link" to="/era">Eraklient</router-link>
            <router-link class="nav-link" to="/ari">Äriklient</router-link>
        </div>
        <div id="top_right">
            <router-link class="nav-link" to="/ignore1"  onclick="location.href='#/era';">Русский</router-link>
            <router-link class="nav-link" to="/ignore2" onclick="location.href='#/era';">English</router-link>
            <a class="nav-link" @click="$modal.show('login-modal')" id="sisenen">Sisenen</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TopHeader"
    }
</script>

<style scoped>

</style>