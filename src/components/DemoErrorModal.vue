<template>
    <modal name="error-modal"
           :classes="['v--modal', 'error-modal', hasBugs && 'has-bugs']"
           :pivot-y="0.2"
           :width="1200"
           :height="420"
           @before-open="beforeOpen"
           @before-close="beforeClose">
        <div class="error-modal-content">
            <h1>Vali sisselogimise viis</h1>
            <button class="nav-link">ID-kaart</button>
            <button class="nav-link">Mobiil-ID</button>
            <button class="nav-link">Smart-ID</button>
            <button class="nav-link">Pangad</button>
        </div>
    </modal>
</template>
<script>
    export default {
        name: 'DemoErrorModal',
        data () {
            return {
                bugCount: 0,
                message: '',
                hasBugs: false
            }
        },
        methods: {
            beforeOpen () {
                this.bugCount = 0
            },
            beforeClose (event) {
                if (this.bugCount > 0) {
                    this.hasBugs = true;
                    /*
                    Stopping close event execution
                    */
                    event.stop()
                }
            }
        }
    }
</script>
<style lang="scss">
    .error-modal {
        transition: box-shadow 1s;
        &.has-bugs {
            box-shadow: 0 24px 80px -2px rgba(255, 0, 0, .4) !important;
        }
    }
    .error-modal-content {
        padding: 10px;
        text-align: center;
        .bugs-label {
            text-transform: uppercase;
            font-size: 60px;
            font-weight: 300;
            letter-spacing: 2px;
            padding: 40px;
        }
        button {
            width: 180px;
        }
        sub {
            color: #EC625F;
            transition: opacity 0.25s;
        }
    }
    h1 {
        font-family: "Pebble", sans-serif;
        padding-top: 32px;
        font-size: 42px;
        font-weight: bold;
        color: black;
    }
</style>