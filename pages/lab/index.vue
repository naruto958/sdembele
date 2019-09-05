<template>
  <div class="container">
    <section class="intro">
    <p class="p-title">What's happening</p >
    <h1 class="text">Youtube</h1>
    </section>
    <PostList :posts="loadedPosts"/>
    <section class="intro">
    <p class="p-title news">Latest Tech News</p >
    <h1 class="text">Blog Posts</h1>
    </section>
    <PostList/>
  </div>
</template>

<script>
import PostList from "~/components/lab/PostList.vue";
export default {
  components: {
    PostList
  },
    data(){
    return{
      loadedPosts: [
        {
          id: '1',
          title: 'first loaded post',
          previewText: 'this is the preview text',
          thumbnail: '//unsplash.it/300/400'
        },
        {
          id: '2',
          title: 'second loaded post',
          previewText: 'this is the preview text',
          thumbnail: '//unsplash.it/300/400'
        }
      ]
    }
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
        x: window.innerWidth,
        transformOrigin: '50% 50%',
        ease: Sine.easeOut
      })
      done()
    },
    leave (el, done) {
      TweenMax.to(el, 1, {
        x: 0,
        transformOrigin: '50% 50%',
        ease: Back.easeIn
      })
      done()
    }
  },
}
</script>

<style lang="scss" scoped>
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

</style>
