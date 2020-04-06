<template>
    <div id="bottom_header">
        <demo-error-modal/>
        <div class="middle_bottom_header">
            <div id="logo">
                <img src="../assets/1200px-Telia_logo.svg.png" height="30">
            </div>
            <div class="dropdowns">
                <Mobiil></Mobiil>
            </div>
            <button
                    class="dropdowns"
                    @click="$modal.show('error-modal')">
                Test modal
            </button>
        </div>
    </div>
</template>

<script>
    import Mobiil from "./dropdown/Mobiil";
    import DemoErrorModal from './LogInModal.vue'
    export default {
        name: "BottomHeader",
        components: {
            Mobiil,
            DemoErrorModal
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
            },
            beforeOpen (event) {
                console.log(event.params.foo);
            }
        }
    }
</script>

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
