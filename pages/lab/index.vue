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
        <div class="post-thumbnail">
          <p>Hello</p>
        </div>
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
                <div class="post-thumbnail">
          <p>Hello</p>
        </div>
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
                <div class="post-thumbnail">
          <p>Hello</p>
        </div>
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
               <div class="post-thumbnail">
          <p>Hello</p>
        </div>
        <div class="post-content">
          <h1>Post Title</h1>
          <p>Preview Text</p>
        </div>
      </article>
      </nuxt-link>
      </div>
    </section>
        <section class="intro">
    <p class="p-title news">Latest Tech News</p >
    <h1 class="text">Blog Posts</h1>
    </section>
    <section class="feature-posts">
      <div class="post-c">
      <nuxt-link :to="'/lab/'+ 1">
      <article class="post-preview">
        <div class="post-thumbnail">
          <p>Hello</p>
        </div>
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
                <div class="post-thumbnail">
          <p>Hello</p>
        </div>
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
                <div class="post-thumbnail">
          <p>Hello</p>
        </div>
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
               <div class="post-thumbnail">
          <p>Hello</p>
        </div>
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
a{
  text-decoration: none;
  color: rgba(87, 167, 41, 1);
}
.feature-posts{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20vw, 1fr));
  @include breakpoint(xs){
    grid-template-columns: repeat(auto-fit, minmax(50vw, 1fr));
  }
  grid-auto-rows: 30vh;
  column-gap: 1rem;
  row-gap: 1rem;

  .post-preview{
    width: 100%;
    height: 100%;
    background-image: url('//unsplash.it/2000/3000');
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    &:hover{
      .post-thumbnail{
          transform: scale(1);
          background: rgba(26, 26, 26, 0.3);
          border: .01rem solid rgba(255, 255, 255, 1);
          p{
            opacity: 1;
            visibility: visible;
          }
      }
      .post-content{
      z-index: 2;
      transform: translateY(0rem);
          p{
      color: #fff;
      visibility: visible;
      opacity: 1;
    }
    }

    }
    .post-content{
      z-index: 2;
      transform: translateY(2rem);
      transition: all .4s ease-out;
      padding: 1rem;
          p{
      color: #fff;
      visibility: hidden;
      opacity: 0;
      transition: all .4s ease-out;
    }
    }
    .post-thumbnail{
      background: rgba(26, 26, 26, 0);
      width: 80%;
      height: 80%;
      position: absolute;
      border-left-width: .01rem solid rgba(255, 255, 255, 0);
      transition: all .4s ease-out;
      transform: scale(0);
      p{
        color: #fff;
        background: rgba(129, 129, 129, 0.432);
        width: 100%;
        bottom: 0rem;
        position: absolute;
        padding: .1rem;
        height: 4rem;
        visibility: hidden;
        opacity: 0;
        transition: all .4s ease-out;
      }
      &::before{
        content: '';
        display: block;
        background: rgba(27, 27, 27, 0.5);
        width: 100%;
        height: 100%;
        filter: blur(1px);
      }
    }
    h1{
      @include rfs(2rem);
      padding-bottom: .5rem;

    }

}
}
.news{
  margin-top: 3rem;
}
</style>
