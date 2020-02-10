<template>
    <div id="top_header">
        <div id="top_left">
            <button class="button">
                Eraklient
            </button>
            <button class="button">
                Äriklient
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TopHeader"
    }
</script>

<style scoped>
#top_header{
    margin: auto;
    width: 70%;
    height: 40px;
}
#top_left{
   text-align: left;
}
.button{
    height: 40px;
    background: rgba(244, 244, 244, 0.87);
    font-weight: bold;
}
</style>