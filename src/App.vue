<template>
  <div id="app">
    <LogInModal/>
    <div id="header_container">
      <TopHeader></TopHeader>
      <bottom-header></bottom-header>
    </div>
    <div id="container">
      <Slider></Slider>
      <Categorys/>
      <News/>
      <div id="specialOffer">
        <div id="rightOffer">
          <ImageSlider/>
        </div>
        <div id="leftOffer">
          <div>
            <div id="titleLeft">OLEME OLEMAS, ET KODUST KÕIK SUJUKS</div>
            <TextSlider/>
          </div>
          <div id="bottomTextSlider">
            <a class="sliderButton">VAATAN LÄHEMALT ></a>
          </div>
        </div>
      </div>
      <div id="special">
        <iPhone/>
        <SwapPhone/>
      </div>
      <div id="community">
          <img id="communityBackground" alt="" src=""/>
        <CommunityNews/>
      </div>
      <Digitark/>
    </div>
    <Footer/>
    <div id="footerBottom">
        <a id="leftFooterText">Telia Eesti AS</a>
        <a>Telia is a registered Trademark of Telia Company AB</a>
    </div>
    <router-view/>
    <div id="x" @mousedown="onClick" @mouseover="onOver" @mouseleave="onLeave">
      <img src="./assets/x.png" alt="" />
    </div>
    <div id="contact" @mouseover="onOver" @mouseleave="onLeave">
      <img src="./assets/contact.png" alt="" />
    </div>
  </div>
</template>

<script>
  import BottomHeader from "./components/BottomHeader";
  import Slider from "./components/Slider";
  import Categorys from "./components/Categorys";
  import News from "./components/News";
  import LogInModal from './components/LogInModal.vue';
  import TextSlider from './components/TextSlider.vue';
  import ImageSlider from './components/ImageSlider.vue';
  import iPhone from './components/iPhone.vue';
  import SwapPhone from './components/SwapPhone.vue';
  import CommunityNews from './components/CommunityNews.vue';
  import Footer from './components/Footer.vue';
  import Digitark from './components/Digitark.vue';
  import TopHeader from "@/components/TopHeader";
  export default {
    name: 'App',
    methods: {
      onOver() {
        document.getElementById("x").style.visibility = "visible";
      },
      onLeave() {
        document.getElementById("x").style.visibility = "hidden";
      },
      onClick(){
        document.getElementById("contact").style.visibility = "hidden";
        document.getElementById("x").style.visibility = "hidden";
      }
    },
    components: {
      TopHeader,
      BottomHeader, Slider, LogInModal, Categorys, News, TextSlider, ImageSlider, iPhone, SwapPhone, CommunityNews, Footer, Digitark},
  }
</script>

