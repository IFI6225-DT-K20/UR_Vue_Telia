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
                <button id="idcard" @click="showIDCard">ID-kaart</button>
                <button id="mobileid" @click="showMobileID">Mobiil-ID</button>
                <button id="smartid" @click="showSmartID">Smart-ID</button>
                <button id="bank" @click="showBank">Pangad</button>
            </div>
            <div class="modal-content-login" id="modal-content">Sisesta ID-kaart kaardilugejasse ja vajuta nuppu <br>"Sisenen"
                <div style="width: 300px">
                    <a id="logIn">SISENEN</a>
                </div>
            </div>
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
                this.content += 'Sisesta ID-kaart kaardilugejasse ja vajuta nuppu <br>"Sisenen"';
                this.content += '<div style="width: 300px">\n' +
                    '                    <a id="logIn">SISENEN</a>\n' +
                    '                </div>';
                document.getElementById("modal-content").innerHTML = this.content;
                this.disableBorderBottom();
                document.getElementById("idcard").style.borderBottom = "2px solid purple";
            },
            showMobileID () {
                this.content = "";
                this.content += '<input type="input" class="form__field" placeholder="Mobiilinumber:" name="name" id=\'name\' required />';
                this.content += '<label for="name" class="form__label">Mobiilinumber:</label>';
                this.content += '<div style="width: 300px">\n' +
                    '                    <a id="logIn">SISENEN</a>\n' +
                    '                </div>';
                document.getElementById("modal-content").innerHTML = this.content;
                this.disableBorderBottom();
                document.getElementById("mobileid").style.borderBottom = "2px solid purple";
            },
            showSmartID () {
                this.content = "";
                this.content += '<input type="input" class="form__field" placeholder="Isikukood:" name="name" id=\'name\' required />';
                this.content += '<label for="name" class="form__label">Isikukood:</label>';
                this.content += '<div class="select-box">\n' +
                    '  <div class="select-box__current" tabindex="1">\n' +
                    '    <div class="select-box__value">\n' +
                    '      <input class="select-box__input" type="radio" id="0" value="1" name="Ben" checked="checked"/>\n' +
                    '      <p class="select-box__input-text">Eesti</p>\n' +
                    '    </div>\n' +
                    '    <div class="select-box__value">\n' +
                    '      <input class="select-box__input" type="radio" id="1" value="2" name="Ben" checked="checked"/>\n' +
                    '      <p class="select-box__input-text">Läti</p>\n' +
                    '    </div>\n' +
                    '    <div class="select-box__value">\n' +
                    '      <input class="select-box__input" type="radio" id="2" value="3" name="Ben" checked="checked"/>\n' +
                    '      <p class="select-box__input-text">Leedu</p>\n' +
                    '    </div><img class="select-box__icon" src="http://cdn.onlinewebfonts.com/svg/img_295694.svg" alt="Arrow Icon" aria-hidden="true"/>\n' +
                    '  </div>\n' +
                    '  <ul class="select-box__list">\n' +
                    '    <li>\n' +
                    '      <label class="select-box__option" for="0" aria-hidden="aria-hidden">Eesti</label>\n' +
                    '    </li>\n' +
                    '    <li>\n' +
                    '      <label class="select-box__option" for="1" aria-hidden="aria-hidden">Läti</label>\n' +
                    '    </li>\n' +
                    '    <li>\n' +
                    '      <label class="select-box__option" for="2" aria-hidden="aria-hidden">Leedu</label>\n' +
                    '    </li>\n' +
                    '  </ul>\n' +
                    '</div>';
                this.content += '<div style="width: 300px">\n' +
                    '                    <a id="logIn">SISENEN</a>\n' +
                    '                </div>';
                document.getElementById("modal-content").innerHTML = this.content;
                this.disableBorderBottom();
                document.getElementById("smartid").style.borderBottom = "2px solid purple";
            },
            showBank () {
                this.content = "";
                this.content += "<div id='banks'>";
                this.content += "<div id='SWEDBANK'>SWEDBANK</div>";
                this.content += "<div id='SEB'>SEB</div>";
                this.content += "<div id='LHV'>LHV</div>";
                this.content += "<div id='COOP'>COOP PANK</div>";
                this.content += "<div id='LUMINOR'>LUMINOR</div>";
                this.content += "</div>";
                this.content += '<div style="width: 300px">\n' +
                    '                    <a id="logIn">SISENEN</a>\n' +
                    '                </div>';
                document.getElementById("modal-content").innerHTML = this.content;
                this.disableBorderBottom();
                document.getElementById("bank").style.borderBottom = "2px solid purple";
            },
            disableBorderBottom(){
                document.getElementById("bank").style.borderBottom = "none";
                document.getElementById("smartid").style.borderBottom = "none";
                document.getElementById("idcard").style.borderBottom = "none";
                document.getElementById("mobileid").style.borderBottom = "none";
            }
        }
    }
