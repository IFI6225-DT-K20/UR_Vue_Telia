<template>
    <div id="bottom_header">
        <div class="middle_bottom_header">
            <div id="logo">
                <img src="../assets/1200px-Telia_logo.svg.png" height="30s">
            </div>
            <div class="dropdowns">
                <Mobiil></Mobiil>
            </div>
            <modal name="hello-world" @before-open="beforeOpen"/>
        </div>
    </div>
</template>

<script>
    import Mobiil from "./dropdown/Mobiil";
    export default {
        name: "BottomHeader",
        components: {
            Mobiil
        },
        data () {
            return {
                canBeShown: false
            }
        },
        methods: {
            show () {
                this.$modal.show('hello-world');
            },
            hide () {
                this.$modal.hide('hello-world');
            }
        }
    }
</script>
<style lang="scss">
    *:not(pre) {
        font-family: 'Montserrat';
        box-sizing: border-box;
    }
    body {
        margin: 0;
        padding: 100px 50px;
        padding-bottom: 0;
        width: 100%;
        min-height: 100vh;
        background: #fc00aa;
        background: -webkit-linear-gradient(to right, #fc00aa, #00dbde);
        background: linear-gradient(315deg, #fc00aa, #00dbde);
        cursor: default;
    }
    pre {
        color: #595959;
        background-color: #f3f3f3;
        border: 1px solid #eee;
    }
    #app {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #6b7c93;
        background: #F6F9FC;
        padding: 20px;
        border-radius: 3px;
        box-shadow: 0 4px 36px rgba(50,50,93,.11),
        0 1px 33px rgba(0,0,0,.08);
    }
    h1,
    h2 {
        font-weight: normal;
        a {
            font-size: 12px;
        }
    }
    a {
        color: inherit;
    }
    button.btn {
        outline: none;
        background: white;
        border: 0;
        padding: 10px 18px;
        cursor: pointer;
        border-radius: 3px;
        color: white;

        box-shadow: 0 4px 8px rgba(#20a0ff, .3);
        background: #4db3ff;
        font-weight: 600;
        border-radius: 3px;
        min-width: 90px;
        margin-bottom: 8px;
        margin-top: 8px;
        margin-right: 8px;
        &:hover {
            background: #20a0ff;
        }
        &.green {
            box-shadow: 0 4px 8px rgba(#50C9BA, .3);
            background: #50C9BA;
            &:hover {
                background: mix(#50C9BA, black, 95%);
            }
        }
        &.red {
            box-shadow: 0 4px 8px rgba(#F21368, .3);
            background: #F21368;
            &:hover {
                background: mix(#F21368, black, 95%);
            }
        }
    }
    .example-modal-content {
        height: 100%;
        box-sizing: border-box;
        padding: 10px;
        font-size: 13px;
        overflow: auto;
    }
    .vue-dialog button {
        letter-spacing: 1px;
    }
    @media (max-width:600px)  {
        body {
            padding: 10px;
        }
    }
</style>

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