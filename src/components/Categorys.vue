<template>
    <div id="category">
        <Category name="Mobiilipaketid" url="mobiilipaketid"></Category>
        <Category name="TV" url="tv"></Category>
        <Category name="Koduinternet" url="koduinternet"></Category>
        <Category name="Telia 1" url="telia_1"></Category>
        <Category name="Nutitelefonid" url="nutitelefonid"></Category>
        <Category name="Iseteenindus" url="iseteenindus"></Category>
        <Category name="Arved" url="arved"></Category>
        <Category name="Kontaktid" url="kontaktid"></Category>
    </div>

</template>

<script>
    import Category from "./Category";
    export default {
        name: "Categorys",
        components: {Category}
    }
</script>

<style scoped>
    #category{
        max-width: 1180px;
        flex: 1;
        margin: -20px auto auto auto;
        width: 100%;
        display: inline-block;
        position: sticky;
        z-index: 100;
        background: white;
        border-radius: 3px;
    }
    .category{
        min-width: 290px;
        min-height: 80px;
        float: left;
        padding: 12px 60px 25px;
        border-right: 1px solid rgba(0, 0, 0, 0.1);
    }
    .category:hover{
        color:#990ae3;
        cursor: pointer;
    }
</style>