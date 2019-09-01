<template>
  <div class="container">
    <section class="intro">
      <div class="hero-section">
<h1>Get the latest tech news!</h1>
      </div>
    </section>
    <section class="feature-posts">
      <nuxt-link :to="'/lab/'+ 1">
      <article class="post-preview">
        <div class="post-thumbnail"></div>
        <div class="post-content">
          <h1>Post Title</h1>
          <p>Preview Text</p>
        </div>
      </article>
      </nuxt-link>
      <nuxt-link :to="'/lab/'+ 2">
      <article class="post-preview">
        <div class="post-thumbnail"></div>
        <div class="post-content">
          <h1>Post Title</h1>
          <p>Preview Text</p>
        </div>
      </article>
      </nuxt-link>
        <nuxt-link :to="'/lab/'+ 3">
      <article class="post-preview">
        <div class="post-thumbnail"></div>
        <div class="post-content">
          <h1>Post Title</h1>
          <p>Preview Text</p>
        </div>
      </article>
      </nuxt-link>
    </section>
  </div>
</template>

<script>
export default {
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
.post-preview{
 width: 10rem;
 height: 10rem;
}
.post-thumbnail{
  width: 10rem;
  height: 10rem;
  background-image: linear-gradient(to right bottom, rgba(87, 167, 41, 0.616), rgba(100, 172, 82, 0.541)), url('//unsplash.it/200/300');

}
.post-content{

}
</style>
