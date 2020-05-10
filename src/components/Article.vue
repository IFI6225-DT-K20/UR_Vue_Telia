<template>
    <div class="article">
        <a id="date">{{date}}</a><br>
        <a id="context">{{title}}</a>
    </div>
</template>

<script>
    export default {
        name: "Article",
        props: ['date', 'title']
    }
</script>

<style scoped>
    #date{
        float: left;
        font-size: 13px;
    }
    #context{
        float: left;
        font-weight: 800;
        text-align: left;
        font-size: 13px;
    }
    #context:hover{
        color:#990ae3;
        cursor: pointer;
    }
</style>