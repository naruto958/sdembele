<template>
  <div class="container">
   <section class="about">
      <p class="p-title">Who Am i</p>
    <h2 class="text">About</h2>
    <p class="description">I am a Fullstack Developer at <span><a href="http://www.flowstatecreatives.com" target="_blank">Flowstate Creatives</a></span> in Olympia, WA
</p>
<br>
<p class="description">Vitae blandit elit rutrum eu. Sed semper elit eget placerat condimentum.

Sed iaculis dignissim est tempor sagittis. Praesent a rhoncus mauris, sed ultricies urna. Nullam blandit risus erat. Fusce ut ante facilisis dolor dictum aliquet.</p>
<br>
   </section>
   <section class="expertise">
     <p class="p-title">What Can I bring to the Table</p>
      <h2 class="text">Expertise</h2>

   </section>
      <section class="expertise">
     <p class="p-title">What I Love to Do</p>
      <h2 class="text">EXPERIENCES</h2>

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
</style>