<style>
  @media only screen and (max-width: 600px){
    #language1{
      visibility: hidden;
    }
    #language2{
      visibility: hidden;
    }
    #sliderImage{
      width: 100%;
      max-height: 310px;
    }
    #leftSlider{
      text-align: center;
    }
    #sliderTitle{
      font-weight: bold;
      color: #990ae3;
      font-size: 20px;
    }
    .sliderTitle{
      width: 70%;
      margin: auto auto 5%;
    }
    .sliderText{
      margin-bottom: 5%;
    }
    #sliderText{
      font-size: 20px;
      font-weight: 600;
    }
    .sliderButton{
      color: white !important;
      background: #990ae3;
      border-radius: 40px;
      padding: 15px 20px 15px 20px;
      font-size: 12px;
      font-weight: 800;
      width: 40%;
      margin: auto;
    }
    .sliderButton:hover{
      border-radius: 40px;
      font-weight: 800;
      cursor: pointer;
    }
    .carousel__indicators{
      visibility: hidden;
    }
    .carousel__indicator::before{
      background: white !important;
      opacity: 0.3;
    }
    .carousel__indicator--active::before{
      background: #990ae3 !important;
      opacity: 1;
    }
    .newsButton{
      border-radius: 20px;
      padding: 10px;
      color: #990ae3 !important;
      margin: 10px;
      float: left;
      font-size: 12px;
      font-weight: 800;
      position:relative;
      border: 2px solid transparent;
    }
    .newsButton:hover{
      border: 2px solid #990ae3;
      cursor: pointer;
      position:relative;
      padding: 10px;
      margin: 10px;
    }
    #offerImage{
      width: 100%;
    }
    #titleLeft{
      font-weight: bold;
      color: #990ae3;
      font-size: 32px;
      margin-bottom: 5%;
    }
    #offerText{
      font-size: 16px;
      margin-bottom: 5%;
      color: black;
    }
    #offerName{
      font-size: 16px;
      color: black;
    }
    #offerPriceMonth{
      font-size: 24px;
      font-weight: bold;
      color: black;
    }
    #offerPriceMonthText{
      font-size: 20px;
      color: black;
    }
    #offerPrice{
      font-size: 14px;
      color: #888888;
      margin-top: 1%;
    }
    #bottomTextSlider{
      margin: 5% auto;
    }
    #special{
      max-width: 1100px;
      display: table;
      width: 100%;
      margin: 100px auto;
    }
    #communityBackground{
      background:url("https://res.cloudinary.com/telia/image/upload/f_auto,fl_lossy,q_auto:best,w_0.5/era/avaleht/full_bg_mobile.png") no-repeat 0 0;
      background-size: 100% 100%;
      width: 100%;
      max-height: 620px;
      height: 100%;
      z-index: -1;
      position: absolute;
      overflow: hidden;
      right: 0;
      left: 0;
    }
    #community{
      min-height: 620px;
    }
    #top_left{
      text-align: left;
      display: inline-block;
    }
    #top_right{
      text-align: right;
      display: inline-block;
      float: right;
    }
    #sisenen:hover{
      color:#990ae3;
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
      color:#990ae3;
    }
    .router-link-active{
      color: #990ae3;
      background: white;
      border-top-color: #990ae3;
      border-top: 3px solid;
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
    #leftFooterText{
      margin-right: 5%;
      color: black;
      font-weight: bold;
    }
  }
  @media only screen and (max-width: 1200px) and (min-width: 600px){
    #leftSlider{
      text-align: center;
    }
    #sliderTitle{
      font-weight: bold;
      color: #990ae3;
      font-size: 20px;
    }
    .sliderTitle{
      width: 70%;
      margin: auto auto 5%;
    }
    .sliderText{
      margin-bottom: 5%;
    }
    #sliderText{
      font-size: 20px;
      font-weight: 600;
    }
    .sliderButton{
      color: white !important;
      background: #990ae3;
      border-radius: 40px;
      padding: 15px 20px 15px 20px;
      font-size: 12px;
      font-weight: 800;
      width: 40%;
      margin: auto;
    }
    .sliderButton:hover{
      border-radius: 40px;
      padding: 15px 20px 15px 20px;
      font-weight: 800;
      cursor: pointer;
    }
    .carousel__indicators{
      visibility: hidden;
    }
    .carousel__indicator::before{
      background: white !important;
      opacity: 0.3;
    }
    .carousel__indicator--active::before{
      background: #990ae3 !important;
      opacity: 1;
    }
    #sliderImage{
      width: 100%;
      max-height: 569px;
    }
    #contact{
      width: 60px;
      position: sticky;
      bottom: 3%;
      right: 1%;
      float: right;
      z-index: 200;
    }
    #contact:hover{
      cursor: pointer;
    }
    #x{
      width: 60px;
      position: sticky;
      bottom: 9.5%;
      right: 1.6%;
      float: right;
      z-index: 250;
      visibility: hidden;
    }
    #x:hover{
      cursor: pointer;
    }
    #leftFooterText{
      margin-right: 2%;
      color: black;
      font-weight: bold;
    }
    #footerBottom{
      display: flex;
      max-width: 1180px;
      margin: 3% auto auto;
      width: 100%;
      font-size: 11px;
    }
    #community{
      min-height: 520px;
      display: flex;
    }
    #communityBackground{
      background:url("https://res.cloudinary.com/telia/image/upload/f_auto,fl_lossy,q_auto:best,w_0.5/era/avaleht/full_bg_mobile.png") no-repeat 0 0;
      background-size: 100%;
      width: 100%;
      height: 520px;
      z-index: -1;
      position: absolute;
      overflow: hidden;
      right: 0;
      left: 0;
    }
    #special{
      max-width: 1100px;
      width: 100%;
      margin: 100px auto;
      display: table;
    }
    #titleLeft{
      font-weight: bold;
      color: #990ae3;
      font-size: 28px;
      margin-bottom: 5%;
    }
    #offerText{
      font-size: 16px;
      margin-bottom: 5%;
    }
    #offerName{
      font-size: 16px;
    }
    #offerPriceMonth{
      font-size: 28px;
      font-weight: bold;
      color: black;
    }
    #offerPriceMonthText{
      font-size: 20px;
      color: black;
    }
    #offerPrice{
      font-size: 14px;
      color: silver;
      margin-top: 1%;
    }
    #offerImage{
      width: 100%;
      height: auto;
    }
    #specialOffer{
      width: 1100px;
      margin: 10% 20% auto auto;
      display: table-cell;
      padding-top: 5%;
    }
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
      background: #f2f2f2;
      z-index: 200;
      width: 100%;
    }
    #container{
      background: rgba(244, 244, 244, 0.87);
      z-index: 50;
      display: inline;
    }
    #sisenen:hover{
      color:#990ae3;
      cursor: pointer;
    }
    #leftOffer{
      float: left;
      width: 45%;
      text-align: left;
      line-height: 1;
    }
    #rightOffer{
      float: right;
      width: 55%;
      line-height: 1;
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
      color:#990ae3;
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
      color: #990ae3;
      background: white;
      border-top-color: #990ae3;
      border-top: 3px solid;
    }
    .dropdown-menu{
      color: #990ae3;
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
      color: #990ae3 !important;
    }
    .dropdown-toggle:after {
      display: none;
    }
    .sliderButton{
      color: white !important;
      background: #990ae3;
      border-radius: 40px;
      padding: 15px 20px 15px 20px;
      font-size: 12px;
      font-weight: 800;
      position:relative;
    }
    .sliderButton:hover{
      color: white !important;
      background: #990ae3;
      border-radius: 40px;
      padding: 15px 20px 15px 20px;
      font-size: 12px;
      font-weight: 800;
      position:relative;
      cursor: pointer;
    }
    .newsButton{
      border-radius: 20px;
      padding: 10px;
      color: #990ae3 !important;
      margin: 10px;
      float: left;
      font-size: 12px;
      font-weight: 800;
      position:relative;
      border: 2px solid transparent;
    }
    .newsButton:hover{
      border: 2px solid #990ae3;
      cursor: pointer;
      position:relative;
      padding: 10px;
      margin: 10px;
    }
  }
  @media only screen and (min-width: 1200px){
    #sliderImage{
      width: 100%;
      max-height: 569px;
    }
    #contact{
      width: 60px;
      position: sticky;
      bottom: 3%;
      right: 1%;
      float: right;
      z-index: 200;
    }
    #contact:hover{
      cursor: pointer;
    }
    #x{
      width: 60px;
      position: sticky;
      bottom: 9.5%;
      right: 1.6%;
      float: right;
      z-index: 250;
      visibility: hidden;
    }
    #x:hover{
      cursor: pointer;
    }
    #leftFooterText{
      margin-right: 2%;
      color: black;
      font-weight: bold;
    }
    #footerBottom{
      display: flex;
      max-width: 1180px;
      margin: 3% auto auto;
      width: 100%;
      font-size: 11px;
    }
    #community{
      min-height: 520px;
      display: flex;
    }
    #communityBackground{
      background: url("https://res.cloudinary.com/telia/image/upload/f_auto,fl_lossy,q_auto:best/era/avaleht/full_bg.png");
     background-size: 100%;
      width: 100%;
      height: 520px;
      z-index: -1;
      position: absolute;
      overflow: hidden;
      right: 0;
      left: 0;
    }
    #special{
      max-width: 1100px;
      width: 100%;
      margin: 100px auto;
      display: table;
    }
    #titleLeft{
      font-weight: bold;
      color: #990ae3;
      font-size: 43px;
      margin-bottom: 5%;
    }
    #offerText{
      font-size: 18px;
      margin-bottom: 10%;
    }
    #offerName{
      font-size: 18px;
    }
    #offerPriceMonth{
      font-size: 32px;
      font-weight: bold;
      color: black;
    }
    #offerPriceMonthText{
      font-size: 20px;
      color: black;
    }
    #offerPrice{
      font-size: 14px;
      color: silver;
      margin-top: 1%;
    }
    #offerImage{
      width: 100%;
      height: auto;
    }
    #specialOffer{
      width: 1100px;
      margin: 6% 20% auto auto;
      display: table-cell;
    }
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
      background: #f2f2f2;
      z-index: 200;
      width: 100%;
    }
    #container{
      background: rgba(244, 244, 244, 0.87);
      z-index: 50;
      display: inline;
    }
    #sisenen:hover{
      color:#990ae3;
      cursor: pointer;
    }
    #leftSlider{
      float: left;
      width: 29%;
      text-align: left;
      line-height: 1;
    }
    #leftOffer{
      float: left;
      width: 45%;
      text-align: left;
      line-height: 1;
    }
    #rightOffer{
      float: right;
      width: 55%;
      line-height: 1;
    }
    #rightSlider{
      float: right;
      width: 70%;
    }
    .sliderTitle{
      font-weight: bold;
      color: #990ae3;
      font-size: 50px;
      margin: 20% 0 10% 0;
    }
    .sliderText{
      font-size: 18px;
      margin-bottom: 10%;
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
      color:#990ae3;
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
      color: #990ae3;
      background: white;
      border-top-color: #990ae3;
      border-top: 3px solid;
    }
    .dropdown-menu{
      color: #990ae3;
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
      color: #990ae3 !important;
    }
    .dropdown-toggle:after {
      display: none;
    }
    .carousel__indicator::before{
      background: white !important;
      opacity: 0.3;
    }
    .carousel__indicator--active::before{
      background: #990ae3 !important;
      opacity: 1;
    }
    .sliderButton{
      color: white !important;
      background: #990ae3;
      border-radius: 40px;
      padding: 15px 20px 15px 20px;
      float: left;
      font-size: 12px;
      font-weight: 800;
      position:relative;
    }
    .sliderButton:hover{
      color: white !important;
      background: #990ae3;
      border-radius: 40px;
      padding: 15px 20px 15px 20px;
      float: left;
      font-size: 12px;
      font-weight: 800;
      position:relative;
      cursor: pointer;
    }
    .newsButton{
      border-radius: 20px;
      padding: 10px;
      color: #990ae3 !important;
      margin: 10px;
      float: left;
      font-size: 12px;
      font-weight: 800;
      position:relative;
      border: 2px solid transparent;
    }
    .newsButton:hover{
      border: 2px solid #990ae3;
      cursor: pointer;
      position:relative;
      padding: 10px;
      margin: 10px;
    }
  }
</style>