</script>
<style lang="scss">
    #logIn{
        text-align: center;
        padding: 10px;
        border-radius: 20px;
        color: white;
        background: green;
        display: inherit;
    }
    #banks{
        margin: auto;
        max-width: 400px;
        display: table-row;
    }
    #SWEDBANK, #SEB, #LHV, #COOP, #LUMINOR{
        padding: 10px 20px 10px 32px;
        font-size: 11px;
        margin: 3px;
        width: 30%;
        text-align: center;
        float: left;
        font-weight: bold;
        left: -10px;
    }
    #SWEDBANK{
        color: orange;
    }
    #SEB{
        color: green;
    }
    #LHV{
        color: black;
    }
    #COOP{
        color: cornflowerblue;
    }
    #LUMINOR{
        color: black;
    }
    #SWEDBANK:hover{
        color: orange;
        padding: 8px 28px;
        float: left;
        border: 2px solid;
        border-radius: 30px;
        width: 33%;
    }
    #SEB:hover{
        color: green;
        padding: 8px 28px;
        float: left;
        border: 2px solid green;
        border-radius: 30px;
        width: 33%;
    }
    #LHV:hover{
        color: black;
        padding: 8px 28px;
        float: left;
        border: 2px solid black;
        border-radius: 30px;
        width: 33%;
    }
    #COOP:hover{
        color: cornflowerblue;
        padding: 8px 28px;
        float: left;
        border: 2px solid cornflowerblue;
        border-radius: 30px;
        width: 33%;
    }
    #LUMINOR:hover{
        color: black;
        padding: 8px 28px;
        float: left;
        border: 2px solid black;
        border-radius: 30px;
        width: 33%;
    }
    .select-box {
        position: relative;
        display: block;
        width: 100%;
        margin: 0 auto;
        font-family: 'Open Sans', 'Helvetica Neue', 'Segoe UI', 'Calibri', 'Arial', sans-serif;
        font-size: 18px;
        color: #60666d;

        @media (min-width: 768px) {
            width: 70%;
        }

        @media (min-width: 992px) {
            width: 50%;
        }

        @media (min-width: 1200px) {
            width: 30%;
        }

        &__current {
            position: relative;
            box-shadow: 0 15px 30px -10px transparentize(#000, 0.9);
            cursor: pointer;
            outline: none;

            &:focus {
                & + .select-box__list {
                    opacity: 1;

                    // We have to set "animation-name: none;" to make the list visible (read below how it works)

                    animation-name: none;

                    .select-box__option {
                        cursor: pointer;
                    }
                }

                .select-box__icon {
                    transform: translateY(-50%) rotate(180deg);
                }
            }
        }

        &__icon {
            position: absolute;
            top: 50%;
            right: 15px;
            transform: translateY(-50%);
            width: 20px;
            opacity: 0.3;
            transition: 0.2s ease;
        }

        &__value {
            display: flex;
        }

        &__input {
            display: none;

            &:checked + .select-box__input-text {
                display: block;
            }
        }

        &__input-text {
            display: none;
            width: 100%;
            margin: 0;
            padding: 15px;
            background-color: #fff;
        }

        &__list {
            position: absolute;
            width: 100%;
            padding: 0;
            list-style: none;
            opacity: 0;

            // We need to use animation with delay.
            // Otherwise the click event will not have time to run on label, because this element disapears immediately when .select-box__current element loses the focus.
            // This delay will not be noticed because we set "opacity" to "0".
            // We also use "animation-fill-mode: forwards" to make the list stay hidden.

            animation-name: HideList;
            animation-duration: 0.5s;
            animation-delay: 0.5s;
            animation-fill-mode: forwards;
            animation-timing-function: step-start;
            box-shadow: 0 15px 30px -10px transparentize(#000, 0.9);
        }

        &__option {
            display: block;
            padding: 15px;
            background-color: #fff;

            &:hover,
            &:focus {
                color: #546c84;
                background-color: #fbfbfb;
            }
        }
    }

    @keyframes HideList {
        from {
            transform: scaleY(1);
        }
        to {
            transform: scaleY(0);
        }
    }
    $primary: #11998e;
    $secondary: #38ef7d;
    $white: #fff;
    $gray: #9b9b9b;
    .form__group {
        position: relative;
        padding: 15px 0 0;
        margin-top: 10px;
        width: 50%;
    }

    .form__field {
        font-family: inherit;
        width: 100%;
        border: 0;
        border-bottom: 2px solid $gray;
        outline: 0;
        font-size: 1.3rem;
        color: $white;
        padding: 7px 0;
        background: transparent;
        transition: border-color 0.2s;

        &::placeholder {
            color: transparent;
        }

        &:placeholder-shown ~ .form__label {
            font-size: 1.3rem;
            cursor: text;
            top: 20px;
        }
    }

    .form__label {
        position: absolute;
        top: 0;
        display: block;
        transition: 0.2s;
        font-size: 1rem;
        color: $gray;
    }

    .form__field:focus {
        ~ .form__label {
            position: absolute;
            top: 0;
            display: block;
            transition: 0.2s;
            font-size: 1rem;
            color: $primary;
            font-weight: 700;
        }
        padding-bottom: 6px;
        font-weight: 700;
        border-width: 3px;
        border-image: linear-gradient(to right, $primary, $secondary);
        border-image-slice: 1;
    }
    /* reset input */
    .form__field {
        &:required,
        &:invalid {
            box-shadow: none;
        }
    }
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
    #mobileid,
    #smartid,
    #idcard,
    #bank{
        border: none;
        font-size: 20px;
    }
    #mobileid:hover,
    #smartid:hover,
    #idcard:hover,
    #bank:hover{
        color: purple;
    }
    #modal-content{
        margin: auto;
        text-align: left;
        padding-left: 11%;
        padding-top: 2%;
        font-size: 12px;
    }
</style>