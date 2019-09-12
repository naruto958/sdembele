<template>
  <div class="container">
    <section class="intro">
    <p class="p-title">My Work</p >
    <h1 class="text">Project</h1>
    <p>Filters:
      <ul>
        <li><a href="#all" @click="all()">All</a></li>
        <li><a href="#web" @click="web()">Web Design</a></li>
        <li><a href="#ui" @click="ui()">UI/UX</a></li>
        <li><a href="#android" @click="android()">Android</a></li>
        <li><a href="#ios" @click="ios()">Ios</a></li>
      </ul>
    </p>
    
    </section>
    <hr>
<PostList :posts="this.$store.state.projectPosts"/>
  </div>
</template>

<script>
import PostList from "~/components/lab/PostList.vue";
export default {
  components: {
    PostList
  },
  methods: {
    all(){

    },
    web(){

    },
    ui(){

    },
    android(){

    },
    ios(){

    },
  },
  transition: {
    mode: 'out-in',
    css: false,
    beforeEnter (el) {
		console.log('before');
      TweenMax.set(el, {
        transformPerspective: 600,
        perspective: 300,
        x:0,
        transformStyle: 'preserve-3d'
      })
    },
    enter (el, done) {
	console.log('enter');
      TweenMax.from(el, .5, {
        scale: 0,
        transformOrigin: '50% 50%',
        ease: Sine.easeOut,
        onComplete: done()
      })
      
    },
    beforeLeave (el,) {
      TweenMax.to(el, 1, {
        scale: 0,
        transformOrigin: '50% 50%',
        ease: Back.easeIn
      })
    },
    leave (el, done) {
      TweenMax.to(el, 1, {
        scale: 0,
        transformOrigin: '50% 50%',
        ease: Back.easeIn,
        onComplete: done()
      })
    }
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/sass/main.scss';
.hero-section{
  width: 75vw;

  //
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: -1rem;
  display: flex;
  justify-content: center;
  h1{
background-image: linear-gradient(to right bottom, rgba(87, 167, 41, 1), rgba(100, 172, 82, 1));
-webkit-box-shadow: 7px 7px 5px -8px rgba(141,158,109,1);
-moz-box-shadow: 7px 7px 5px -8px rgba(141,158,109,1);
box-shadow: 7px 7px 5px -8px rgba(141,158,109,1);
color: #fff;
width: 50vw;
text-align: center;
margin-top: 2rem;
margin-bottom: 2rem;
padding: 1rem;
border-radius: 10px;
  }
}

.news{
  margin-top: 3rem;
}
.intro{
  margin-bottom: 1rem; 
  ul{
    display: inline;
    li{
      list-style-type: none;
      display: inline;
      padding-left: 1rem;
    }
  }
}
hr{
  margin-bottom: 1rem;
}
</style>
