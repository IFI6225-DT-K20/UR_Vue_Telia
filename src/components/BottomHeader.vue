<template>
    <div id="bottom_header">
        <div class="middle_bottom_header">
            <div id="logo">
                <img src="../assets/1200px-Telia_logo.svg.png" height="30s">
            </div>
            <div class="dropdowns">
                <Mobiil></Mobiil>
            </div>
        </div>
    </div>
</template>

<script>
    import Mobiil from "./dropdown/Mobiil";
    export default {
        name: "BottomHeader",
        components: {
            Mobiil
        }
    }
</script>

<style scoped>
    #bottom_header{
        padding-top: 10px;
        width: 100%;
        text-align: left;
    }
    #logo{
        float: left;
        padding-right: 40px;
        padding-top: 10px;
    }
    .dropdowns{
        display: inline-block;
    }
    .middle_bottom_header{
        margin: auto;
        width: 100%;
        max-width: 1180px;
        height: 40px;
        display: flex;
    }

</style>