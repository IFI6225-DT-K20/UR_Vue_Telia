<template>
    <div id="news">
        <h1 id="title">UUDISED</h1><br>
        <Article date="22. aprill 2020" title="Robert Pajos: sellist esimest kvartalit ei oodanud keegi"/>
        <Article date="20. aprill 2020" title="Hange.ee keskkonnas saab uusi hankeid lisada Telia mobiilimakse toel"/>
        <Article date="22. aprill 2020" title="Television.ee keskkonna sisu eest saab tasuda Telia mobiilimaksega"/>
        <a id="newsButton">VAATAN KÕIKI UUDISEID ></a>
    </div>
</template>

<script>
    import Article from "./Article";
    export default {
        name: "News",
        components: {Article}
    }
</script>

<style scoped>
    #news{
        max-width: 1180px;
        flex: 1;
        margin: 100px auto auto auto;
        width: 100%;
        display: inline-block;
        position: sticky;
        background: white;
        border-radius: 3px;
    }
    #title{
        padding-top: 5px;
        float: left;
        margin-right: 100%;
    }
    #newsButton{
        border-radius: 20px;
        padding: 10px;
        color: purple;
        margin: 10px;
        float: left;
        font-size: 12px;
        font-weight: 800;
        position:relative;
    }
    #newsButton:hover{
        border: 2px solid;
        cursor: pointer;
        position:relative;
    }
    .article{
        display: inline-block;
        float: left;
        padding-right: 20px;
        max-width: 390px;
    }
</style>