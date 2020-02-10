<template>
    <div id="home">
        <Header/>
    </div>
</template>

<script>
    import Header from './homepage/Header.vue'

    export default {
        name: "HomePage",
        components: {Header}
    }

</script>

<style scoped>
#home{
    height: 100%;
    background: rgba(244, 244, 244, 0.87);
}
</style>