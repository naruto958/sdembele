<template>
  <div class="container">
    <section class="intro">
    <p class="p-title">What's happening</p >
    <h1 class="text">Youtube</h1>
    </section>
    <section class="feature-posts">
      <div class="post-c">
      <nuxt-link :to="'/lab/'+ 1">
      <article class="post-preview">
        <div class="post-thumbnail"></div>
        <div class="post-content">
          <h1>Post Title</h1>
          <p>Preview Text</p>
        </div>
      </article>
      </nuxt-link>
      </div>
            <div class="post-c">
      <nuxt-link :to="'/lab/'+ 1">
      <article class="post-preview">
        <div class="post-thumbnail"></div>
        <div class="post-content">
          <h1>Post Title</h1>
          <p>Preview Text</p>
        </div>
      </article>
      </nuxt-link>
      </div>
            <div class="post-c">
      <nuxt-link :to="'/lab/'+ 1">
      <article class="post-preview">
        <div class="post-thumbnail"></div>
        <div class="post-content">
          <h1>Post Title</h1>
          <p>Preview Text</p>
        </div>
      </article>
      </nuxt-link>
      </div>
            <div class="post-c">
      <nuxt-link :to="'/lab/'+ 1">
      <article class="post-preview">
        <div class="post-thumbnail"></div>
        <div class="post-content">
          <h1>Post Title</h1>
          <p>Preview Text</p>
        </div>
      </article>
      </nuxt-link>
      </div>
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
.feature-posts{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20vw, 1fr));
  grid-auto-rows: 30vh;
  column-gap: 1rem;
  row-gap: 1rem;
  .post-preview{
    width: 100%;
    height: 100%;
    background: orangered;
}
}

</style>
