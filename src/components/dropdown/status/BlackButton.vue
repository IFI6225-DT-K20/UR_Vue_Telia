<template>
    <div class="blackButton">
        {{context}}
    </div>
</template>

<script>
    export default {
        name: "BlackButton",
        props: ['context']
    }
</script>

<style scoped>
    .blackButton{
        background: black;
        color: white;
        font-weight: bold;
        border-radius: 3px;
        padding-right: 2px;
        padding-left: 2px;
        display:inline-block
    }
</style>