<template>
    <modal name="login-modal"
           :classes="['v--modal', hasBugs && 'has-bugs']"
           :pivot-y="0.2"
           :width="1200"
           :height="420"
           @before-open="beforeOpen"
           @before-close="beforeClose">
        <div class="Title">
            <h1>Vali sisselogimise viis</h1>
            <div class="loginChoice">
                <button @click="showIDCard">ID-kaart</button>
                <button @click="showMobileID">Mobiil-ID</button>
                <button @click="showSmartID">Smart-ID</button>
                <button @click="showBank">Pangad</button>
            </div>
            <div class="modal-content-login" id="modal-content">Sisesta ID-kaart kaardilugejasse ja vajuta nuppu <br>Sisenen </div>
        </div>
    </modal>
</template>
<script>
    export default {
        name: 'LogInModal',
        data () {
            return {
                nr: 0,
                content: ""
            }
        },
        methods: {
            beforeOpen () {
                this.nr = 0;
            },
            beforeClose () {
            },
            showIDCard () {
                this.content = "";
                this.content += "Sisesta ID-kaart kaardilugejasse ja vajuta nuppu <br>Sisenen ";
                document.getElementById("modal-content").innerHTML = this.content;
            },
            showMobileID () {
                document.getElementById("modal-content").innerHTML = "whatever2";
            },
            showSmartID () {
                document.getElementById("modal-content").innerHTML = "whatever3";
            },
            showBank () {
                document.getElementById("modal-content").innerHTML = "whatever4";
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
    .Title {
        padding: 10px;
        text-align: center;
        .bugs-label {
            text-transform: uppercase;
            font-size: 60px;
            font-weight: 300;
            letter-spacing: 2px;
            padding: 40px;
        }
        .loginChoice{
            height: 200px;
            width: 600px;
            padding: 0;
            position: absolute;
            left: 300px;
            top: 150px;
        }
        .modal-content-login{
            position: absolute;
            top: 200px;
            width: 600px;
            left: 300px;
        }
        button {
            width: 100px;
            &.has-bugs{
                height: 200px;
            }
        }
        sub {
            color: #EC625F;
            transition: opacity 0.25s;
        }
    }
    h1 {
        font-family: "Pebble", sans-serif;
        padding-top: 32px;
        font-size: 32px;
        font-weight: bold;
        color: black;
    }
</style>