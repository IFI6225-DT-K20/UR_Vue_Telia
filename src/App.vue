<template>
  <div id="app">
    <LogInModal/>
    <div id="header_container">
      <div id="top_header">
        <div id="top_left">
          <router-link class="nav-link" to="/era">Eraklient</router-link>
          <router-link class="nav-link" to="/ari">Äriklient</router-link>
        </div>
        <div id="top_right">
          <router-link class="nav-link" to="/ignore1"  onclick="location.href='#/era';">Русский</router-link>
          <router-link class="nav-link" to="/ignore2" onclick="location.href='#/era';">English</router-link>
          <a class="nav-link" @click="$modal.show('login-modal')" id="sisenen">Sisenen</a>
        </div>
      </div>
      <bottom-header></bottom-header>
    </div>
    <div id="container">
      <Slider></Slider>
      <Categorys/>
      <News/>
    </div>
    <router-view/>
  </div>
</template>

<script>
  import BottomHeader from "./components/BottomHeader";
  import Slider from "./components/Slider";
  import Categorys from "./components/Categorys";
  import News from "./components/News";
  import LogInModal from './components/LogInModal.vue';
  export default {
    name: 'App',
    components: {BottomHeader, Slider, LogInModal, Categorys, News},
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
  #header_container{
    height: 110px;
    position: sticky;
    top: 0;
    background: rgba(244, 244, 244, 0.87);
    z-index: 200;
    width: 100%;
  }
  #container{
    height: 2000px;
    background: rgba(244, 244, 244, 0.87);
    z-index: 50;
  }
  #sisenen:hover{
    color:purple;
    cursor: pointer;
  }
  #leftSlider{
    float: left;
    width: 29%;
    text-align: left;
    line-height: 1;
  }
  #rightSlider{
    float: right;
    width: 70%;
  }
  .sliderTitle{
    font-weight: bold;
    color: #8e008e;
    font-size: 50px;
    margin: 20% 0 10% 0;
  }
  .sliderText{
    font-size: 18px;
    margin-bottom: 10%;
  }
  .sliderButton{
    color: white;
    background: #930093;
    border-radius: 40px;
    padding: 15px 20px 15px 20px;
    margin: 10px;
    float: left;
    font-size: 12px;
    font-weight: 800;
    position:relative;
  }
  .sliderButton:hover{
    color: white;
    background: #be00be;
    border-radius: 40px;
    padding: 15px 20px 15px 20px;
    margin: 10px;
    float: left;
    font-size: 12px;
    font-weight: 800;
    position:relative;
    cursor: pointer;
  }
  .nav-link{
    color: #000000;
    border: 0;
    font-weight: bold;
    font-size: 12px;
    display: inline-block;
    height: 40px;
    padding: 0 20px 0 20px;
  }
  .nav-link:hover{
    color:purple;
  }
  #top_header{
    margin: auto;
    width: 100%;
    max-width: 1180px;
    height: 40px;
    display: flex;
    justify-content: space-between;
  }
  #top_left{
    text-align: left;
    display: inline-block;
  }
  #top_right{
    text-align: right;
    display: inline-block;
  }
  #bottom_header{
    background: #ffffff;
    height: 70px;
  }
  .router-link-active{
    color: purple;
    background: white;
    border-top-color: purple;
    border-top: 3px solid;
  }
  .dropdown-menu{
    color: purple;
    border-top: 3px solid;
    width: 1180px;
    max-width: 1180px;
    height: 300px;
    overflow: hidden;
  }
  .dropdown-era{
    background-color: white;
  }
  .btn-secondary{
    background: white;
    color: black;
    border-color: white;
    font-size: 16px;
  }
  .dropdown-toggle[aria-expanded="true"] {
    background:#FFF !important;
    border-color: white !important;
    color: purple !important;
  }
  .dropdown-toggle:after {
    display: none;
  }
  .carousel__indicator::before{
     background: white !important;
     opacity: 0.3;
   }
  .carousel__indicator--active::before{
    background: purple !important;
    opacity: 1;
  }
</style>