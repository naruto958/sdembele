<template>
  <div>
  <div class="container">
        <header class="header">
        <ul class="menu">
            <li class="menu-item"><nuxt-link to="/about">About</nuxt-link></li>
            <li class="menu-item"><nuxt-link to="/portfolio">Portfolio</nuxt-link></li>
            <li class="menu-item"><nuxt-link to="/lab">Lab</nuxt-link></li>
            <li class="menu-item"><nuxt-link to="/contact">Contact</nuxt-link></li>
            <nuxt-link to="/"><li class="menu-item"><span class="close-button">Home</span></li></nuxt-link>
        </ul>
    </header>
        <div class="intro-box">
      <div class="name-corner">
            <h1 id="hello">Hello,</h1>
            <h2 ref="myName">I am Souleymane Dembele</h2>
      <h3>I am a <span> FullStack Developer</span></h3>
      </div>
      </div>

  </div>
<nuxt />
  </div>
</template>
<style lang="scss">
</style>
<script>
import IntroBox from '~/components/shared/IntroBox.vue'
import Header from '~/components/shared/Header.vue'
export default {
  components:{
    'app-intro-box': IntroBox,
    'app-header': Header,
  }
}
</script>
<style scoped>
.container{
  display: flex;
}
header.header{
    background: #fff;
    box-shadow: 0 -1px #dddddd inset;
    padding-bottom: 10px;
    padding-top: 10px;
    position: fixed;
    transition: all 0.5s ease 0s;
    width: 69%;
    top:0;
    z-index: 1;
            a{
            color: #000;
            text-decoration: none;
        }
    }
        ul.menu li{
        display: inline-block;
        padding: 1rem;

    }
    ul{
        float: right;
        liste-style: none;

    }
.intro-box {
     background-color: #2af598;
     display: flex;
     align-items: center;
     max-width: 100vw;
     position: relative;
     height: 100vh;
     width:31vw;
     max-width: 100%;
      position: sticky;
      top: 0;
      left:0;
     }
    .name-corner{
    position: absolute;
    padding-left: 4rem;
    width: 100%;
    background: olive;
    padding: 1rem;
    }
    .name-corner h2{
    color: #fff;
    font-weight: 700;
    margin-bottom: 10px;
    text-transform: capitalize;
    font-family: Arvo;
    line-height: 60px;
    margin: 0;
    }
</style>
