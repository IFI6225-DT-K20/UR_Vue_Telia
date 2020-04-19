<template>
  <div id="app">
    <div id="header_container">
      <div id="top_header">
        <div id="top_left">
          <router-link class="nav-link" to="/era">Eraklient</router-link>
          <router-link class="nav-link" to="/ari">Äriklient</router-link>
        </div>
        <div id="top_right">
          <a class="nav-link" to="">Русский</a> <!-- ToDo russian language -->
          <a class="nav-link" to="">English</a> <!-- ToDo english language -->
          <a class="nav-link">Sisenen</a> <!-- ToDo popup -->
        </div>
      </div>
      <bottom-header></bottom-header>
    </div>
    <div id="container">
      <Slider :data="['Slide 1', 'Slide 2', 'Slide 3']"></Slider>
    </div>
    <router-view/>
  </div>
</template>

<script>
  import BottomHeader from "./components/BottomHeader";
  import Slider from "./components/Slider";
  export default {
    name: 'App',
    components: {BottomHeader, Slider},
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
  }
  #container{
    height: 2000px;
    background: rgba(244, 244, 244, 0.87);
    z-index: 50;
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
</style>