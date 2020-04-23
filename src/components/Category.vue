<template>
    <div class="category">
        <img class="icon" v-bind:src="require('../assets/'+url+'.png')" alt="icon">
        <a class="text">{{name}}</a>
    </div>
</template>

<script>
    export default {
        name: "Category",
        props: ['name', 'url']
    }
</script>

<style scoped>
    .text{
        float: left;
        font-weight: 500;
        font-size: 20px;
        padding-left: 10px;
    }
    .icon{
        float: left;
        max-width: 30px;
        max-height: 30px;
    }
</style>