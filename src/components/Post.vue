<template>
    <div class="post">
        <div id="leftPost">
            <img id="image" alt="" v-bind:src="require('../assets/'+url+'.png')"/>
        </div>
        <div id="rightPost">
            <div id="datePost">{{date}}</div>
            <a id="title">{{title}}</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Post",
        props: ['date', 'url', 'title']
    }
</script>

<style scoped>
    #date{
        float: left;
    }
    #leftPost{
        float: left;
    }
    .post{
        display: flex;
        padding-bottom: 5%;
    }
    #rightPost{
        margin-left: 3%;
    }
    #title{
        font-weight: bold;
    }
    #datePost{
        font-size: 11px;
    }
</style>