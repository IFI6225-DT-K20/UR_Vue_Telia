<template>
    <div id="header_container">
        <TopHeader />
        <BottomHeader/>
    </div>
</template>

<script>
    import TopHeader from "./TopHeader";
    import BottomHeader from "./BottomHeader";
    export default {
        name: "Header",
        components: {BottomHeader, TopHeader}
    }
</script>

<style scoped>
#header_container{
    height: 110px;
    position: sticky;
    top: 0;
    background: rgba(244, 244, 244, 0.87);
}
</style>