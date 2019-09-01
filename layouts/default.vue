<template>

  <div class="container-">
      <section class="intro-box">
            <h1 id="hello">Hello,</h1>
            <h2 ref="myName">I am Souleymane Dembele</h2>
      <h3>I am a <span> FullStack Developer</span></h3>
    </section>
        <div class="content">
        <header class="header">
        <ul class="menu">
            <li class="menu-item"><nuxt-link to="/about">About</nuxt-link></li>
            <li class="menu-item"><nuxt-link to="/portfolio">Portfolio</nuxt-link></li>
            <li class="menu-item"><nuxt-link to="/lab">Lab</nuxt-link></li>
            <li class="menu-item"><nuxt-link to="/contact">Contact</nuxt-link></li>
            <nuxt-link to="/"><li class="menu-item"><span class="close-button">Home</span></li></nuxt-link>
        </ul>
    </header>
    <nuxt />
    </div>
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
<style lang="scss" scoped>

.container-{
  display: flex;
  background: olive;
max-width: 100%;
justify-content: space-between;
}
.content{
width: 75vw;
}
.intro-box{
background: orange;
width:25vw;
height: 100vh;
position: sticky;
top:0;
}
.header{
background: orangered;
position: sticky;
top:0;
}
</style>
